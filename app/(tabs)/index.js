import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import MetricCard from "../../src/components/MetricCard";
import MissionStatusCard from "../../src/components/MissionStatusCard";

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
    missionStatus,

    tempLimit,
    batteryLimit,
    signalLimit,
  } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        SPACEVIEW
      </Text>

      <Text style={styles.subtitle}>
        Centro de Controle Orbital
      </Text>

      <MissionStatusCard
        status={missionStatus}
      />

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

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push("/config")
        }
      >
        <Text style={styles.buttonText}>
          Configurações
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      padding: 15,
    },

    title: {
      color: "#00D4FF",
      fontSize: 34,
      fontWeight: "bold",
      marginBottom: 5,
    },

    subtitle: {
      color: "#AAA",
      marginBottom: 20,
    },

    limitText: {
      color: "#FFF",
      fontSize: 14,
      marginBottom: 5,
    },

    button: {
      backgroundColor: "#00D4FF",
      padding: 15,
      borderRadius: 10,
      marginTop: 15,
      marginBottom: 20,
    },

    buttonText: {
      textAlign: "center",
      fontWeight: "bold",
      color: "#000",
    },
  });