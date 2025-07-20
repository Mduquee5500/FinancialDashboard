export class SavingsRepository {
    async getSavingsByUser(userId) {
        throw new Error('getSavingsByUser method must be implemented')
    }

    async updateSavingsAmount(userId, newAmount) {
        throw new Error('updateSavingsAmount method must be implemented')
    }

    async addToSavings(userId, amount) {
        throw new Error('addToSavings method must be implemented')
    }

    async useSavings(userId, amount) {
        throw new Error('useSavings mehtod must be implemented')
    }

    async transferFromSavingsToBudget(userId, budgetId, amount) {
        throw new Error('transferFromSavingsToBudget method must be implemented')
    }
}