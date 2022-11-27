import { FlatList, StyleSheet } from "react-native";
import { Tile } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const MenuScreen = ({ navigation }) => {
  const menu = useSelector((state) => state.menu);

  const renderMenuItem = ({ item: menu }) => {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Tile
          containerStyle={{ alignItems: "center" }}
          onPress={() => navigation.navigate("MenuInfo", { menu })}
        >
          <Tile
            titleStyle={styles.name}
            title={menu.name}
            captionStyle={styles.price}
            caption={menu.price}
            featured
            onPress={() => navigation.navigate("MenuInfo", { menu })}
            imageSrc={{ uri: baseUrl + menu.image }}
          />
        </Tile>
      </Animatable.View>
    );
  };
  return (
    <FlatList
      data={menu.menusArray}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  name: {
    color: "white",
    backgroundColor: "rgba(219, 112, 147,0.8)",
    padding: 10,
    textAlign: "center",
    fontSize: 30,
    margin: 10,
  },
  price: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textShadowColor: "rgba(219, 112, 147,0.8)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  },
  container: {
    padding: 10,
    marginTop: 10,
  },
});

export default MenuScreen;
