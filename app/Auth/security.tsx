import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../../components/customBackButton";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const security = () => {
  return (
    <SafeAreaView className="bg-[#1A8EEA] h-full">
      <CustomBackButton
        Color="white"
        ClassName={`text-white ${
          Platform.OS == "ios" ? "mt-1" : "mt-10"
        } mx-4 py-3 px-3`}
        Size={20}
        text={true}
      />
      <View className="bg-white mt-10 rounded-t-[40px] h-full px-7 py-9">
        <TouchableOpacity
          onPress={() => alert("feature is still under production")}
          className="border-2 my-4 border-black flex flex-row items-center gap-6 py-3 px-3 rounded-xl"
        >
          <FontAwesome5 name="fingerprint" size={24} color="black" />
          <Text className="text-lg font-semibold">
            enable fingerprint Authentication
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("feature is still under production")}
          className="border-2 my-4 border-black flex flex-row items-center gap-6 py-3 px-3 rounded-xl"
        >
          <MaterialCommunityIcons
            name="face-recognition"
            size={24}
            color="black"
          />
          <Text className="text-lg font-semibold">
            enable Face Authentication
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("feature is still under production")}
          className="border-2 my-4 border-black flex flex-row items-center gap-6 py-3 px-3 rounded-xl"
        >
          <Octicons name="shield-lock" size={24} color="black" />
          <Text className="text-lg font-semibold">
            enable pin Authentication
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default security;
