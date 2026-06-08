import { View, Text } from "react-native";

export default function Energy() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 22,
        }}
      >
        Energia
      </Text>
    </View>
  );
}