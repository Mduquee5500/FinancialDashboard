import { SupabaseUserRepository } from "../../services/SupabaseUserRepository";
import { SupabaseSavingsRepository } from "../../services/SupabaseSavingsRepository";

const TestUserRepository = async () => {
  try {
    const userRepository = new SupabaseUserRepository();
    const savingsRepository = new SupabaseSavingsRepository();

    // 1. Crear usuario
    console.log("=== CREANDO USUARIO ===");
    const newUser = await userRepository.createUser({
      email: "mduquee5501@gmail.com",
      name: "Mateo Duque",
    });
    console.log("✅ Usuario creado:", newUser);

    // 2. Verificar que se crearon los ahorros automáticamente
    console.log("=== VERIFICANDO AHORROS AUTOMÁTICOS ===");
    const userSavings = await savingsRepository.getSavingsByUser(newUser.id);
    console.log("✅ Ahorros creados automáticamente:", userSavings);

    // 3. Buscar por email
    console.log("=== BUSCANDO POR EMAIL ===");
    const userByEmail = await userRepository.getUserByEmail(newUser.email);
    console.log("✅ Usuario por email:", userByEmail);

    // 4. Buscar por ID
    console.log("=== BUSCANDO POR ID ===");
    const userById = await userRepository.getUserById(newUser.id);
    console.log("✅ Usuario por ID:", userById);

    // 5. Actualizar usuario
    console.log("=== ACTUALIZANDO USUARIO ===");
    const updatedUser = await userRepository.updateUser(newUser.id, {
      email: "mduquee5501@outlook.com",
      name: "Mateo Duque Escobar",
    });
    console.log("✅ Usuario actualizado:", updatedUser);

    console.log("🎉 ¡Todas las pruebas completadas exitosamente!");
  } catch (error) {
    console.log("❌ Error en test:", error.message);
  }
};

export { TestUserRepository };
