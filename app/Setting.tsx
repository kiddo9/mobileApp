import { View, Text, ScrollView, Alert, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingOption from "../components/SettingOption";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomBackButton from "../components/customBackButton";

const Story = () => {
  const Signout = async () => {
    //await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem("token");
    Alert.alert("Sign out successfull");
    router.push("/Auth/Login");
  };

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
      <View className="bg-white mt-20 rounded-t-[40px] h-full px-7 py-9">
        <ScrollView className="">
          <View className="">
            <SettingOption
              title="Account"
              Name="person-outline"
              Click={() => router.push("/editProfile")}
            />
            <SettingOption
              title="password"
              Name="lock-closed-outline"
              Click={() => router.push("Auth/changePassword")}
            />
            <SettingOption
              title="Security"
              Name="key-outline"
              Click={() => router.push("Auth/security")}
            />
          </View>

          <View className="mt-9">
            <SettingOption
              title="Language"
              Name="language-outline"
              Click={() => router.push("/language")}
            />
            <SettingOption
              title="Currency"
              Name="logo-bitcoin"
              Click={() => router.push("/currency")}
            />
            <SettingOption
              title="notification"
              Name="notifications-outline"
              Click={() => router.push("/(tabs)/screens/Add")}
            />
            <SettingOption
              title="Location"
              Name="location-outline"
              Click={() => router.push("/(tabs)/screens/Profile")}
            />
          </View>

          <View className="mt-9">
            <SettingOption
              title="Sign-out"
              Name="exit-outline"
              Click={Signout}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Story;
