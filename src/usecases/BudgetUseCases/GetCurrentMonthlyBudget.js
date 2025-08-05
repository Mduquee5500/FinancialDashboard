const GetCurrentMonthlyBudget = async (budgetRepository, userRepository, userId, monthYear) => {
    const user = await userRepository.getById(userId)
    if (!user) {
        throw new Error('User not found')
    }

    const currentBudget = await budgetRepository.getBudgetByUserAndMonth(userId, monthYear)
    if (!currentBudget) {
        throw new Error('Budget not found')
    }

    return currentBudget
}