import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { useState } from "react";

import {
  useMission,
} from "../src/context/MissionContext";

import {
  saveSettings,
} from "../src/storage/missionStorage";

export default function Config() {
  const {
    tempLimit,
    batteryLimit,
    signalLimit,

    setTempLimit,
    setBatteryLimit,
    setSignalLimit,
  } = useMission();

  const [temp, setTemp] =
    useState(
      String(tempLimit)
    );

  const [battery, setBattery] =
    useState(
      String(batteryLimit)
    );

  const [signal, setSignal] =
    useState(
      String(signalLimit)
    );

  async function save() {
  const tempValue =
    Number(temp);

  const batteryValue =
    Number(battery);

  const signalValue =
    Number(signal);

  if (
    isNaN(tempValue)
  ) {
    Alert.alert(
      "Erro",
      "Temperatura inválida."
    );
    return;
  }

  if (
    tempValue < 0 ||
    tempValue > 150
  ) {
    Alert.alert(
      "Erro",
      "A temperatura deve estar entre 0 e 150."
    );
    return;
  }

  if (
    isNaN(batteryValue)
  ) {
    Alert.alert(
      "Erro",
      "Limite de bateria inválido."
    );
    return;
  }

  if (
    batteryValue < 0 ||
    batteryValue > 100
  ) {
    Alert.alert(
      "Erro",
      "A bateria deve estar entre 0 e 100."
    );
    return;
  }

  if (
    isNaN(signalValue)
  ) {
    Alert.alert(
      "Erro",
      "Limite de sinal inválido."
    );
    return;
  }

  if (
    signalValue < 0 ||
    signalValue > 100
  ) {
    Alert.alert(
      "Erro",
      "O sinal deve estar entre 0 e 100."
    );
    return;
  }

  const settings = {
    tempLimit:
      tempValue,

    batteryLimit:
      batteryValue,

    signalLimit:
      signalValue,
  };

  setTempLimit(
    settings.tempLimit
  );

  setBatteryLimit(
    settings.batteryLimit
  );

  setSignalLimit(
    settings.signalLimit
  );

  await saveSettings(
    settings
  );

  Alert.alert(
    "Sucesso",
    "Configurações salvas."
  );
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Configurações
      </Text>

      <Text style={styles.label}>
        Limite de Temperatura
      </Text>

      <TextInput
        style={styles.input}
        value={temp}
        onChangeText={setTemp}
        keyboardType="number-pad"
        maxLength={3}
      />

      <Text style={styles.label}>
        Limite de Bateria
      </Text>

      <TextInput
        style={styles.input}
        value={battery}
        onChangeText={setBattery}
        keyboardType="number-pad"
        maxLength={3}
      />

      <Text style={styles.label}>
        Limite de Sinal
      </Text>

      <TextInput
        style={styles.input}
        value={signal}
        onChangeText={setSignal}
        keyboardType="number-pad"
        maxLength={3}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={save}
      >
        <Text
          style={styles.buttonText}
        >
          Salvar Configurações
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#000",
      padding: 20,
    },

    title: {
      color: "#00D4FF",
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 25,
    },

    label: {
      color: "#FFF",
      marginBottom: 8,
      marginTop: 10,
    },

    input: {
      backgroundColor:
        "#111",
      color: "#FFF",
      padding: 15,
      borderRadius: 10,
    },

    button: {
      backgroundColor:
        "#00D4FF",
      padding: 15,
      borderRadius: 10,
      marginTop: 30,
    },

    buttonText: {
      textAlign: "center",
      fontWeight: "bold",
      color: "#000",
    },
  });