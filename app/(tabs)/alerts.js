import {
  ScrollView,
  Text,
} from "react-native";

import AlertCard from "../../src/components/AlertCard";

import {
  useMission,
} from "../../src/context/MissionContext";

export default function Alerts() {
  const {
    alerts,
  } = useMission();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#000",
        padding: 15,
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Alertas Ativos
      </Text>

      {alerts.length === 0 ? (
        <Text
          style={{
            color: "#AAA",
          }}
        >
          Nenhum alerta ativo.
        </Text>
      ) : (
        alerts.map(
          (alert, index) => (
            <AlertCard
              key={index}
              alert={alert}
            />
          )
        )
      )}
    </ScrollView>
  );
}