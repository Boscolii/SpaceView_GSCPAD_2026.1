import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  generateTemperature,
  generateBattery,
  generateSignal,
  generateOrbitalStability,
} from "../services/simulator";

import {
  loadAlertHistory,
  saveAlertHistory,
} from "../storage/missionStorage";

const MissionContext =
  createContext();

export function MissionProvider({
  children,
}) {
  const [temperature, setTemperature] =
    useState(70);

  const [battery, setBattery] =
    useState(90);

  const [signal, setSignal] =
    useState(95);

  const [
    orbitalStability,
    setOrbitalStability,
  ] = useState(98);

  const [alerts, setAlerts] =
    useState([]);

  const [
    alertHistory,
    setAlertHistory,
  ] = useState([]);

  const [tempHistory, setTempHistory] =
    useState([70]);

  const [
    batteryHistory,
    setBatteryHistory,
  ] = useState([90]);

  const [
    signalHistory,
    setSignalHistory,
  ] = useState([95]);

  const [
    orbitalHistory,
    setOrbitalHistory,
  ] = useState([98]);

  const [
  tempLimit,
  setTempLimit,
] = useState(80);

const [
  batteryLimit,
  setBatteryLimit,
] = useState(25);

const [
  signalLimit,
  setSignalLimit,
] = useState(20);

  useEffect(() => {
    initialize();

    

    const interval =
      setInterval(updateMission, 3000);

    return () =>
      clearInterval(interval);
  }, []);

  async function initialize() {
    const savedHistory =
      await loadAlertHistory();

    setAlertHistory(savedHistory);
  }

  async function updateMission() {
    const temp =
      generateTemperature();

    const bat =
      generateBattery();

    const sig =
      generateSignal();

    const orbital =
      generateOrbitalStability();

    setTemperature(temp);
    setBattery(bat);
    setSignal(sig);
    setOrbitalStability(
      orbital
    );

    setTempHistory((prev) =>
      [...prev, temp].slice(-20)
    );

    setBatteryHistory((prev) =>
      [...prev, bat].slice(-20)
    );

    setSignalHistory((prev) =>
      [...prev, sig].slice(-20)
    );

    setOrbitalHistory((prev) =>
      [...prev, orbital].slice(-20)
    );

    const currentAlerts = [];

    if (temp > 80) {
      currentAlerts.push(
        "🔥 Temperatura Crítica"
      );
    }

    if (bat < 25) {
      currentAlerts.push(
        "⚡ Energia Baixa"
      );
    }

    if (sig < 20) {
      currentAlerts.push(
        "📡 Falha de Comunicação"
      );
    }

    setAlerts(currentAlerts);

    if (currentAlerts.length > 0) {
      const newEvent = {
        date:
          new Date().toLocaleString(),
        alerts:
          currentAlerts,
      };

      const updatedHistory = [
        newEvent,
        ...alertHistory,
      ];

      setAlertHistory(
        updatedHistory
      );

      await saveAlertHistory(
        updatedHistory
      );
    }
  }

  const missionStatus =
    alerts.length > 0
      ? "ATENÇÃO"
      : "OPERACIONAL";

  return (
    <MissionContext.Provider
      value={{
        temperature,
        battery,
        signal,
        orbitalStability,

        tempHistory,
        batteryHistory,
        signalHistory,
        orbitalHistory,

        alerts,
        alertHistory,

        missionStatus,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(
    MissionContext
  );
}