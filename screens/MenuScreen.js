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
          style={styles.container}
          onPress={() => navigation.navigate("MenuInfo", { menu })}
        >
          <Tile
            title={menu.name}
            caption={menu.description}
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
  description: {
    fontSize: 14,
    color: "#db7094",
  },
  name: {
    color: "#cc3366",
    fontSize: 22,
  },
  price: {
    color: "#FFB6C1",
  },
  container: {
    padding: 10,
    marginTop: 10,
  },
});

export default MenuScreen;
