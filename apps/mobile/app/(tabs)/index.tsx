import LogIn from "@/components/Forms/Auth/LogIn";
import NewAccount from "@/components/Forms/Auth/NewAccount";
import React, { useState, useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  Animated,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  const [view, setView] = useState<"buttons" | "login" | "newaccount">(
    "buttons",
  );
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const goToView = (target: "buttons" | "login" | "newaccount") => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setView(target);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground
          source={require("@/assets/images/elefantes_juntos.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <ImageBackground
            source={require("@/assets/images/logoblanco.png")}
            resizeMode="contain"
            style={styles.logoContainer}
          >
            <Text style={styles.title}>ELEPAD</Text>
          </ImageBackground>

          <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            {view === "buttons" && (
              <>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Pressable
                    onPress={() => goToView("login")}
                    style={styles.sesion}
                  >
                    <Text style={styles.buttonSesion}>Iniciar Sesión</Text>
                  </Pressable>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Text style={styles.buttonNew}>
                    Si eres nuevo, haz click{" "}
                  </Text>
                  <Pressable onPress={() => goToView("newaccount")}>
                    <Text style={styles.buttonAqui}>aquí</Text>
                  </Pressable>
                </View>
              </>
            )}

            {view === "login" && <LogIn onBack={() => goToView("buttons")} />}
            {view === "newaccount" && (
              <NewAccount onBack={() => goToView("buttons")} />
            )}
          </Animated.View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  logoContainer: {
    width: 300,
    height: 300,
    marginHorizontal: "15%",
    marginTop: 50,
  },
  title: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  sesion: {
    backgroundColor: "#5AB4D3",
    width: 250,
    borderRadius: 30,
    marginTop: 300,
  },
  buttonSesion: {
    color: "white",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonNew: {
    color: "white",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonAqui: {
    color: "#00ffffff",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
});
