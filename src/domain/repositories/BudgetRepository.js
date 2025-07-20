export class BudgetRepository {
    async getBudgetByUserAndMonth(userId, monthYear) {
        throw new Error('getBudgetByUserAndMonth method must be implemented')
    }

    async createBudget(budgetData) {
        throw new Error('createBudget method must be implemented')
    }

    async updateBudgetCategories(budgetId, categoryUpdates) {
        throw new Error('updateBufgetCategories method must be implemented')
    }

    async confirmBudget(budgetId) {
        throw new Error('confirmBudget method must be implemented')
    }

    async redistributeBudget(budgetId, fromCategory, toCategory, amount){
        throw new Error('redistributeBudget method must be implemented')
    }
}