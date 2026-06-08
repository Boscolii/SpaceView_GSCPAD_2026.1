import {
  ScrollView,
} from "react-native";

import PredictionCard from "../../src/components/PredictionCard";
import MissionRiskCard from "../../src/components/MissionRiskCard";

import {
  useMission,
} from "../../src/context/MissionContext";

export default function Prediction() {
  const {
    tempHistory,
    batteryHistory,
    signalHistory,

    tempLimit,
    batteryLimit,
    signalLimit,

    alerts,
  } = useMission();

  function analyzeTrend(
    history,
    criticalLimit,
    type
  ) {
    const recent =
      history.slice(-5);

    const first =
      recent[0];

    const last =
      recent[
        recent.length - 1
      ];

    const variation =
      last - first;

    if (
      type ===
      "temperature"
    ) {
      if (
        last >=
        criticalLimit - 5
      ) {
        return {
          analysis:
            "Temperatura próxima do limite operacional.",

          recommendation:
            "Monitorar sistema térmico continuamente.",
        };
      }

      if (
        variation > 5
      ) {
        return {
          analysis:
            "Temperatura apresenta tendência de crescimento.",

          recommendation:
            "Verificar sistema de dissipação térmica.",
        };
      }

      if (
        variation < -5
      ) {
        return {
          analysis:
            "Temperatura apresenta tendência de redução.",

          recommendation:
            "Sistema térmico operando adequadamente.",
        };
      }

      return {
        analysis:
          "Temperatura estável dentro dos parâmetros.",

        recommendation:
          "Operação normal.",
      };
    }

    if (
      type === "battery"
    ) {
      if (
        last <
        criticalLimit + 10
      ) {
        return {
          analysis:
            "Energia apresenta risco de queda para níveis críticos.",

          recommendation:
            "Priorizar economia energética.",
        };
      }

      return {
        analysis:
          "Sistema energético estável.",

        recommendation:
          "Operação normal.",
      };
    }

    if (
      type === "signal"
    ) {
      if (
        last <
        criticalLimit + 10
      ) {
        return {
          analysis:
            "Qualidade de comunicação em risco.",

          recommendation:
            "Verificar redundância de comunicação.",
        };
      }

      return {
        analysis:
          "Comunicação estável.",

        recommendation:
          "Operação normal.",
      };
    }
  }

  const tempPrediction =
    analyzeTrend(
      tempHistory,
      tempLimit,
      "temperature"
    );

  const batteryPrediction =
    analyzeTrend(
      batteryHistory,
      batteryLimit,
      "battery"
    );

  const signalPrediction =
    analyzeTrend(
      signalHistory,
      signalLimit,
      "signal"
    );

  let missionRisk =
    "LOW";

  if (
    alerts.length >= 2
  ) {
    missionRisk =
      "HIGH";
  } else if (
    alerts.length === 1
  ) {
    missionRisk =
      "MEDIUM";
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:
          "#000",
        padding: 15,
      }}
    >
      <MissionRiskCard
        risk={missionRisk}
      />

      <PredictionCard
        title="Temperatura"
        analysis={
          tempPrediction.analysis
        }
        recommendation={
          tempPrediction.recommendation
        }
      />

      <PredictionCard
        title="Energia"
        analysis={
          batteryPrediction.analysis
        }
        recommendation={
          batteryPrediction.recommendation
        }
      />

      <PredictionCard
        title="Comunicação"
        analysis={
          signalPrediction.analysis
        }
        recommendation={
          signalPrediction.recommendation
        }
      />
    </ScrollView>
  );
}