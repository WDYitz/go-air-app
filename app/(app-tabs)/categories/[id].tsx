import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { TripCard } from "../../../components/trip-card";
import { getCategoryById } from "../../../services/category";
import { getTripsByCategory } from "../../../services/trips";
import { styles } from "../../../styles/globals";
import { Button } from "../../../components/button";

const CategoryScreen = () => {
  const { id } = useLocalSearchParams();
  const idCategory = parseInt(id as string);

  const category = getCategoryById(idCategory);
  if (!category) return router.back();

  const trips = getTripsByCategory(idCategory);

  return (
    <View style={styles.container}>
      <View style={localStyle.header}>
        <Button onPress={() => router.back()} title="Back" />
        <Text style={localStyle.headerText}>{category.title}</Text>
      </View>
      <FlatList
        style={{ width: "100%", marginBottom: 60 }}
        data={trips}
        renderItem={({ item }) => (
          <TripCard
            id={item.id}
            idCategory={item.idCategory}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default CategoryScreen;

const localStyle = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 0.5,
    color: "#333",
    padding: 10
  },
})