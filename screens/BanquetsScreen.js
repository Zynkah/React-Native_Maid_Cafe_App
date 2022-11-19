import { useState } from "react";
import { Text, ScrollView } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { BANQUETS } from "../shared/BANQUETS";

const BanquetsScreen = () => {
  const [banquets, setBanquets] = useState(BANQUETS);
  return (
    <ScrollView>
      <Card>
        <Card.Title>Banquet Rooms</Card.Title>
        <Card.Divider />
        {banquets.map((banquet) => {
          return (
            <ListItem key={banquet.id}>
              <Avatar source={banquet.image} size={100} />
              <ListItem.Content>
                <ListItem.Title>{banquet.name}</ListItem.Title>
                <ListItem.Subtitle>{banquet.description}</ListItem.Subtitle>
                <ListItem.Subtitle>{banquet.price}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};
export default BanquetsScreen;
