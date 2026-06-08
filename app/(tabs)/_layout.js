import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#111",
          borderTopColor: "#222",
        },

        tabBarActiveTintColor: "#00D4FF",
        tabBarInactiveTintColor: "#777",

        headerStyle: {
          backgroundColor: "#111",
        },

        headerTintColor: "#FFF",

        sceneStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="planet"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sensors"
        options={{
          title: "Sensores",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="analytics"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="alerts"
        options={{
          title: "Alertas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="warning"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="prediction"
        options={{
          title: "IA",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="sparkles"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}