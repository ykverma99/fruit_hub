import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const order = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={icons.Done} resizeMode="contain" />
      <Text className="text-3xl font-medium mt-8 mb-3">Congratulations</Text>
      <Text className="text-lg text-center font-light mb-8">
        Your order have been taken and being attended to
      </Text>
      <CustomButton
        title="Continue shopping"
        containerStyles="w-40"
        textStyles="font-semibold"
        handlePress={() => {
          router.replace("/screens/home");
        }}
      />
    </View>
  );
};

export default order;
