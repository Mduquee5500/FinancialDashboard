const GetTransactionsByCategory = async (transactionRepository, transactionId, transactionDate) => {
    if (!transactionId || typeof transactionId !== 'string') {
        throw new Error('Invalid transaction id');
    }

    if (!transactionDate || isNaN(Date.parse(transactionDate))) {
        throw new Error('Invalid transaction date');
    }

    const transactions = await transactionRepository.getTransactionsByCategory(transactionId, transactionDate);
    if (!transactions) {
        throw new Error('Transactions not found');
    }
    
    return transactions;
}