import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const product = () => {
  const [quantity, setquantity] = useState(1);

  const addQuantity = () => {
    setquantity((prev) => prev + 1);
  };
  const subQuantity = () => {
    if (quantity == 1) {
      setquantity(1);
    } else {
      setquantity((prev) => prev - 1);
    }
  };

  return (
    <View className="bg-primary-color h-full">
      <View className="justify-center items-center h-60">
        <Image
          source={icons.QuinoaFruitSalad_2}
          resizeMode="cover"
          className="h-40 w-40"
        />
      </View>
      <View className="bg-white rounded-t-2xl pt-8 h-full px-5">
        <Text className="text-2xl font-medium tracking-wide">
          Quinoa Fruit Salad
        </Text>
        <View className="flex-row w-full justify-between my-7">
          <View className={`flex-row items-center`}>
            <TouchableOpacity
              className={`h-8 w-8 flex items-center border rounded-full`}
              onPress={subQuantity}
            >
              <Text className={`text-4xl leading-[35px]`}>-</Text>
            </TouchableOpacity>
            <Text className={`px-4 text-lg`}>{quantity}</Text>
            <TouchableOpacity
              className={`h-8 w-8 flex items-center bg-orange-100 rounded-full`}
              onPress={addQuantity}
            >
              <Text
                className={`text-2xl font-light leading-[30px] text-primary-color`}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-xl font-medium">{"\u20B9"} 2,000</Text>
          </View>
        </View>
        <View className="h-[0.5px] w-full bg-slate-300"></View>
        <View className="my-5">
          <Text className="text-lg border-b border-b-primary-color w-40">
            One Pack Contains:
          </Text>
          <Text className="font-semibold my-4">
            Red Quinoa, Lime, Honey, Bluberries, Strawberries, mango, Fresh min.
          </Text>
          <View className="h-[0.5px] w-full bg-slate-300"></View>
          <Text className="text-sm my-4">
            If you are lookin for a new fruit salad to eat today,quinoa is the
            perfect brunch for you. make
          </Text>
          <View className="flex-row items-center w-full mt-5">
            <TouchableOpacity className="bg-orange-100 p-3 flex justify-center mr-4 items-center rounded-xl">
              <Image
                source={icons.Heart}
                resizeMode="contain"
                className="h-6 w-6"
              />
            </TouchableOpacity>
            <CustomButton
              handlePress={() => router.push("/screens/basket")}
              textStyles="font-medium"
              containerStyles="w-[80%]"
              title="Add to basket"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default product;
