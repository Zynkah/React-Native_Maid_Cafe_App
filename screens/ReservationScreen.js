import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
  Modal,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import location from "../assets/img/location.jpg";

const ReservationScreen = () => {
  const [guests, setGuests] = useState(1);
  const [valet, setValet] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleReservation = () => {
    console.log("guests", guests);
    console.log("valet", valet);
    console.log("date", date);
    setShowModal(!showModal);
  };

  const resetForm = () => {
    setGuests(1);
    setValet(false);
    setDate(new Date());
    setShowCalendar(false);
  };

  return (
    <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of guests:</Text>
          <Picker
            style={styles.formItem}
            selectedValue={guests}
            onValueChange={(itemValue) => setGuests(itemValue)}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Valet?</Text>
          <Switch
            style={styles.formItem}
            value={valet}
            trackColor={{ true: "#DB7093", false: null }}
            onValueChange={(value) => setValet(value)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date</Text>
          <Button
            onPress={() => setShowCalendar(!showCalendar)}
            title={date.toLocaleDateString("en-US")}
            color="#DB7093"
            accessibilityLabel="Tap me to select a reservation date"
          />
        </View>
        {showCalendar && (
          <DateTimePicker
            style={styles.formItem}
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        <View style={styles.formRow}>
          <Button
            onPress={() => handleReservation()}
            title="Search Availability"
            color="#DB7093"
            accessibilityLabel="Tap me to search for available campsites to reserve"
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}
        >
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Search Table Reservations</Text>
            <Text style={styles.modalText}>Number of guests: {guests}</Text>
            <Text style={styles.modalText}>Valet?: {valet ? "Yes" : "No"}</Text>
            <Text style={styles.modalText}>
              Date: {date.toLocaleDateString("en-US")}
            </Text>
            <Button
              onPress={() => {
                setShowModal(!showModal);
                resetForm();
              }}
              color="#DB7093"
              title="Close"
            />
          </View>
        </Modal>
        <Image style={styles.image} source={location} />
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    color: "#cc3366",
    fontSize: 24,
    flex: 2,
  },
  formItem: {
    flex: 1,
    color: "#cc3366",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#DB7093",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
  image: {
    width: 400,
    height: 400,
  },
});
export default ReservationScreen;
