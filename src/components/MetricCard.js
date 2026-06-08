import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function MetricCard({
  title,
  value,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  title: {
    color: "#AAA",
    fontSize: 15,
  },

  value: {
    color: "#00D4FF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },
});