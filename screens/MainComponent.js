import { Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import MenuScreen from "./MenuScreen";
import MenuInfoScreen from "./MenuInfoScreen";
// import HomeScreen from "./HomeScreen";
// import ContactScreen from "./ContactScreen";
// import MaidScreen from "./MaidScreen";

const MenuNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#DB7093",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="MenuInfo" component={MenuInfoScreen} />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View style={styles.mainView}>
      <MenuNavigator />
      {/* <MenuScreen
        menu={MenuScreen}
        onPress={(menuId) => setSelectedMenuId(menuId)}
      />
      <MenuInfoScreen
        menu={menu.filter((menu) => menu.id === selectedMenuId)[0]}
      /> */}
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
