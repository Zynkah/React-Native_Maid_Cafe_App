import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const ContactScreen = () => {
  return (
    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
      <ScrollView>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <Text>1 Nucamp Way</Text>
          <Text>Seattle, WA 98001</Text>
          <Text>U.S.A.</Text>
          <Text style={{ marginTop: 20 }}>Phone: 1-206-555-1234</Text>
          <Text>Email: campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    </Animatable.View>
  );
};
export default ContactScreen;
