import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderMenu = (props) => {
  const { menu } = props;
  if (menu) {
    return (
      <Card style={styles.cardContainer}>
        <Card.Image source={menu.image}>
          <View style={styles.container}>
            <Text style={styles.name}>{menu.name}</Text>
          </View>
        </Card.Image>
        <Text style={styles.description}>{menu.description}</Text>
        <Text style={styles.price}>{menu.price}</Text>
        <View style={styles.cardRow}>
          <Icon
            name={props.isFavorite ? "check" : "shopping-cart"}
            type="font-awesome"
            color="#DB7093"
            raised
            reverse
            onPress={() =>
              props.isFavorite
                ? console.log("Already placed in Cart")
                : props.markFavorite()
            }
          />
        </View>
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
  cardRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  name: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#DB7093",
  },
  description: {
    textAlign: "center",
    margin: 20,
  },
  price: {
    textAlign: "center",
    color: "#DB7093",
  },
});

export default RenderMenu;
