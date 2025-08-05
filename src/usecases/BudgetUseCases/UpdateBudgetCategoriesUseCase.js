const UpdateBudgetCategoriesUseCase = async (budgetRepository, budgetId, categoryUpdates) => {
    if (!budgetId || typeof budgetId !== 'string') {
        throw new Error('Invalid budgetId');
    }

    if (!categoryUpdates || typeof categoryUpdates !== 'object') {
        throw new Error('Invalid category updates');
    }

    const updatedBudget = await budgetRepository.updateBudgetCategories(budgetId, categoryUpdates);

    if (!updatedBudget) {
        throw new Error('Budget not found or update failed');
    }

    return updatedBudget;
};
