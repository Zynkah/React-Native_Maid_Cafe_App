import { Platform, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuScreen from "./MenuScreen";
import MenuInfoScreen from "./MenuInfoScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import MaidScreen from "./MaidScreen";
import CartScreen from "./CartScreen";
import BanquetsScreen from "./BanquetsScreen";

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
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => (
            <Icon
              name="home"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const MenuNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={screenOptions}>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={({ navigation }) => ({
          title: "Menu",
          headerLeft: () => (
            <Icon
              name="cutlery"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MenuInfo"
        component={MenuInfoScreen}
        options={({ navigation }) => ({
          title: "Menu Item Details",
          headerLeft: () => (
            <Icon
              name="book"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
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
        options={({ navigation }) => ({
          title: "Maids",
          headerLeft: () => (
            <Icon
              name="female"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const BanquetsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Banquets"
        component={BanquetsScreen}
        options={({ navigation }) => ({
          title: "Banquets",
          headerLeft: () => (
            <Icon
              name="gift"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const CartNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          title: "Cart",
          headerLeft: () => (
            <Icon
              name="shopping-cart"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
        options={({ navigation }) => ({
          title: "Contact Us",
          headerLeft: () => (
            <Icon
              name="address-card"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <Icon name="home" type="font-awesome" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Menu"
          component={MenuNavigator}
          options={{
            title: "Menu",
            drawerIcon: ({ color }) => (
              <Icon
                name="cutlery"
                type="font-awesome"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Maids"
          component={MaidNavigator}
          options={{
            title: "Maids",
            drawerIcon: ({ color }) => (
              <Icon name="female" type="font-awesome" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Banquets"
          component={BanquetsNavigator}
          options={{
            title: "Banquets",
            drawerIcon: ({ color }) => (
              <Icon name="gift" type="font-awesome" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartNavigator}
          options={{
            title: "Cart",
            drawerIcon: ({ color }) => (
              <Icon
                name="shopping-cart"
                type="font-awesome"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactNavigator}
          options={{
            title: "Contact Us",
            drawerIcon: ({ color }) => (
              <Icon
                name="address-card"
                type="font-awesome"
                size={24}
                color={color}
              />
            ),
          }}
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
  stackIcon: {
    marginLeft: 30,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
