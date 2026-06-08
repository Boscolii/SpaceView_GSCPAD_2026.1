import { Stack } from "expo-router";

import {
  MissionProvider,
} from "../src/context/MissionContext";

export default function Layout() {
  return (
    <MissionProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </MissionProvider>
  );
}