const ConfirmBudgetUseCase = async (budgetRepository, budgetId) => {
    if (!budgetId || typeof budgetId !== 'string') {
        throw new Error('Invalid budgetId');
    }

    const confirmBudget = await budgetRepository.confirmBudget(budgetId);

    if (!confirmBudget) {
        throw new Error('Budget not found or confirmation failed');
    }

    return confirmBudget;
}