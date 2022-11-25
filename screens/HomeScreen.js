import { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { MENU } from "../shared/MENU";
import { BANQUETS } from "../shared/BANQUETS";
import { MAIDS } from "../shared/MAIDS";
import * as Animatable from "react-native-animatable";

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
    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
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
