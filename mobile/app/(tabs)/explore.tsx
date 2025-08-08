import LogIn from "@/components/Forms/Auth/LogIn";
import NewAccount from "@/components/Forms/Auth/NewAccount";
import React, { useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Pressable,
  Animated,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function AlternativeHome() {

  const [view, setView] = useState<"buttons" | "login" | "newaccount">(
      "buttons"
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
          source={require("@/assets/images/elepad_corazon.png")}
          resizeMode="center"
          style={{ flex: 1 }}
        >
          <ImageBackground
            source={require("@/assets/images/logoazul.png")}
            resizeMode="contain"
            style={{
              width: 300,
              height: 300,
              marginHorizontal: "15%",
              marginTop: 50,
            }}
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
  container: {
    flex: 1,
    backgroundColor:'#fcfcfcff'
  },
  title: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  sesion:{
    backgroundColor:'#5a8ad3ff',
    width:250,
    borderRadius:30,
    marginTop:300

  },
  buttonSesion: {
    color: "white",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonNew:{
    color: "#585858ff",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonAqui:{
    color: "#ff3030ff",
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    
  }
});
