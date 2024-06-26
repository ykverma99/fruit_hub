import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface buttonTypes {
  title: string;
  handlePress?: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: buttonTypes) => {
  return (
    <TouchableOpacity
      className={`bg-primary-color rounded-xl min-h-[55px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`text-white  ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
