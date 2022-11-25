import { Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import contact from "../assets/img/contact.jpg";

const ContactScreen = () => {
  return (
    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
      <ScrollView>
        <Card wrapperStyle={{ margin: 20, alignItems: "center" }}>
          <Card.Title style={styles.title}>Contact Information</Card.Title>
          <Card.Divider />
          <Text style={styles.description}>1 Nucamp Way</Text>
          <Text style={styles.description}>Seattle, WA 98001</Text>
          <Text style={styles.description}>U.S.A.</Text>
          <Text style={styles.phone}>Phone: 1-206-555-1234</Text>
          <Text style={styles.description}>Email: campsites@nucamp.co</Text>
          <Card.Divider />
          <Image style={styles.image} source={contact} />
        </Card>
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#cc3366",
    fontSize: 24,
  },
  description: {
    fontSize: 16,
    color: "#db7094",
  },
  phone: {
    fontSize: 16,
    color: "#db7094",
    marginTop: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
});
export default ContactScreen;
