import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const MenuScreen = (props) => {
  const renderMenuItem = ({ item: menu }) => {
    return (
      <ListItem>
        <Avatar source={menu.image} rounded />
        <ListItem.Title>{menu.name}</ListItem.Title>
        <ListItem.Subtitle>{menu.description}</ListItem.Subtitle>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={props.menu}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    ></FlatList>
  );
};

export default MenuScreen;
