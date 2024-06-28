import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import useUser from "@/hooks/useUser";
import icons from "@/constants/icons";
import SearchBox from "@/components/SearchBox";
import SaladCard from "@/components/SaladCard";

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
          {/* <SaladCard /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
