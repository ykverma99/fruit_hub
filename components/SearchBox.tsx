import { View, Image, TextInput } from "react-native";
import icons from "@/constants/icons";
const SearchBox = () => {
  return (
    <View className="flex-row justify-between items-center my-8">
      <View className="bg-gray-200 w-[90%] border rounded-xl border-gray-100 flex-row gap-2 items-center h-14 pb-2">
        <Image
          source={icons.Search}
          resizeMode="contain"
          className="h-5 w-5 "
        />
        <TextInput
          placeholder="Search for fruit salad combos"
          className="h-full w-full"
        />
      </View>
      <Image source={icons.Filter} resizeMode="contain" className="h-5 w-5" />
    </View>
  );
};

export default SearchBox;
