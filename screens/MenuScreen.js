import { FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const MenuScreen = (props) => {
  const renderMenuItem = ({ item: menu }) => {
    return (
      <ListItem style={styles.container} onPress={() => props.onPress(menu.id)}>
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
      data={props.menu}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  description: {
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    color: "#DB7093",
  },
  price: {
    color: "#FFB6C1",
  },
  container: {
    padding: 10,
    marginTop: 20,
  },
});

export default MenuScreen;
