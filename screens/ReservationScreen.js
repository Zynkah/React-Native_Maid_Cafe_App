import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";

const ReservationScreen = () => {
  const [guests, setGuests] = useState(1);
  const [valet, setValet] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleReservation = () => {
    console.log("guests", guests);
    console.log("valet", valet);
    console.log("date", date);
    setGuests(1);
    setValet(false);
    setDate(new Date());
    setShowCalendar(false);
  };

  return (
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
    </ScrollView>
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
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
});
export default ReservationScreen;
