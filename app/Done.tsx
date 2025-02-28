import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentStage from "../components/paymentStage";
import { AntDesign } from "@expo/vector-icons";
import Button from "../components/Button";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Done() {
  const [status, setStatus] = useState<string>("");
  useEffect(() => {
    async function status() {
      const status = await AsyncStorage.getItem("paymentStatus");
      setStatus(status);
    }
    status();
  }, []);
  return (
    <SafeAreaView className="w-full h-full px-3">
      <View className="w-full px-11 py-10 shadow-2xl">
        <View className="flex flex-row items-center py-6 gap-5">
          <View>
            <Text className="text-2xl font-semibold">
              Payment{" "}
              {status == "failed"
                ? "Failed"
                : status == "success"
                ? "Successful"
                : "Cancelled"}
            </Text>
            <Text className="text-sm">Order ID: 266567878999</Text>
          </View>
        </View>

        <PaymentStage stage={3} Style={"ml-1"} />
      </View>

      {(status == "failed" || status == "cancelled") && (
        <View className="w-full rounded-3xl bg-red-500 h-[45rem]">
          <AntDesign
            name="close"
            className="mx-auto mt-20"
            size={100}
            color="white"
          />
          <Text className="text-white text-5xl text-center font-semibold mt-8">
            Payment {status == "failed" ? "Failed" : "was cancelled"}
          </Text>
          <Text className="text-center px-20 text-lg text-white">
            Payment failed due to the estimated time running out. Please return
            to Home.
          </Text>

          <Button
            title="Return Home"
            handles={() => router.push("/(tabs)/screens/Home")}
            extrastyling="border-2 border-white py-4 rounded-xl px-4 mx-14 mt-44"
            textstyling="text-center text-xl font-semibold text-white"
          />
        </View>
      )}

      {status == "success" && (
        <View className={`w-full rounded-3xl bg-green-500 h-[45rem]`}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios11/512/40C057/ok.png",
            }}
            className="w-32 h-32 bg-white rounded-full border-none mx-auto mt-20"
          />
          <Text className="text-white text-5xl text-center font-semibold mt-8">
            payment Successful
          </Text>
          <Text className="text-center px-20 text-lg text-white">
            payment was Successful. you can get recipt by clicking Get recipt to
            generate. check the orders page to see your order
          </Text>

          <Button
            title="Go Home"
            handles={() => router.push("/(tabs)/screens/Home")}
            extrastyling="border-2 border-white py-4 rounded-xl px-4 mx-14 mt-44"
            textstyling="text-center text-xl font-semibold text-white"
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default Done;
