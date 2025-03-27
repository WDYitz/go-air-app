import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import type { Category } from "../types/category";

type CategoryType = Category

export const CategoryCard = (category: CategoryType) => {
  return (
    <Link href={`/categories/${category.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: category.cover }} style={styles.image} resizeMode="cover" />
        <View style={styles.content}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 140,
    borderRadius: 10,
    flex: 1,
    overflow: "hidden",

    marginBottom: 20
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "absolute",
    backgroundColor: "#030102ac",
    inset: 0
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 0.3,
    gap: 20
  },
})