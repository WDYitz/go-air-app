import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import type { Trip } from "../types/trip";
import { Link } from "expo-router";
import { currency } from "../services/currency";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type TripType = Trip

export const TripCard = (trip: TripType) => {
  return (
    <Link href={`/trip/${trip.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: trip.image }} style={styles.image} resizeMode="cover" />
        <View style={styles.content}>
          <View style={styles.titleWithIcon}>
            <FontAwesome name="map-pin" color="#5950d4" size={14} style={{ marginRight: 10 }} />
            <Text style={styles.title}>{trip.title}</Text>
          </View>
          <Text style={styles.description}>{trip.description}</Text>
          <Text style={styles.price}>{currency(trip.price)} / por pessoa</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 280,
    borderRadius: 10,
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 20
  },
  image: {
    width: "100%",
    height: "60%",
  },
  content: {
    width: "100%",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
    gap: 20
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    color: "#292464"
  },
  description: {
    fontSize: 14,
    color: "#141414ba",
  },
  titleWithIcon: {
    flexDirection: "row",
    alignItems: "center"
  }
})