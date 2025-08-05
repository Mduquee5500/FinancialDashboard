const TransferFromSavingsToBudgetUseCase = async (savingsRepository, userId, budgetId, amount) => {
    if (!userId || typeof userId !== 'string') {
        throw new Error('Invalid user id');
    }

    if (!budgetId || typeof budgetId !== 'string') {
        throw new Error('Invalid budgetId');
    }

    if (amount <= 0 || typeof amount !== 'number') {
        throw new Error('Invalid amount');
    }

    const updatedSavings = await savingsRepository.transferFromSavingsToBudget(userId, budgetId, amount);
    if (!updatedSavings) {
        throw new Error('Savings not found or update failed');
    }

    return updatedSavings;
}