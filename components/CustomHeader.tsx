import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import icons from "@/constants/icons";

const CustomHeader = ({
  styleContainer,
  title,
}: {
  title?: string;
  styleContainer?: string;
}) => {
  const router = useRouter();

  return (
    <View
      className={`bg-primary-color justify-center px-2 ${
        title
          ? "flex-row items-center gap-4"
          : "flex-row pt-4 h-16 justify-center items-start "
      } ${styleContainer}`}
    >
      <View>
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
      <Text className="text-2xl  tracking-wide text-white mb-2">{title}</Text>
    </View>
  );
};

export default CustomHeader;
