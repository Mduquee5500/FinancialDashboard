const AddToSavingsUseCase = async (savingsRepository, userId, amount) => {
    if (!userId || typeof userId !== 'string') {
        throw new Error('Invalid user id');
    }

    if (amount <= 0 || typeof amount !== 'number') {
        throw new Error('Invalid amount');
    }

    const updatedSavings = await savingsRepository.addToSavings(userId, amount);
    if (!updatedSavings) {
        throw new Error('Savings not found or update failed');
    }

    return updatedSavings;
}