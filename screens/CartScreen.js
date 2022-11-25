import { FlatList } from "react-native";
import { Avator, ListItem } from "react-native-elements";
import { MENU } from "../shared/MENU";

const CartScreen = ({ navigation }) => {
  const renderFavoriteItem = ({ item: menu }) => {
    <ListItem
      onPress={() =>
        navigation.navigate("Menu", {
          screen: "MenuInfo",
          params: { menu },
        })
      }
    >
      <Avator rounded source={menu.image} />
      <ListItem.Title>{menu.name}</ListItem.Title>
      <ListItem.Subtitle>{menu.price}</ListItem.Subtitle>
    </ListItem>;
  };

  return (
    <FlatList
      // data={menuArray.filter((menu) => favorites.includes(menu.id))}
      renderItem={renderFavoriteItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
export default CartScreen;
