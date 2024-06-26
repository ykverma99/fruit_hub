import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";
import SplashScreen from "./SplashScreen";
import useUser from "@/hooks/useUser";

const index = () => {
  const [splash, setsplash] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 2000);
  });

  if (splash) {
    return <SplashScreen />;
  }

  if (user) {
    return <Redirect href={"/screens/home"} />;
  }
  return (
    <SafeAreaView className="flex-1 justify-center">
      <View className="h-[60%] bg-primary-color gap-2 justify-end items-center pb-9">
        <Image
          source={icons.FruitBucket}
          resizeMode="contain"
          className="w-full h-60"
        />
        <Image
          source={icons.ShadowFruitBucket}
          resizeMode="contain"
          className="w-[70%] self-center"
        />
      </View>
      <View className="bg-white h-[40%] py-14 px-4">
        <Text className="text-lg text-secondary-color tracking-wide capitalize font-medium mb-2">
          Get the Freshest Fruit Salad Combo
        </Text>
        <Text className="text-gray-500 w-72 leading-5 mb-10">
          We Deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
        <CustomButton
          title="Let's Continue"
          handlePress={() => {
            router.push("/screens/signup");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
