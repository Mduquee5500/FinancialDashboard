const UpdateSavingsAmountUseCase = async (savingsRepository, userId, newAmount) => {
    if (!userId || typeof userId !== 'string') {
        throw new Error('Invalid user id');
    }

    if (newAmount <= 0 || typeof newAmount !== 'number') {ç
        throw new Error('Invalid amount');
    }

    const updatedSavings = await savingsRepository.updateSavingsAmount(userId, newAmount);
    if (!updatedSavings) {
        throw new Error('Savings not found or update failed');
    }
    
    return updatedSavings;
};