import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const RenderMenu = ({ menu }) => {
  if (menu) {
    return (
      <Card>
        <Card.Image source={menu.image}>
          <View style={styles.container}>
            <Text style={styles.name}>{menu.name}</Text>
          </View>
        </Card.Image>
        <Text style={styles.description}>{menu.description}</Text>
        <Text style={styles.price}>{menu.price}</Text>
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
