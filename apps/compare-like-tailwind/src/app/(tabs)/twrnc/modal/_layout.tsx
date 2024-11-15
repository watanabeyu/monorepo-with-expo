import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="nextView" options={{}} />
    </Stack>
  );
}
