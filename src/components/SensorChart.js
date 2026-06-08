import {
  View,
  Text,
} from "react-native";

import {
  LineChart,
} from "react-native-gifted-charts";

export default function SensorChart({
  title,
  history,
  color,
}) {
  const data = history.map(
    (value) => ({
      value,
    })
  );

  const max =
    Math.max(...history);

  const min =
    Math.min(...history);

  const avg =
    history.reduce(
      (a, b) => a + b,
      0
    ) / history.length;

  return (
    <View
      style={{
        marginBottom: 35,
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        {title}
      </Text>

      <LineChart
        data={data}
        color={color}
        thickness={3}
        areaChart
        hideDataPoints
        startFillColor={color}
        endFillColor={color}
        startOpacity={0.25}
        endOpacity={0.02}
      />
    </View>
  );
}