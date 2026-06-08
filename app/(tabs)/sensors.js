import {
  ScrollView,
} from "react-native";

import SensorChart from "../../src/components/SensorChart";

import {
  useMission,
} from "../../src/context/MissionContext";

export default function Sensors() {
  const {
    tempHistory,
    batteryHistory,
    signalHistory,
    orbitalHistory,
  } = useMission();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#000",
        padding: 15,
      }}
    >
      <SensorChart
        title="Temperatura"
        history={tempHistory}
        color="#FF5722"
      />

      <SensorChart
        title="Energia"
        history={batteryHistory}
        color="#FFD600"
      />

      <SensorChart
        title="Sinal"
        history={signalHistory}
        color="#00D4FF"
      />

      <SensorChart
        title="Estabilidade Orbital"
        history={orbitalHistory}
        color="#00E676"
      />
    </ScrollView>
  );
}