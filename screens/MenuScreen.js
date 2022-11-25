import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { MENU } from "../shared/MENU";

const MenuScreen = ({ navigation }) => {
  const [menu, setMenu] = useState(MENU);

  const renderMenuItem = ({ item: menu }) => {
    return (
      <ListItem
        style={styles.container}
        onPress={() => navigation.navigate("MenuInfo", { menu })}
      >
        <Avatar source={menu.image} size={120} />
        <ListItem.Content>
          <ListItem.Title style={styles.name}>{menu.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.description}>
            {menu.description}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.price}>
            {menu.price}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={menu}
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
