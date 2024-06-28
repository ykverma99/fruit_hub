import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

const Navbar = () => {
  return (
    <View className="flex-row justify-between items-center">
      <Image source={icons.Menu} className="h-6 w-6" resizeMode="contain" />
      <View className="gap-1">
        <Image
          source={icons.Basket}
          className="h-5 w-5 self-center"
          resizeMode="contain"
        />
        <Text style={{ fontSize: 9 }}>My basket</Text>
      </View>
    </View>
  );
};

export default Navbar;
