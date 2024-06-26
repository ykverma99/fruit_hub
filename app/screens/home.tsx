import { View, Text } from "react-native";
import React from "react";
import useUser from "@/hooks/useUser";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  const { user } = useUser();
  return (
    <SafeAreaView>
      <Text>{user?.username}</Text>
    </SafeAreaView>
  );
};

export default home;
