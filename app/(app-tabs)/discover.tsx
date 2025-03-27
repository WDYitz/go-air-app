import { View, Text, StyleSheet, FlatList } from "react-native";
import { data } from "../../data";
import { TripCard } from "../../components/trip-card";
import { styles } from "../../styles/globals";

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discover</Text>
      </View>
      <FlatList
        style={{ width: "100%", marginBottom: 60 }}
        data={data.trips}
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
  );
}

export default DiscoverScreen;

