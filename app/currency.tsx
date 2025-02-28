import React from "react";
import { Platform, Pressable, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../components/customBackButton";

function VideoCall() {
  const currencies = [
    "US Dollar (USD)",
    "Euro (EUR)",
    "Japanese Yen (JPY)",
    "British Pound (GBP)",
    "Canadian Dollar (CAD)",
    "Australian Dollar (AUD)",
    "Swiss Franc (CHF)",
    "Chinese Yuan (CNY)",
    "Swedish Krona (SEK)",
    "Nigerian Naira (NGN)",
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
        <Text className="text-4xl mb-6 font-semibold">Currencies</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {currencies.map((currency, index) => (
            <Pressable
              key={index}
              className="border-2 my-4 border-black flex flex-row items-center justify-between py-3 px-3 rounded-xl"
            >
              <Text className="text-xl font-semibold">{currency}</Text>
              <View className="w-5 h-5 rounded-full border-2 border-black"></View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default VideoCall;
