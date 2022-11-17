import { Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import MenuScreen from "./MenuScreen";
import MenuInfoScreen from "./MenuInfoScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import MaidScreen from "./MaidScreen";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#DB7093" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

const MenuNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={screenOptions}>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="MenuInfo" component={MenuInfoScreen} />
    </Stack.Navigator>
  );
};

const MaidNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Maids"
        component={MaidScreen}
        options={{ title: "Maids" }}
      />
    </Stack.Navigator>
  );
};
const ContactNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact Us"
        component={ContactScreen}
        options={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View style={styles.mainView}>
      <Drawer.Navigator initialRouteName="Home" drawerStyle="#DB7093">
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Menu"
          component={MenuNavigator}
          options={{ title: "Menu" }}
        />
        <Drawer.Screen
          name="Maids"
          component={MaidNavigator}
          options={{ title: "Maids" }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactNavigator}
          options={{ title: "Contact Us" }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});

export default Main;
