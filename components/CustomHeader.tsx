import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import icons from "@/constants/icons";

const CustomHeader = () => {
  const router = useRouter();

  return (
    <View className="h-16 bg-primary-color justify-center px-2">
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex flex-row items-center  justify-center gap-1 px-2 h-9 rounded-full bg-white"
      >
        <Image
          source={icons.BackArrow}
          resizeMode="contain"
          className="h-4 w-4 mb-1"
        />
        <Text className="text-lg h-full">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
