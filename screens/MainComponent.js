import { Platform, StyleSheet, View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import logo from "../assets/img/logo.jpg";
import MenuScreen from "./MenuScreen";
import MenuInfoScreen from "./MenuInfoScreen";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import MaidScreen from "./MaidScreen";
import BanquetsScreen from "./BanquetsScreen";
import ReservationScreen from "./ReservationScreen";

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
              name="coffee"
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
          title: "Banquet Rooms",
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

const ReservationNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Reservation"
        component={ReservationScreen}
        options={({ navigation }) => ({
          title: "Reservation Search",
          headerLeft: () => (
            <Icon
              name="clock-o"
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

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <View style={{ flex: 1 }}>
        <Image source={logo} style={styles.drawerImage} />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.drawerHeaderText}>Zynkah's Maid Cafe</Text>
      </View>
    </View>
    <DrawerItemList {...props} labelStyle={styles.drawerItems} />
  </DrawerContentScrollView>
);

const Main = () => {
  return (
    <View style={styles.mainView}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawerContent}
        drawerStyle="#DB7093"
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <Icon name="coffee" type="font-awesome" size={24} color={color} />
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
            title: "Banquet Rooms",
            drawerIcon: ({ color }) => (
              <Icon name="gift" type="font-awesome" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ReserveTable"
          component={ReservationNavigator}
          options={{
            title: "Reservations",
            drawerIcon: ({ color }) => (
              <Icon
                name="clock-o"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
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
  drawerHeader: {
    backgroundColor: "#DB7093",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  drawerItems: {
    color: "#DB7093",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Main;
