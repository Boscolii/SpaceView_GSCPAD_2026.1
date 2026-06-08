import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function MissionStatusCard({
  status,
}) {
  const color =
    status === "OPERACIONAL"
      ? "#00FF88"
      : "#FF9800";

  return (
    <View style={styles.card}>
      <Text style={styles.label}>
        Status da Missão
      </Text>

      <Text
        style={[
          styles.value,
          { color },
        ]}
      >
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  label: {
    color: "#AAA",
    fontSize: 16,
  },

  value: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
});