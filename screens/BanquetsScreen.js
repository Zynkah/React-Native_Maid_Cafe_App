import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { BANQUETS } from "../shared/BANQUETS";
import * as Animatable from "react-native-animatable";

const BanquetsScreen = () => {
  const [banquets, setBanquets] = useState(BANQUETS);
  return (
    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
      <ScrollView>
        <Card>
          <Card.Title style={styles.title}>Banquet Rooms</Card.Title>
          <Card.Divider />
          {banquets.map((banquet) => {
            return (
              <ListItem key={banquet.id}>
                <Avatar source={banquet.image} size={120} />
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>
                    {banquet.name}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.description}>
                    {banquet.description}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle style={styles.price}>
                    {banquet.price}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </Card>
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#cc3366",
    fontSize: 22,
  },
  description: {
    fontSize: 14,
    color: "#db7094",
  },
  price: {
    color: "#FFB6C1",
  },
});
export default BanquetsScreen;
