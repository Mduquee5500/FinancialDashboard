const GetSavingsUseCase = async (savingsRepository,  userId) => {
    if (!userId || typeof userId !== 'string') {
        throw new Error('Invalid user id');
    }

    const savings = await savingsRepository.getSavingsByUser(userId);
    if (!savings) {
        throw new Error('Savings not found');
    }

    return savings;
};