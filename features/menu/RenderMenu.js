import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderMenu = (props) => {
  const { menu } = props;
  if (menu) {
    return (
      <Card style={styles.cardContainer}>
        <Card.Image source={menu.image}>
          <View style={styles.container}>
            <Text style={styles.cardText}>{menu.name}</Text>
          </View>
        </Card.Image>
        <Text style={styles.description}>{menu.description}</Text>
        <Text style={styles.price}>{menu.price}</Text>
        <View style={styles.cardRow}>
          <Icon
            name="pencil"
            type="font-awesome"
            color="#DB7093"
            raised
            reverse
            onPress={() => props.onShowModal()}
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
  cardText: {
    textShadowColor: "rgba(0,0,0,1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "rgba(219, 112, 147,0.5)",
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
