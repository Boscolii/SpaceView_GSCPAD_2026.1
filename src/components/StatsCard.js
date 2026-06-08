import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function StatsCard({
  title,
  current,
  max,
  min,
  avg,
  trend,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.text}>
        Atual: {current}
      </Text>

      <Text style={styles.text}>
        Máximo: {max}
      </Text>

      <Text style={styles.text}>
        Mínimo: {min}
      </Text>

      <Text style={styles.text}>
        Média: {avg}
      </Text>

      <Text style={styles.trend}>
        {trend}
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    card: {
      backgroundColor: "#111",
      padding: 15,
      borderRadius: 12,
      marginBottom: 15,
    },

    title: {
      color: "#00D4FF",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },

    text: {
      color: "#FFF",
      marginBottom: 4,
    },

    trend: {
      marginTop: 10,
      fontWeight: "bold",
      color: "#00E676",
    },
  });