import FontAwesome from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs screenOptions={tabsOptions.screenOptions}>
      <Tabs.Screen name="discover" options={tabsOptions.discover} />
      <Tabs.Screen name="categories" options={tabsOptions.trips} />
      <Tabs.Screen name="about" options={tabsOptions.about} />
    </Tabs>
  );
}

export default RootLayout;

const tabsOptions = {
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: "#5950d4",
    tabBarInactiveTintColor: "#141414ba",
    tabBarStyle: {
      paddingTop: 10,
      backgroundColor: "#ffffff",
      borderTopWidth: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: 70,
      position: "absolute" as "absolute",
    }
  },
  discover: { title: "Discover", tabBarIcon: ({ color }: { color: string }) => <FontAwesome size={24} name="local-airport" color={color} /> },
  trips: { title: "Categories", tabBarIcon: ({ color }: { color: string }) => <FontAwesome size={24} name="airplane-ticket" color={color} /> },
  about: { title: "About", tabBarIcon: ({ color }: { color: string }) => <FontAwesome size={20} name="info" color={color} /> }
}