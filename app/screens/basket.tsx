import { View, Text } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import SaladCart from "@/components/SaladCart";
import CustomButton from "@/components/CustomButton";
import AddressBottomSheet from "@/components/AddressBottomSheet";
import CardBottomSheet from "@/components/CardBottomSheet";

const basket = () => {
  const [bottomSheets, setbottomSheets] = useState("none");
  return (
    <>
      <View className="py-6">
        <View className="h-[90%]">
          <SaladCart
            imageCss={"bg-yellow-100"}
            title="Quinoa fruit salad"
            src={icons.QuinoaFruitSalad}
          />
          <View className="h-[0.5px] w-full bg-slate-300"></View>
          <SaladCart
            imageCss={"bg-purple-100"}
            title="Tropical fruit salad"
            src={icons.TropicalFruitSalad}
          />
          <View className="h-[0.5px] w-full bg-slate-300"></View>

          <SaladCart
            imageCss={"bg-red-100"}
            title="Melo fruit salad"
            src={icons.HoneyLimeCombo}
          />
        </View>
        <View className="px-5 flex-row justify-center items-center">
          <View className="mr-4">
            <Text className="text-xs font-semibold">Total</Text>
            <Text className="text-2xl font-semibold">{"\u20B9"} 6,000</Text>
          </View>
          <CustomButton
            textStyles="font-bold"
            title="Checkout"
            containerStyles="w-[70%]"
            handlePress={() => setbottomSheets("address")}
          />
        </View>
      </View>
      {bottomSheets === "address" ? (
        <AddressBottomSheet setbottomSheet={setbottomSheets} />
      ) : bottomSheets === "card" ? (
        <CardBottomSheet setbottomSheet={setbottomSheets} />
      ) : null}
    </>
  );
};

export default basket;
