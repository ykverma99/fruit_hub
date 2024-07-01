import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const CardBottomSheet = ({ onPress }: { onPress: () => void }) => {
  return (
    <View className="absolute h-full w-full justify-end  bg-black/30">
      <TouchableOpacity
        onPress={onPress}
        className="bg-white self-center w-12 h-12 rounded-full justify-center items-center"
      >
        <Text className="text-xl">X</Text>
      </TouchableOpacity>
      <View className="bg-white w-full h-[500px] rounded-t-2xl mt-4 py-7 ">
        <Text className="text-lg mb-4 px-5">Card Holders Name</Text>
        <View className="px-5">
          <TextInput
            className="bg-zinc-100 w-full h-14 rounded-lg px-4"
            placeholder="Yogeshwar Khurmi"
          />
        </View>
        <View className="px-5">
          <Text className="text-lg mb-4 mt-4">Card Number</Text>
          <TextInput
            keyboardType="numeric"
            className="bg-zinc-100 w-full h-14 rounded-lg px-4"
            placeholder="1234 5678 9012 1314"
          />
        </View>
        <View className="flex-row w-full px-5 justify-between">
          <View>
            <Text className="text-lg mb-4 mt-4">Date</Text>
            <TextInput
              className="bg-zinc-100 w-28 h-14 rounded-lg px-4"
              placeholder="10/30"
            />
          </View>
          <View>
            <Text className="text-lg mb-4 mt-4">CCV</Text>
            <TextInput
              keyboardType="numeric"
              className="bg-zinc-100 w-28 h-14 rounded-lg px-4"
              placeholder="123"
            />
          </View>
        </View>
        <View className="mt-8 rounded-t-3xl w-full justify-center items-center flex-row h-28 bg-primary-color">
          <CustomButton
            title="Complete Order"
            textStyles="text-primary-color"
            containerStyles="w-32 bg-white"
          />
        </View>
      </View>
    </View>
  );
};

export default CardBottomSheet;
