import { BudgetRepository } from "../domain/repositories/BudgetRepository";
import { supabase } from "../shared/supabase";

export class SupabaseBudgetRepository extends BudgetRepository {
    async getBudgetByUserAndMonth(userId, monthYear) {
        const { data, error } = await supabase.from('monthly_budgets').select('*').eq('user_id', userId).eq('month_year', monthYear).single()

        if (error) {
            throw new Error(`Failed to fetch budget: ${error.message}`)
        }

        return data
    }

    async createBudget(budgetData) {
        const { data, error } = await supabase.from('monthly_budgets').insert(budgetData).select().single()

        if (error) {
            throw new Error(`Failed creating budget: ${error.message}`)
        }

        return data
    }

    async updateBudgetCategories(budgetId, categoryUpdates) {
        const { data, error } = await supabase.from('monthly_budgets').update(categoryUpdates).eq('id', budgetId).select().single()

        if (error) {
            throw new Error(`Failed to update budget: ${error.message}`)
        }

        return data
    }

    async confirmBudget(budgetId) {
        const { data, error } = await supabase.from('monthly_budgets').update({
            confirmed_at: new Date().toISOString()
        }).eq('id', budgetId).select().single()

        if (error) {
            throw new Error(`Failed to confirm budget changes: ${error.message}`)
        }

        return data
    }

    async redistributeBudget(budgetId, fromCategory, toCategory, amount) {
        const { data: budget, error: fetchError } = await supabase.from('monthly_budgets').select('*').eq('id', budgetId).single()

        if (fetchError) {
            throw new Error(`Failed to get budget: ${fetchError.message}`)
        }

        const newFromAmount = budget[fromCategory] - amount
        const newToAmount = budget[toCategory] + amount

        const { data, error } = await supabase.from('monthly_budgets').update({
            [fromCategory]: newFromAmount,
            [toCategory]: newToAmount
        }).eq('id', budgetId).select().single()

        if (error) {
            throw new Error(`Failed to redistribute budget: ${error.message}`)
        }

        return data
    }

}