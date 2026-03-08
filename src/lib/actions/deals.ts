"use server";

import { db } from "@/lib/db";
import { deals } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createDeal(values: any) {
  try {
    const [newDeal] = await db.insert(deals).values(values).returning();
    revalidatePath("/dashboard/deals");
    return { data: newDeal };
  } catch (error) {
    console.error("Error creating deal:", error);
    return { error: "Failed to create deal" };
  }
}

export async function updateDealStatus(id: string, status: string) {
  try {
    const [updatedDeal] = await db
      .update(deals)
      .set({ status })
      .where(eq(deals.id, id))
      .returning();
    revalidatePath("/dashboard/deals");
    return { data: updatedDeal };
  } catch (error) {
    console.error("Error updating deal status:", error);
    return { error: "Failed to update deal" };
  }
}

export async function deleteDeal(id: string) {
  try {
    await db.delete(deals).where(eq(deals.id, id));
    revalidatePath("/dashboard/deals");
    return { success: true };
  } catch (error) {
    console.error("Error deleting deal:", error);
    return { error: "Failed to delete deal" };
  }
}

export async function getDeals(workspaceId: string) {
  try {
    const allDeals = await db
      .select()
      .from(deals)
      .where(eq(deals.workspaceId, workspaceId));
    return { data: allDeals };
  } catch (error) {
    console.error("Error fetching deals:", error);
    return { error: "Failed to fetch deals" };
  }
}
