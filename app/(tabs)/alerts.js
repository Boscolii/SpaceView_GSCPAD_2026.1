import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import AlertCard from "../../src/components/AlertCard";

import {
  useMission,
} from "../../src/context/MissionContext";

export default function Alerts() {
  const {
    alerts,
    alertHistory,
    clearHistory,
  } = useMission();

  function handleClearHistory() {
    Alert.alert(
      "Limpar Histórico",
      "Tem certeza que deseja apagar todo o histórico de alertas?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Limpar",
          style: "destructive",
          onPress: () =>
            clearHistory(),
        },
      ]
    );
  }

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

      <TouchableOpacity
        style={styles.clearButton}
        onPress={
          handleClearHistory
        }
      >
        <Text
          style={
            styles.clearButtonText
          }
        >
           Limpar Histórico
        </Text>
      </TouchableOpacity>

      {alertHistory.length === 0 ? (
        <Text style={styles.empty}>
          Nenhum histórico salvo.
        </Text>
      ) : (
        alertHistory.map(
          (item, index) => (
            <AlertCard
              key={index}
              alert={`${item.date}\n${item.alerts.join(
                ", "
              )}`}
            />
          )
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
      marginBottom: 15,
    },

    clearButton: {
      backgroundColor:
        "#8B0000",
      padding: 12,
      borderRadius: 10,
      marginBottom: 15,
    },

    clearButtonText: {
      color: "#FFF",
      textAlign: "center",
      fontWeight: "bold",
    },
  });