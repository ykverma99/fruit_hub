import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import useUser from "@/hooks/useUser";
import { Redirect, router } from "expo-router";

const signup = () => {
  const [userName, setuserName] = useState("");
  const { login, user } = useUser();
  const signUser = () => {
    if (userName == "" || userName.length < 4) {
      Alert.alert("Error", "Please fill correct name");
      return;
    }
    login(userName);
    router.replace("/screens/home");
  };

  if (user) {
    return <Redirect href={"/screens/home"} />;
  }

  return (
    <SafeAreaView className=" flex-1 justify-center">
      <View className="h-[60%] bg-primary-color gap-2 justify-end items-center pb-9">
        <Image
          source={icons.FruitBucket_1}
          resizeMode="contain"
          className="w-full h-60"
        />
        <Image
          source={icons.ShadowFruitBucket_1}
          resizeMode="contain"
          className="w-[70%] self-center"
        />
      </View>
      <View className="bg-white h-[40%] py-10 px-5">
        <Text className="text-lg text-secondary-color tracking-wide capitalize font-medium mb-4">
          What is Your Name?
        </Text>
        <TextInput
          placeholder="Yogeshwar Verma"
          className="bg-gray-200 rounded-lg px-3 w-full min-h-[55px] mb-8"
          onChangeText={(e) => {
            setuserName(e);
          }}
        />
        <CustomButton handlePress={signUser} title="Start Ordering" />
      </View>
    </SafeAreaView>
  );
};

export default signup;
