import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function AlertCard({
  alert,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {alert}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#5A0000",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  text: {
    color: "#FFF",
    fontWeight: "bold",
  },
});