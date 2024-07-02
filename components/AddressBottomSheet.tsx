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

const AddressBottomSheet = ({
  setbottomSheet,
}: {
  setbottomSheet: Dispatch<SetStateAction<string>>;
}) => {
  const slide = useRef(new Animated.Value(300)).current;
  const [address, setaddress] = useState("");
  const [mobile, setamobile] = useState("");

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

  const routeCardDetail = () => {
    if (address.length > 5 && mobile.length >= 10) {
      setbottomSheet("card");
    } else {
      Alert.alert("Error", "Please fill the details");
    }
  };
  return (
    <View className="absolute h-full w-full justify-end  bg-black/30">
      <Animated.View
        className={"h-[400px] w-full"}
        style={[{ transform: [{ translateY: slide }] }]}
      >
        <TouchableOpacity
          onPress={closeModal}
          className="bg-white self-center w-12 h-12 rounded-full justify-center items-center"
        >
          <Text className="text-xl">X</Text>
        </TouchableOpacity>
        <View className="bg-white w-full h-[340px] rounded-t-2xl mt-4 py-7 px-5">
          <Text className="text-lg mb-4">Delivery address</Text>
          <TextInput
            className="bg-zinc-100 w-full h-14 rounded-lg px-4"
            placeholder="10th avenue, Lekki, Lagos State"
            onChangeText={(e) => setaddress(e)}
          />
          <Text className="text-lg mb-4 mt-4">Number we can call</Text>
          <TextInput
            keyboardType="numeric"
            className="bg-zinc-100 w-full h-14 rounded-lg px-4"
            placeholder="7986617655"
            onChangeText={(e) => setamobile(e)}
          />
          <View className="flex-row mt-4 w-full justify-between">
            <CustomButton
              title="Pay on delivery"
              containerStyles="w-32 bg-white border border-primary-color"
              textStyles="text-primary-color"
              handlePress={() => {
                if (address.length > 5 && mobile.length > 9) {
                  router.replace("/screens/order");
                } else {
                  Alert.alert("Error", "Please fill the details");
                }
              }}
            />
            <CustomButton
              title="Pay with card"
              textStyles="text-primary-color"
              containerStyles="w-32 bg-white border border-primary-color"
              handlePress={routeCardDetail}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default AddressBottomSheet;
