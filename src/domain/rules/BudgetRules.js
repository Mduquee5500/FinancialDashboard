export const validateBudgetCreation = (totalAmount, categoryDistribution) => {
  if (totalAmount <= 0) {
    throw new Error("Budget total amount must be greater than zero")
  }
  
  const distributionSum = Object.values(categoryDistribution).reduce((sum, amount) => sum + amount, 0)
  
  if (distributionSum > totalAmount) {
    throw new Error("Category distribution cannot exceed total budget amount")
  }
}

export const validateBudgetRedistribution = (fromCategoryAmount, redistributionAmount) => {
  if (fromCategoryAmount <= 0) {
    throw new Error("Cannot redistribute from negative budget category")
  }
  
  if (redistributionAmount <= 0) {
    throw new Error("Redistribution amount must be positive and greater than zero")
  }
  
  if (fromCategoryAmount < redistributionAmount) {
    throw new Error("Cannot redistribute more than available in source category")
  }
}

export const validateBudgetConfirmation = (budgetData) => {
  if (budgetData.confirmed_at !== null) {
    throw new Error("Budget has already been confirmed and cannot be modified")
  }
}