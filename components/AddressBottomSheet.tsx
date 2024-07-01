import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const AddressBottomSheet = ({
  handlePress,
  onPress,
}: {
  handlePress: () => void;
  onPress: () => void;
}) => {
  return (
    <View className="absolute h-full w-full justify-end  bg-black/30">
      <TouchableOpacity
        onPress={onPress}
        className="bg-white self-center w-12 h-12 rounded-full justify-center items-center"
      >
        <Text className="text-xl">X</Text>
      </TouchableOpacity>
      <View className="bg-white w-full h-[340px] rounded-t-2xl mt-4 py-7 px-5">
        <Text className="text-lg mb-4">Delivery address</Text>
        <TextInput
          className="bg-zinc-100 w-full h-14 rounded-lg px-4"
          placeholder="10th avenue, Lekki, Lagos State"
        />
        <Text className="text-lg mb-4 mt-4">Number we can call</Text>
        <TextInput
          keyboardType="numeric"
          className="bg-zinc-100 w-full h-14 rounded-lg px-4"
          placeholder="7986617655"
        />
        <View className="flex-row mt-4 w-full justify-between">
          <CustomButton
            title="Pay on delivery"
            containerStyles="w-32 bg-white border border-primary-color"
            textStyles="text-primary-color"
          />
          <CustomButton
            title="Pay with card"
            textStyles="text-primary-color"
            containerStyles="w-32 bg-white border border-primary-color"
            handlePress={handlePress}
          />
        </View>
      </View>
    </View>
  );
};

export default AddressBottomSheet;
