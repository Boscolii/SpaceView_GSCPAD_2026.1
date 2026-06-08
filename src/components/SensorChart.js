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

  return (
    <View
      style={{
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 18,
          marginBottom: 15,
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
        hideRules
        hideYAxisText
        hideAxesAndRules
        startFillColor={color}
        endFillColor={color}
        startOpacity={0.3}
        endOpacity={0.05}
        backgroundColor="#111"
      />
    </View>
  );
}