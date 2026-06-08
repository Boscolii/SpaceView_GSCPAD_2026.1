import {
  ScrollView,
} from "react-native";

import SensorChart from "../../src/components/SensorChart";
import StatsCard from "../../src/components/StatsCard";

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

  function getStats(history) {
  const current =
    history[
      history.length - 1
    ];

  const max =
    Math.max(...history);

  const min =
    Math.min(...history);

  const avg = (
    history.reduce(
      (a, b) => a + b,
      0
    ) / history.length
  ).toFixed(1);

  let trend =
    "🟢 Tendência Estável";

  if (history.length >= 5) {
    const last =
      history.slice(-5);

    const firstValue =
      last[0];

    const lastValue =
      last[last.length - 1];

    const difference =
      lastValue - firstValue;

    if (difference > 5) {
      trend =
        "🔴 Tendência de Crescimento";
    } else if (
      difference < -5
    ) {
      trend =
        "🟡 Tendência de Queda";
    }
  }

  return {
    current,
    max,
    min,
    avg,
    trend,
  };
}

  const tempStats =
    getStats(tempHistory);

  const batteryStats =
    getStats(
      batteryHistory
    );

  const signalStats =
    getStats(signalHistory);

  const orbitalStats =
    getStats(
      orbitalHistory
    );

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:
          "#000",
        padding: 15,
      }}
    >
      <StatsCard
        title="Temperatura"
        {...tempStats}
      />

      <SensorChart
        title="Temperatura"
        history={tempHistory}
        color="#FF5722"
      />

      <StatsCard
        title="Energia"
        {...batteryStats}
      />

      <SensorChart
        title="Energia"
        history={batteryHistory}
        color="#FFD600"
      />

      <StatsCard
        title="Sinal"
        {...signalStats}
      />

      <SensorChart
        title="Sinal"
        history={signalHistory}
        color="#00D4FF"
      />

      <StatsCard
        title="Estabilidade Orbital"
        {...orbitalStats}
      />

      <SensorChart
        title="Estabilidade Orbital"
        history={orbitalHistory}
        color="#00E676"
      />
    </ScrollView>
  );
}