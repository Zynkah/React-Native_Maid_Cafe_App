import { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { MENU } from "../shared/MENU";
import { BANQUETS } from "../shared/BANQUETS";
import { MAIDS } from "../shared/MAIDS";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
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
  const [menu, setMenu] = useState(MENU);
  const [banquets, setBanquets] = useState(BANQUETS);
  const [maids, setMaids] = useState(MAIDS);

  const featMenu = menu.find((item) => item.featured);
  const featBanquet = banquets.find((item) => item.featured);
  const featMaid = maids.find((item) => item.featured);
  return (
    <ScrollView>
      <FeaturedItem item={featMenu} />
      <FeaturedItem item={featBanquet} />
      <FeaturedItem item={featMaid} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemView: {
    justifyContent: "center",
    flex: 1,
  },
  itemName: {
    color: "white",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "#DB7093",
  },
  itemDescription: {
    margin: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
