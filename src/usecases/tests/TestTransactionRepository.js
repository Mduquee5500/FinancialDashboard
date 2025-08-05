import { SupabaseTransactionRepository } from "../../services/SupabaseTransactionRepository";

const TestTransactionRepository = async () => {
  try {
    const transactionRepository = new SupabaseTransactionRepository();

    // Usar IDs existentes de tests anteriores
    const userId = "68a94582-c7f9-48af-9794-1cec411a309b";
    const budgetId = "260deb37-a412-44d7-bc92-073074c326ec";

    // 1. Crear transacción
    console.log("=== CREANDO TRANSACCIÓN ===");
    const newTransaction = await transactionRepository.createTransaction({
      user_id: userId,
      budget_id: budgetId,
      category: "groceries",
      amount: 50.75,
      description: "Compra en supermercado",
      transaction_date: "2025-01-15",
    });
    console.log("✅ Transacción creada:", newTransaction);

    // 2. Buscar transacciones por presupuesto
    console.log("=== BUSCANDO TRANSACCIONES POR PRESUPUESTO ===");
    const budgetTransactions =
      await transactionRepository.getTransactionsByBudget(budgetId);
    console.log("✅ Transacciones del presupuesto:", budgetTransactions);

    // 3. Buscar transacciones por categoría
    console.log("=== BUSCANDO TRANSACCIONES POR CATEGORÍA ===");
    const categoryTransactions =
      await transactionRepository.getTransactionsByCategory(
        budgetId,
        "groceries"
      );
    console.log("✅ Transacciones de groceries:", categoryTransactions);

    // 4. Buscar transacciones por rango de fechas
    console.log("=== BUSCANDO TRANSACCIONES POR FECHA ===");
    const dateRangeTransactions =
      await transactionRepository.getTransactionsByUserAndDateRange(
        userId,
        "2025-01-01",
        "2025-01-31"
      );
    console.log("✅ Transacciones de enero:", dateRangeTransactions);

    // 5. Actualizar transacción
    console.log("=== ACTUALIZANDO TRANSACCIÓN ===");
    const updatedTransaction = await transactionRepository.updateTransaction(
      newTransaction.id,
      {
        amount: 55.25,
        description: "Compra en supermercado - actualizada",
      }
    );
    console.log("✅ Transacción actualizada:", updatedTransaction);

    // 6. Eliminar transacción
    console.log("=== ELIMINANDO TRANSACCIÓN ===");
    const deletedTransaction = await transactionRepository.deleteTransaction(
      newTransaction.id
    );
    console.log("✅ Transacción eliminada:", deletedTransaction);

    console.log(
      "🎉 ¡Todas las pruebas de transacciones completadas exitosamente!"
    );
  } catch (error) {
    console.log("❌ Error en test de transacciones:", error.message);
  }
};

export { TestTransactionRepository };
