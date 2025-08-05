import { supabase } from "../shared/supabase";

const TestAuth = async () => {
  console.log("=== REGISTRANDO USUARIO CON AUTH ===");

  const { data, error } = await supabase.auth.signUp({
    email: "usuario1234@gmail.com",
    password: "password123",
    options: {
      data: {
        name: "Test User",
      },
    },
  });

  if (error) {
    console.log("❌ Error:", error.message);
  } else {
    console.log("✅ Usuario registrado:", data.user);

    // Verificar que se creó en tu tabla users
    setTimeout(async () => {
      const { data: userData } = await supabase
        .from("users")
        .select("*")
        .eq("id", data.user.id)
        .single();

      console.log("✅ Usuario en tabla users:", userData);
    }, 1000);
  }
};

export { TestAuth };
