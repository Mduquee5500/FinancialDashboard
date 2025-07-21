import { SupabaseBudgetRepository } from "../../services/SupabaseBudgetRepository";

const TestBudgetRepository = async () => {
  try {
    const budgetRepository = new SupabaseBudgetRepository();

    // Usar un user_id existente (del test anterior)
    const userId = "df927aa1-bbbd-4582-9e56-9b72c36b983e";
    const monthYear = "2025-01";

    // 1. Crear presupuesto
    console.log("=== CREANDO PRESUPUESTO ===");
    const newBudget = await budgetRepository.createBudget({
      user_id: userId,
      month_year: monthYear,
      total_amount: 2000,
      rent: 800,
      groceries: 400,
      hobbies: 300,
      entertainment: 200,
      transportation: 150,
      utilities: 100,
      other: 50,
    });
    console.log("✅ Presupuesto creado:", newBudget);

    // 2. Buscar presupuesto
    console.log("=== BUSCANDO PRESUPUESTO ===");
    const foundBudget = await budgetRepository.getBudgetByUserAndMonth(
      userId,
      monthYear
    );
    console.log("✅ Presupuesto encontrado:", foundBudget);

    // 3. Actualizar categorías
    console.log("=== ACTUALIZANDO CATEGORÍAS ===");
    const updatedBudget = await budgetRepository.updateBudgetCategories(
      newBudget.id,
      {
        rent: 900,
        groceries: 350,
      }
    );
    console.log("✅ Categorías actualizadas:", updatedBudget);

    // 4. Confirmar presupuesto
    console.log("=== CONFIRMANDO PRESUPUESTO ===");
    const confirmedBudget = await budgetRepository.confirmBudget(newBudget.id);
    console.log("✅ Presupuesto confirmado:", confirmedBudget);

    // 5. Redistribuir entre categorías
    console.log("=== REDISTRIBUYENDO PRESUPUESTO ===");
    const redistributedBudget = await budgetRepository.redistributeBudget(
      newBudget.id,
      "hobbies",
      "entertainment",
      50
    );
    console.log("✅ Presupuesto redistribuido:", redistributedBudget);

    console.log("🎉 ¡Todas las pruebas de presupuesto completadas!");
  } catch (error) {
    console.log("❌ Error en test de presupuesto:", error.message);
  }
};

export { TestBudgetRepository };
