import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={{ uri: baseUrl + item.image }}>
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        </Card.Image>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const menu = useSelector((state) => state.menu);
  const banquets = useSelector((state) => state.banquets);
  const maids = useSelector((state) => state.maids);

  const featMenu = menu.menusArray.find((item) => item.featured);
  const featBanquet = banquets.banquetsArray.find((item) => item.featured);
  const featMaid = maids.maidsArray.find((item) => item.featured);

  return (
    <Animatable.View animation="fadeIn" duration={2000} delay={1000}>
      <ScrollView>
        <Text style={styles.title}>Menu</Text>
        <FeaturedItem item={featMenu} />
        <Text style={styles.title}>Banquet Rooms</Text>
        <FeaturedItem item={featBanquet} />
        <Text style={styles.title}>Maids</Text>
        <FeaturedItem item={featMaid} />
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    justifyContent: "center",
    flex: 1,
  },
  itemName: {
    textShadowColor: "rgba(0,0,0,1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "rgba(219, 112, 147,0.5)",
  },
  itemDescription: {
    margin: 20,
    textAlign: "center",
  },
  title: {
    color: "white",
    backgroundColor: "rgba(219, 112, 147,0.5)",
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
});

export default HomeScreen;
