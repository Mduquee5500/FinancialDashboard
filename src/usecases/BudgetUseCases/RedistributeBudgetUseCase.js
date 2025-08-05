

const RedistributeBudgetUseCase = async (budgetRepository, budgetId, fromCategory, toCategory, amount) => {
    if (!budgetId || typeof budgetId !== 'string') {
        throw new Error('Invalid budgetId');
    }

    if (!fromCategory || !toCategory || fromCategory === toCategory){
        throw new Error('Invalid category');
    }

    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Invalid amount');
    }

    const budget = await budgetRepository.getBudgetById(budgetId)
    if (!budget) {
        throw new Error('Budget not found');
    }

    const fromValue = budget[fromCategory]
    const toValue = budget[toCategory]

    if (typeof fromValue !== 'number' || typeof toValue !== 'number') {
        throw new Error('Invalid budget');
    }

    if (fromValue < amount) {
        throw new Error('Insufficient funds');
    }

    const updateBudget = await budgetRepository.redistributeBudget(budgetId, fromCategory, toCategory, amount)
    if (!updateBudget) {
        throw new Error('Budget not found or update failed');
    }

    return updateBudget
}