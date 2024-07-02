import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const CardBottomSheet = ({
  setbottomSheet,
}: {
  setbottomSheet: Dispatch<SetStateAction<string>>;
}) => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [date, setdate] = useState("");
  const [ccv, setccv] = useState("");

  const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideUp();
  });

  const closeModal = () => {
    slideDown();

    setTimeout(() => {
      setbottomSheet("none");
    }, 500);
  };

  const routeChange = () => {
    if (name.length && number.length && date.length && ccv.length) {
      router.replace("/screens/order");
    } else {
      Alert.alert("Error", "Please fill the details");
    }
  };
  return (
    <View className="absolute h-full w-full justify-end  bg-black/30">
      <Animated.View
        className={"h-[570px] w-full"}
        style={[{ transform: [{ translateY: slide }] }]}
      >
        <TouchableOpacity
          onPress={closeModal}
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
              onChangeText={(e) => setname(e)}
            />
          </View>
          <View className="px-5">
            <Text className="text-lg mb-4 mt-4">Card Number</Text>
            <TextInput
              keyboardType="numeric"
              className="bg-zinc-100 w-full h-14 rounded-lg px-4"
              onChangeText={(e) => setnumber(e)}
              placeholder="1234 5678 9012 1314"
            />
          </View>
          <View className="flex-row w-full px-5 justify-between">
            <View>
              <Text className="text-lg mb-4 mt-4">Date</Text>
              <TextInput
                onChangeText={(e) => setdate(e)}
                className="bg-zinc-100 w-28 h-14 rounded-lg px-4"
                placeholder="10/30"
              />
            </View>
            <View>
              <Text className="text-lg mb-4 mt-4">CCV</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={(e) => setccv(e)}
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
              handlePress={routeChange}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default CardBottomSheet;
