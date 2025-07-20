export const validateTransactionCreation = (transactionData) => {
  if (!transactionData.amount || transactionData.amount <= 0) {
    throw new Error("Transaction amount must be greater than zero")
  }
  
  if (!transactionData.category || transactionData.category.trim() === '') {
    throw new Error("Transaction must be assigned to a valid category")
  }
  
  if (!transactionData.transaction_date) {
    throw new Error("Transaction must have a valid date")
  }
}

export const validateTransactionUpdate = (transactionData, currentMonthYear) => {
  const transactionMonth = new Date(transactionData.transaction_date)
    .toISOString()
    .slice(0, 7) // 'YYYY-MM'
  
  if (transactionMonth !== currentMonthYear) {
    throw new Error("Cannot modify transactions from previous months")
  }
}

export const validateCategoryExists = (category, validCategories) => {
  if (!validCategories.includes(category)) {
    throw new Error(`Invalid category: ${category}. Must be one of: ${validCategories.join(', ')}`)
  }
}