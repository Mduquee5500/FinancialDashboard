export class TransactionRepository {
  async getTransactionsByBudget(budgetId) {
    throw new Error("getTransactionsByBudget method must be implemented");
  }

  async getTransactionsByUserAndDateRange(userId, startDate, endDate) {
    throw new Error("getTransactionByUserAndRange must be implemented");
  }

  async createTransaction(transactionData) {
    throw new Error("createTransaction must be implemented");
  }

  async updateTransaction(transactionId, transactionData) {
    throw new Error("updateTransaction must be implemented");
  }

  async deleteTransaction(transactionId) {
    throw new Error("deleteTransaction must be implemented");
  }

  async getTransactionsByCategory(budgetId, category) {
    throw new Error("getTransactionsByCategory must be implemented");
  }
}
