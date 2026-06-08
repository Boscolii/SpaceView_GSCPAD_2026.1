import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function MissionRiskCard({
  risk,
}) {
  const riskData = {
    LOW: {
      icon: "🟢",
      title: "Baixo Risco",
      description:
        "Todos os sistemas operam normalmente.",
    },

    MEDIUM: {
      icon: "🟡",
      title: "Médio Risco",
      description:
        "Existem indicadores que exigem atenção.",
    },

    HIGH: {
      icon: "🔴",
      title: "Alto Risco",
      description:
        "Existe risco operacional crítico.",
    },
  };

  const current =
    riskData[risk] ||
    riskData.LOW;

  return (
    <View style={styles.card}>
      <Text style={styles.header}>
        STATUS GERAL DA MISSÃO
      </Text>

      <Text style={styles.icon}>
        {current.icon}
      </Text>

      <Text style={styles.title}>
        {current.title}
      </Text>

      <Text style={styles.description}>
        {current.description}
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    card: {
      backgroundColor: "#111",
      padding: 20,
      borderRadius: 15,
      marginBottom: 20,
      alignItems: "center",
    },

    header: {
      color: "#00D4FF",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },

    icon: {
      fontSize: 40,
      marginBottom: 10,
    },

    title: {
      color: "#FFF",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },

    description: {
      color: "#AAA",
      textAlign: "center",
    },
  });