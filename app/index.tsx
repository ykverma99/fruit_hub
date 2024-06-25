import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { StatusBar, Text, View } from "react-native";

const index = () => {
  const [splash, setsplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 2000);
  });

  if (splash) {
    return <SplashScreen />;
  }

  return (
    <View>
      <Text>Hello</Text>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

export default index;
