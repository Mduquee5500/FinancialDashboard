const CreateMonthlyBudgetUseCase = async (budgetRepository, userRepository, userId, monthYear, budgetData) => {
    const user = await userRepository.getById(userId)
    if (!user) {
        throw new Error('User not found')
    }

    const existingBudget = await budgetRepository.getBudgetByUserAndMonth(userId, monthYear)
    if (existingBudget) {
        throw new Error('Budget already exists for this month')
    }

    const newBudget = await budgetRepository.createBudget({
        userId,
        monthYear,
        ...budgetData,
    })

    return newBudget
}