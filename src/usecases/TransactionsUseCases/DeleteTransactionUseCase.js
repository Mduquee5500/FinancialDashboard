const DeleteTransactionUseCase = async (transactionRepository, transactionId) => {
    if (!transactionId || typeof transactionId !== 'string') {
        throw new Error('Invalid transaction id');
    }
    const deletedTransaction = await transactionRepository.deleteTransaction(transactionId);
    if (!deletedTransaction) {
        throw new Error('Transaction not found or delete failed');
    }

    return deletedTransaction;
};