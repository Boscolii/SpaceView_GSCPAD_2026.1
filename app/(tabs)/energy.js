import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useMission,
} from "../../src/context/MissionContext";

import ProgressMetric from "../../src/components/ProgressMetric";

export default function Energy() {
  const { battery } =
    useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sistema de Energia
      </Text>

      <ProgressMetric
        title="Carga da Bateria"
        value={battery}
        color="#FFD600"
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