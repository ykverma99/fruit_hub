import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

const SaladCart = ({
  src,
  title,
  imageCss,
}: {
  src: ImageSourcePropType;
  title: string;
  imageCss: string;
}) => {
  return (
    <View className="flex-row  pr-6 items-center justify-between gap-4 mb-4">
      <View className="flex-row items-center justify-center gap-4">
        <View
          className={`h-16 w-16 flex justify-center items-center rounded-xl ${imageCss}`}
        >
          <Image source={src} resizeMode="contain" className="h-10 w-10" />
        </View>
        <View>
          <Text className="font-medium text-xs mb-3">{title}</Text>
          <Text className="text-xs font-light">2packs</Text>
        </View>
      </View>
      <View>
        <Text className="text-lg font-medium">{"\u20B9"} 2,000</Text>
      </View>
    </View>
  );
};

export default SaladCart;
