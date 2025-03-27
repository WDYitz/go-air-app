import { FlatList, Text, View } from "react-native";
import { styles } from "../../../styles/globals";
import { data } from "../../../data";
import { CategoryCard } from "../../../components/category-card";

const CategoriesListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
      </View>
      <FlatList
        style={{ width: "100%", marginBottom: 60 }}
        data={data.categories}
        renderItem={({ item }) => (
          <CategoryCard id={item.id} title={item.title} cover={item.cover} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default CategoriesListScreen;