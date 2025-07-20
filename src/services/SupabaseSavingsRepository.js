import { SavingsRepository } from "../domain/repositories/SavingsRepository";
import { supabase } from "../shared/supabase";

export class SupabaseSavingsRepository extends SavingsRepository {
  async getSavingsByUser(userId) {
    const { data, error } = await supabase
      .from("savings")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      throw new Error(`Failed fetching savings: ${error.message}`);
    }

    return data;
  }

  async updateSavingsAmount(userId, newAmount) {
    const { data, error } = await supabase
      .from("savings")
      .update({ current_amount: newAmount })
      .eq("user_id", userId)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed updating savings: ${error.message}`);
    }

    return data;
  }

  async addToSavings(userId, amount) {
    const { data: savingsData, error: savingsError } = await supabase
      .from("savings")
      .select("current_amount")
      .eq("user_id", userId)
      .single();

    if (savingsError) {
      throw new Error(
        `Failed fetching current savings amount: ${savingsError.message}`
      );
    }

    const newAmount = savingsData.current_amount + amount;

    const { data, error: updateError } = await supabase
      .from("savings")
      .update({
        current_amount: newAmount,
      })
      .eq("user_id", userId)
      .select()
      .single();

    if (updateError) {
      throw new Error(`Failed updating savings: ${updateError.message}`);
    }

    return data;
  }

  async useSavings(userId, amount) {
    const { data: savingsData, error } = await supabase
      .from("savings")
      .select("current_amount")
      .eq("user_id", userId)
      .single();

    if (error) {
      throw new Error(`Failed fetching current savings: ${error.message}`);
    }

    const newAmount = savingsData.current_amount - amount;

    const { data, error: updateError } = await supabase
      .from("savings")
      .update({ current_amount: newAmount })
      .eq("user_id", userId)
      .select()
      .single();

    if (updateError) {
      throw new Error(`Failed using savings: ${updateError.message}`);
    }

    return data;
  }

  async transferFromSavingsToBudget(userId, budgetId, amount) {
    const { data: budgetData, error: budgetError } = await supabase
      .from("monthly_budgets")
      .select("total_amount")
      .eq("id", budgetId)
      .single();

    if (budgetError) {
      throw new Error(`Failed to fetch budget: ${budgetError.message}`);
    }

    const { data: savingsData, error: savingsError } = await supabase
      .from("savings")
      .select("current_amount")
      .eq("user_id", userId)
      .single();

    if (savingsError) {
      throw new Error(`Failed fetching savings: ${savingsError.message}`);
    }

    const newBudgetAmount = budgetData.total_amount + amount;
    const newSavingsAmount = savingsData.current_amount - amount;

    const { data: updatedBudget, error: budgetUpdateError } = await supabase
      .from("monthly_budgets")
      .update({ total_amount: newBudgetAmount })
      .eq("id", budgetId)
      .select()
      .single();

    if (budgetUpdateError) {
      throw new Error(`Failed updating budget: ${budgetUpdateError.message}`);
    }

    const { data: updatedSavings, error: savingsUpdateError } = await supabase
      .from("savings")
      .update({ current_amount: newSavingsAmount })
      .eq("user_id", userId)
      .select()
      .single();

    if (savingsUpdateError) {
      throw new Error(`Failed updating savings: ${savingsUpdateError.message}`);
    }

    return {
      budget: updatedBudget,
      savings: updatedSavings,
    };
  }
}
