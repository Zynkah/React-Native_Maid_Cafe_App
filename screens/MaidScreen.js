import { useState } from "react";
import { Text, ScrollView } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { MAIDS } from "../shared/MAIDS";

const MaidScreen = () => {
  const [maids, setMaids] = useState(MAIDS);
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Our Mission</Card.Title>
        <Card.Divider />
        <Text>
          Maid cafes focus on providing an escape from the home and work
          spheres. Maids encapsulate a more pure form that provides an alternate
          world to patrons.
        </Text>
      </Card>
      <Card>
        <Card.Title>Our Maids</Card.Title>
        <Card.Divider />
        {maids.map((maid) => {
          return (
            <ListItem key={maid.id}>
              <Avatar source={maid.image} size={100} />
              <ListItem.Content>
                <ListItem.Title>{maid.name}</ListItem.Title>
                <ListItem.Subtitle>{maid.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};
export default MaidScreen;
