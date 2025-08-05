const GetTransactionByUserAndDateRange = async (transactionRepository, userId, startDate, endDate) => {
    if (!userId || typeof userId !== 'string') {
        throw new Error('Invalid user id');
    }

    if (!startDate || !endDate) {
        throw new Error('Invalid date range');
    }

    const transactions = await transactionRepository.getTransactionsByUserAndDateRange(userId, startDate, endDate);
    if (!transactions) {
        throw new Error('Transactions not found');
    }
    
    return transactions;
}