import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ScreenLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" backgroundColor="#FFA451" />
    </>
  );
};

export default ScreenLayout;
