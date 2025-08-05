import { TransactionRepository } from "../domain/repositories/TransactionRepository";
import { supabase } from "../shared/supabase";

export class SupabaseTransactionRepository extends TransactionRepository {
  async getTransactionsByBudget(budgetId) {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("budget_id", budgetId)
      .single();

    if (error) {
      throw new Error(`Failed fetching the budget: ${error.message}`);
    }

    return data;
  }

  async getTransactionsByUserAndDateRange(userId, startDate, endDate) {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", userId)
      .gte("transaction_date", startDate)
      .lte("transaction_date", endDate);

    if (error) {
      throw new Error(`Failed fetching transactions: ${error.message}`);
    }
  }

  async createTransaction(transactionData) {
    const { data, error } = await supabase
      .from("transactions")
      .insert(transactionData)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed creating transaction: ${error.message}`);
    }

    return data;
  }

  async updateTransaction(transactionId, transactionData) {
    const { data, error } = await supabase
      .from("transactions")
      .update(transactionData)
      .eq("id", transactionId)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed updating transaction data: ${error.message}`);
    }

    return data;
  }

  async deleteTransaction(transactionId) {
    const { data, error } = await supabase
      .from("transactions")
      .delete()
      .eq("id", transactionId)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed deleting transaction: ${error.message}`);
    }

    return data;
  }

  async getTransactionsByCategory(budgetId, category) {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("budget_id", budgetId)
      .eq("category", category);

    if (error) {
      throw new Error(
        `Failed fetching transaction by category: ${error.message}`
      );
    }

    return data;
  }
}
