import AsyncStorage from "@react-native-async-storage/async-storage";

const ALERT_HISTORY_KEY = "alertHistory";

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