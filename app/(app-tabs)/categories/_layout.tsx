import { Stack } from "expo-router";

const CategoryLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="categories-list" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}

export default CategoryLayout;
