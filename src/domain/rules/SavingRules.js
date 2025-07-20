export const validateSavingsUsage = (currentSavingsAmount, amountToUse) => {
  if (amountToUse <= 0) {
    throw new Error("Amount to use from savings must be greater than zero")
  }
  
  if (currentSavingsAmount < amountToUse) {
    throw new Error("Cannot use more money than available in savings")
  }
}

export const validateSavingsDeposit = (amountToDeposit) => {
  if (amountToDeposit <= 0) {
    throw new Error("Amount to deposit to savings must be greater than zero")
  }
}

export const validateSavingsBalance = (newSavingsAmount) => {
  if (newSavingsAmount < 0) {
    throw new Error("Savings balance cannot be negative")
  }
}