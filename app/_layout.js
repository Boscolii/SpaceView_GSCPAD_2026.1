import { Stack } from "expo-router";

import {
  MissionProvider,
} from "../src/context/MissionContext";

export default function Layout() {
  return (
    <MissionProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="config"
          options={{
            title: "Configurações",
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "#00D4FF",
            headerTitleStyle: {
              color: "#FFF",
            },
          }}
        />
      </Stack>
    </MissionProvider>
  );
}