import { SupabaseSavingsRepository } from "../../services/SupabaseSavingsRepository";
const TestSavingsRepository = async () => {
  try {
    const savingsRepository = new SupabaseSavingsRepository();

    // Usar IDs existentes de tests anteriores
    const userId = "df927aa1-bbbd-4582-9e56-9b72c36b983e";
    const budgetId = "f41bb5b0-dd0c-4590-a9de-d49e70332a85";

    // 1. Obtener ahorros actuales
    console.log("=== OBTENIENDO AHORROS ACTUALES ===");
    const currentSavings = await savingsRepository.getSavingsByUser(userId);
    console.log("✅ Ahorros actuales:", currentSavings);

    // 2. Actualizar monto de ahorros (establecer nuevo valor)
    console.log("=== ACTUALIZANDO MONTO DE AHORROS ===");
    const updatedSavings = await savingsRepository.updateSavingsAmount(
      userId,
      1000
    );
    console.log("✅ Ahorros actualizados a $1000:", updatedSavings);

    // 3. Agregar dinero a ahorros
    console.log("=== AGREGANDO DINERO A AHORROS ===");
    const addedSavings = await savingsRepository.addToSavings(userId, 500);
    console.log("✅ Agregados $500 a ahorros:", addedSavings);

    // 4. Usar dinero de ahorros
    console.log("=== USANDO DINERO DE AHORROS ===");
    const usedSavings = await savingsRepository.useSavings(userId, 200);
    console.log("✅ Usados $200 de ahorros:", usedSavings);

    // 5. Transferir de ahorros a presupuesto
    console.log("=== TRANSFIRIENDO DE AHORROS A PRESUPUESTO ===");
    const transferResult = await savingsRepository.transferFromSavingsToBudget(
      userId,
      budgetId,
      300
    );
    console.log("✅ Transferidos $300 de ahorros a presupuesto:");
    console.log("   - Presupuesto actualizado:", transferResult.budget);
    console.log("   - Ahorros actualizado:", transferResult.savings);

    // 6. Verificar estado final
    console.log("=== ESTADO FINAL DE AHORROS ===");
    const finalSavings = await savingsRepository.getSavingsByUser(userId);
    console.log("✅ Ahorros finales:", finalSavings);

    console.log("🎉 ¡Todas las pruebas de ahorros completadas exitosamente!");
  } catch (error) {
    console.log("❌ Error en test de ahorros:", error.message);
  }
};

export { TestSavingsRepository };
