const CreateTransactionUseCase = async (transactionRepository, transactionDate) => {
    if (!transactionDate || isNaN(Date.parse(transactionDate))) {
        throw new Error('Invalid transaction date');
    }

    const transaction = await transactionRepository.createTransaction(transactionDate);

    if (!transaction) {
        throw new Error('Transaction not created');
    }

    return transaction;
}