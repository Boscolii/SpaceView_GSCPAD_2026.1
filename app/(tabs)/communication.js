import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useMission,
} from "../../src/context/MissionContext";

import ProgressMetric from "../../src/components/ProgressMetric";

export default function Communication() {
  const { signal } =
    useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Comunicação
      </Text>

      <ProgressMetric
        title="Qualidade do Sinal"
        value={signal}
        color="#00D4FF"
      />
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#000",
      padding: 15,
    },

    title: {
      color: "#FFF",
      fontSize: 26,
      fontWeight: "bold",
      marginBottom: 20,
    },
  });