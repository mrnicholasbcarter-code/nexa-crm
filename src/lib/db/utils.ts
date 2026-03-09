import { db } from "@/lib/db";
import { users, workspaces, workspaceMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export async function getOrCreateUserAndWorkspace() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const email = clerkUser.emailAddresses[0].emailAddress;

  // 1. Get or create user
  let dbUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!dbUser) {
    [dbUser] = await db
      .insert(users)
      .values({
        email,
        name: clerkUser.firstName + " " + (clerkUser.lastName || ""),
      })
      .returning();
  }

  // 2. Get or create workspace
  let member = await db.query.workspaceMembers.findFirst({
    where: eq(workspaceMembers.userId, dbUser.id),
  });

  let workspace;
  if (!member) {
    // Create first workspace
    [workspace] = await db
      .insert(workspaces)
      .values({
        name: `${clerkUser.firstName}'s Workspace`,
        slug: clerkUser.username || clerkUser.firstName?.toLowerCase() || "default",
      })
      .returning();

    await db.insert(workspaceMembers).values({
      workspaceId: workspace.id,
      userId: dbUser.id,
      role: "admin",
    });
  } else {
    workspace = await db.query.workspaces.findFirst({
      where: eq(workspaces.id, member.workspaceId),
    });
  }

  return { user: dbUser, workspace };
}
