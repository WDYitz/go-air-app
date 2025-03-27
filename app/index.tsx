import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

const Screen = () => {
  const handleStart = () => {
    router.replace("/discover")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="cover" />
      <Text style={styles.h1}>GoAir</Text>
      <Text style={styles.h2}>Viaje com segurança e rapidez</Text>
      <Button title="Começar" onPress={handleStart} style={{ width: 200, borderRadius: 50, marginTop: 50 }} />
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333"
  },
  h2: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20
  }
})