const UpdateTransactionUseCase = async (transactionRepository, transactionId, transactionDate) => {
    if (!transactionId || typeof transactionId !== 'string') {
        throw new Error('Invalid transaction id');
    }

    if (!transactionDate || isNaN(Date.parse(transactionDate))) {
        throw new Error('Invalid transaction date');
    }

    const updatedTransaction = await transactionRepository.updateTransaction(transactionId, transactionDate);
    if (!updatedTransaction) {
        throw new Error('Transaction not found or update failed');
    }

    return updatedTransaction;
}