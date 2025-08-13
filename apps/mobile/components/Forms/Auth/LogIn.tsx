import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LogIn({ onBack }: { onBack: () => void }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login({ username, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Clave"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>Volver</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "white" },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#5AB4D3",
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: { color: "white", fontSize: 18, textAlign: "center" },
  backButton: { marginTop: 20 },
  backText: {
    color: "#37bfecff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});
