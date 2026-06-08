import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function PredictionCard({
  title,
  analysis,
  recommendation,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.analysis}>
        {analysis}
      </Text>

      <Text style={styles.recommendation}>
        Recomendação:
      </Text>

      <Text style={styles.text}>
        {recommendation}
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

    analysis: {
      color: "#FFF",
      marginBottom: 10,
    },

    recommendation: {
      color: "#FFD600",
      fontWeight: "bold",
      marginBottom: 5,
    },

    text: {
      color: "#FFF",
    },
  });