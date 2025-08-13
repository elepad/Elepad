import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function NewAccount({ onBack }: { onBack: () => void }) {
  const { newUser } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [belongsGroup, setBelongsGroup] = useState<"si" | "no">("no");
  const [groupCode, setGroupCode] = useState("");

  const handleSubmit = () => {
    newUser({
      username,
      email,
      password,
      belongsGroup: belongsGroup === "si",
      groupCode: belongsGroup === "si" ? groupCode : undefined,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Clave"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <View style={styles.familygroup}>
        <View style={styles.radioContainer}>
          <Pressable onPress={() => setBelongsGroup("si")}>
            <Text
              style={
                belongsGroup === "si" ? styles.radioSelected : styles.radio
              }
            >
              ●
            </Text>
          </Pressable>
          <Text style={styles.radioLabel}>
            Sí, pertenezco a un grupo familiar
          </Text>
        </View>

        <View style={styles.radioContainer}>
          <Pressable onPress={() => setBelongsGroup("no")}>
            <Text
              style={
                belongsGroup === "no" ? styles.radioSelected : styles.radio
              }
            >
              ●
            </Text>
          </Pressable>
          <Text style={styles.radioLabel}>No</Text>
        </View>
      </View>

      {belongsGroup === "si" && (
        <TextInput
          style={styles.input}
          placeholder="Código del grupo"
          value={groupCode}
          onChangeText={setGroupCode}
        />
      )}

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
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
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radio: { fontSize: 20, color: "#aaa", marginRight: 8 },
  radioSelected: { fontSize: 20, color: "#5AB4D3", marginRight: 8 },
  radioLabel: { color: "black" },
  familygroup: {
    backgroundColor: "#f5f5f5ff",
    borderRadius: 10,
  },
});
