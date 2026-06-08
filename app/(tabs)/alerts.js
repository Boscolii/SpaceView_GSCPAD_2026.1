import {
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";

import AlertCard from "../../src/components/AlertCard";

import {
  useMission,
} from "../../src/context/MissionContext";

export default function Alerts() {
  const {
    alerts,
    alertHistory,
  } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Alertas Ativos
      </Text>

      {alerts.length === 0 ? (
        <Text style={styles.empty}>
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

      <Text
        style={styles.historyTitle}
      >
        Histórico
      </Text>

      {alertHistory.map(
        (item, index) => (
          <AlertCard
            key={index}
            alert={`${item.date}\n${item.alerts.join(
              ", "
            )}`}
          />
        )
      )}
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

    title: {
      color: "#FFF",
      fontSize: 26,
      fontWeight: "bold",
      marginBottom: 20,
    },

    historyTitle: {
      color: "#FFF",
      fontSize: 22,
      fontWeight: "bold",
      marginTop: 25,
      marginBottom: 15,
    },

    empty: {
      color: "#AAA",
    },
  });