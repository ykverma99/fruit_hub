import React, { useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import CustomHeader from "@/components/CustomHeader";

const ScreenLayout = () => {
  const [isHeaderShown, setIsHeaderShown] = useState(false);

  const toggleHeader = () => {
    setIsHeaderShown(!isHeaderShown);
  };

  return (
    <>
      <Stack>
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen
          name="product"
          options={{
            headerStyle: { backgroundColor: "#FFA451" },
            headerBackVisible: false,
            headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="basket"
          options={{
            headerStyle: { backgroundColor: "#FFA451" },
            headerBackVisible: false,
            headerTitle: () => (
              <CustomHeader title="My Basket" styleContainer="h-28" />
            ),
          }}
        />
      </Stack>
      <StatusBar style="light" backgroundColor="#FFA451" />
    </>
  );
};

export default ScreenLayout;
