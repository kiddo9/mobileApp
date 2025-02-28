import React from "react";
import { Platform, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../components/customBackButton";

const language = () => {
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Japanese",
    "Chinese",
    "Russian",
    "Arabic",
    "Portuguese",
    "Hindi",
    "Bengali",
    "Italian",
    "Dutch",
    "Swedish",
    "Korean",
    "Turkish",
    "Polish",
    "Vietnamese",
    "Hausa", // Nigerian language
    "Igbo", // Nigerian language
  ];

  return (
    <SafeAreaView className="h-full bg-[#1A8EEA]">
      <CustomBackButton
        Color="white"
        ClassName={`text-white ${
          Platform.OS == "ios" ? "mt-1" : "mt-10"
        } mx-4 py-3 px-3`}
        Size={20}
        text={true}
      />
      <View className="bg-white mt-10 rounded-t-[40px] h-full px-7 py-9">
        <Text className="text-4xl mb-6 font-semibold">Languages</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {languages.map((Language, index) => (
            <Pressable
              key={index}
              className="border-2 my-4 border-black flex flex-row items-center justify-between py-3 px-3 rounded-xl"
            >
              <Text className="text-xl font-semibold">{Language}</Text>
              <View className="w-5 h-5 rounded-full border-2 border-black"></View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default language;
