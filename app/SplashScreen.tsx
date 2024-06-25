import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

const SplashScreen = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Image
        source={icons.SplashIcon}
        className="h-40 w-40"
        resizeMode="contain"
      />
      <Text className="bg-primary-color px-7  py-2 rounded-tl-2xl  rounded-br-2xl mt-3 text-white text-lg">
        Fruit Hub
      </Text>
    </View>
  );
};

export default SplashScreen;
