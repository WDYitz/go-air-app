import FontAwesome from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { currency } from "../../services/currency";
import { getTripById } from "../../services/trips";
import { styles } from "../../styles/globals";

const CategoryScreen = () => {
  const { id } = useLocalSearchParams();
  const tripId = parseInt(id as string);

  const trip = getTripById(tripId);

  if (!trip) {
    return <Text>Not found 404</Text>
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 200, position: "static", top: 0, left: 0 }}>
        <Image source={{ uri: trip.image }} style={localStyle.image} resizeMode="cover" />
        <View style={localStyle.header}>
          <Button onPress={() => router.back()} title={<FontAwesome name="arrowleft" size={22} />} style={{ width: 50 }} />
        </View>
      </View>
      <Text style={localStyle.headerText}>{trip.title}</Text>
      <Text>{trip.description}</Text>
      <Text style={localStyle.price}>{currency(trip.price)}</Text>
    </View>
  )
}

export default CategoryScreen;

const localStyle = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    textAlign: "left",
    width: "100%",
    fontWeight: "500",
    letterSpacing: 0.5,
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
  },
  price: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1b1b1b",
    padding: 10,
    width: "100%",
    textAlign: "left",
  },
  image: {
    width: "110%",
    height: 200,
    position: "absolute",
    top: 0,
    left: -20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
})