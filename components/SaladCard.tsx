import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import icons from "@/constants/icons";

interface cardType {
  title: string;
  price: string;
  image: ImageSourcePropType;
  imageCss?: string;
  titleCss?: string;
  containerCss?: string;
  iconCss?: string;
}

const SaladCard = ({
  title,
  price,
  image,
  imageCss,
  titleCss,
  containerCss,
  iconCss,
}: cardType) => {
  return (
    <View
      className={`bg-white relative shadow-lg pr-3 pl-1 flex items-center gap-2 shadow-black/25 w-[150px]  py-5 rounded-xl ${containerCss}`}
    >
      <Image
        source={icons.Heart}
        resizeMode="contain"
        className={`absolute right-3 top-1 h-4 w-4 ${iconCss}`}
      />
      <View>
        <Image
          source={image}
          resizeMode="contain"
          className={`h-20 w-20 ${imageCss}`}
        />
      </View>
      <Text className={`${titleCss} text-center text-sm w-full`}>{title}</Text>
      <View className="flex-row items-center  w-full justify-between px-2.5">
        <Text className="self-start text-primary-color">
          <Text className="font-semibold">{"\u20B9"}</Text> {price}
        </Text>
        <Image source={icons.Cart} resizeMode="contain" className="h-5 w-5" />
      </View>
    </View>
  );
};

export default SaladCard;
