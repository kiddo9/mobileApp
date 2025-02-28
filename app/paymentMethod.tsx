import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Alert,
  TextInput,
  StyleSheet,
  Platform,
  Pressable,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import CustomBackButton from "../components/customBackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import usePayment from "../hooks/usePayment";
import PreLoader from "../components/preLoader";

function PaymentMethod() {
  const { paymentOptions, loader, message } = usePayment();
  const [selectPayment, setSelectPayment] = useState<number>();

  return (
    <SafeAreaView className="bg-[#1A8EEA] h-full">
      {loader && <PreLoader />}
      <CustomBackButton
        Color="white"
        ClassName={`text-white ${
          Platform.OS == "ios" ? "mt-1" : "mt-10"
        } mx-4 py-3 px-3`}
        Size={20}
        text={true}
      />

      <View className="bg-white w-full h-full mt-10 rounded-t-[4rem]">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 300 }}
          className="px-9 mt-10"
        >
          <Text className="text-2xl font-medium">Payment Method</Text>

          <View className="mt-10 flex flex-col gap-5">
            {paymentOptions.map((options, index) => (
              <Pressable
                onPress={() => setSelectPayment(options.id)}
                key={index}
                className="flex flex-row items-center justify-between border border-gray-500 px-3 py-3 rounded-xl"
              >
                <View className="flex flex-row items-center gap-5">
                  {options.number != null ? (
                    <Image
                      source={{ uri: options.image }}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <Image
                      source={require("../assets/images/image 8.png")}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <Text className="text-xl font-semibold">{options.name}</Text>
                </View>

                <View
                  className={`${
                    selectPayment == options.id ? "bg-blue-500" : ""
                  } w-4 h-4 border border-black rounded-full`}
                ></View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default PaymentMethod;
