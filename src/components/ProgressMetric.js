import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function ProgressMetric({
  title,
  value,
  color,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}%
      </Text>

      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            {
              width: `${value}%`,
              backgroundColor: color,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      marginBottom: 25,
    },

    title: {
      color: "#FFF",
      fontSize: 18,
    },

    value: {
      color: "#AAA",
      marginTop: 5,
      marginBottom: 8,
    },

    track: {
      height: 12,
      backgroundColor: "#222",
      borderRadius: 20,
      overflow: "hidden",
    },

    fill: {
      height: 12,
      borderRadius: 20,
    },
  });