import { View, Text, Image, TextInput, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import useUser from "@/hooks/useUser";
import icons from "@/constants/icons";
import SearchBox from "@/components/SearchBox";
import SaladCard from "@/components/SaladCard";

const cat = ["Hottest", "popular", "New Combo", "Top"];

const Home = () => {
  const { user } = useUser();
  return (
    <SafeAreaView className="m-5">
      <Navbar />
      <View className="my-4">
        <Text className="text-lg tracking-wide">
          Hello {user ? user.username : "Kante"},
          <Text className="font-medium"> What fruit salad</Text>
        </Text>
        <Text className="font-medium text-lg">combo do you want today?</Text>
      </View>
      <SearchBox />
      <View className="gap-7">
        <Text className="font-semibold text-2xl">Recommended Combo</Text>
        <View className="flex-row justify-between pl-2 pr-0.5">
          <SaladCard
            title={"Honey lime combo"}
            price="2,000"
            image={icons.HoneyLimeCombo}
          />
          <SaladCard
            title={"Berry mango combo"}
            price="8,000"
            image={icons.BerrymangoCombo}
          />
        </View>
      </View>
      <View className="flex-row items-center mt-8 mb-4">
        {cat.map((elm, idx) => {
          return (
            <Text
              key={idx}
              className={`${
                idx == 0
                  ? "text-xl font-semibold ml-1 text-black"
                  : "text-gray-500  font-medium ml-5"
              }`}
            >
              {elm}
            </Text>
          );
        })}
      </View>
      <View className="flex-row pl-3">
        <SaladCard
          title="Quinoa fruit salad"
          image={icons.QuinoaFruitSalad}
          price="10,000"
          imageCss="h-16 w-16"
          containerCss="bg-yellow-50 w-[135px] "
        />
        <SaladCard
          title="Tropical fruit salad"
          image={icons.TropicalFruitSalad}
          price="10,000"
          imageCss="h-16 w-16"
          containerCss="bg-red-50 w-[135px] ml-3"
        />
        <SaladCard
          title="Melo fruit salad"
          image={icons.HoneyLimeCombo}
          price="10,000"
          imageCss="h-16 w-16"
          containerCss="bg-purple-50 w-[135px] ml-3"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
