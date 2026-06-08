import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import MetricCard from "../../src/components/MetricCard";

import {
  useMission,
} from "../../src/context/MissionContext";

export default function Home() {
  const {
    temperature,
    battery,
    signal,
    orbitalStability,
    alerts,
  } = useMission();

  return (
    <ScrollView
      style={styles.container}
    >
      <MetricCard
        title="Temperatura"
        value={`${temperature}°C`}
      />

      <MetricCard
        title="Energia"
        value={`${battery}%`}
      />

      <MetricCard
        title="Sinal"
        value={`${signal}%`}
      />

      <MetricCard
        title="Estabilidade Orbital"
        value={`${orbitalStability}%`}
      />

      <MetricCard
        title="Alertas Ativos"
        value={alerts.length}
      />
    </ScrollView>
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
  });