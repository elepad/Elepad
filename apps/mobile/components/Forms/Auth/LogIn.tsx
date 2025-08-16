import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Surface } from "react-native-paper";
import useAuth from "@/hooks/useAuth";

type Props = { onBack: () => void };

export default function LogIn({ onBack }: Props) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login({ username, password });
  };

  return (
    <Surface style={styles.surface} elevation={2}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Iniciar Sesión
        </Text>

        <TextInput
          mode="outlined"
          label="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Clave"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          returnKeyType="go"
          onSubmitEditing={handleSubmit}
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Entrar
        </Button>

        <Button
          mode="text"
          onPress={onBack}
          style={styles.backButton}
          labelStyle={styles.backLabel}
        >
          Volver
        </Button>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    marginTop: 50,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginTop: 12,
    borderRadius: 12,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  backButton: {
    marginTop: 8,
  },
  backLabel: {
    fontSize: 16,
  },
});
