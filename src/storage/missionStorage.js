import AsyncStorage from "@react-native-async-storage/async-storage";

const ALERT_HISTORY_KEY = "alertHistory";
const SETTINGS_KEY = "missionSettings";

export async function saveAlertHistory(
  history
) {
  try {
    await AsyncStorage.setItem(
      ALERT_HISTORY_KEY,
      JSON.stringify(history)
    );
  } catch (error) {
    console.log(error);
  }
}

export async function loadAlertHistory() {
  try {
    const data =
      await AsyncStorage.getItem(
        ALERT_HISTORY_KEY
      );

    return data
      ? JSON.parse(data)
      : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function saveSettings(
  settings
) {
  try {
    await AsyncStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(settings)
    );
  } catch (error) {
    console.log(error);
  }
}

export async function loadSettings() {
  try {
    const data =
      await AsyncStorage.getItem(
        SETTINGS_KEY
      );

    return data
      ? JSON.parse(data)
      : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function clearAlertHistory() {
  try {
    await AsyncStorage.removeItem(
      ALERT_HISTORY_KEY
    );
  } catch (error) {
    console.log(error);
  }
}