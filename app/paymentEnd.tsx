import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import PaymentStage from "../components/paymentStage";
import Button from "../components/Button";
import Timer from "../components/Timer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../API/api";
import { router } from "expo-router";

const postViwer = () => {
  const [paymentDetails, setPaymentDetails] = useState<any>({});
  const [PaymentMethod, setPaymentMethod] = useState<any>({});
  const [cancelTransaction, setCancelTransaction] = useState(false);
  const [status, setStatus] = useState(false);
  const [statusConfirmation, setStatusConfirmation] = useState<any>("");

  const Status = [
    { id: 1, status: "failed" },
    { id: 2, status: "success" },
  ];

  const getPaymentDetails = async () => {
    const PaymentDetails = await AsyncStorage.getItem("bookingData");
    const ParesData = JSON.parse(PaymentDetails);

    setPaymentDetails(ParesData);
    console.log(ParesData);
  };

  const getPaymentMethod = async (id: any) => {
    try {
      const paymentMethod = await api.get(`/paymentMethod/${id}`);
      const response = paymentMethod.data;

      setPaymentMethod(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPaymentDetails();
    getPaymentMethod(paymentDetails.paymentMethodId);
  }, [paymentDetails.paymentMethodId]);

  async function storeStatus(status: any) {
    await AsyncStorage.setItem("paymentStatus", status);
  }

  return (
    <SafeAreaView>
      <View className="w-full px-14 py-10">
        <View className="flex flex-row items-center py-6 gap-5">
          <TouchableOpacity
            onPress={() => setCancelTransaction(true)}
            className="bg-red-700 px-2 py-2 rounded-lg"
          >
            <Text className="text-white">cancel</Text>
          </TouchableOpacity>
          <View>
            <Text className="text-2xl font-semibold">Continue payment</Text>
            <Text className="text-sm">Order ID: {paymentDetails.orderId}</Text>
          </View>
        </View>

        <PaymentStage stage={2} Style={"ml-1"} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
        <Timer />

        <View className=" mx-10 mt-10 border border-gray-400 px-4 py-6 rounded-3xl">
          <Text className="text-lg font-medium">
            {PaymentMethod.number != null
              ? "Transfer to"
              : "Center card details"}
          </Text>
          {PaymentMethod.number != null ? (
            <View className="px-3 py-5 border border-gray-400 mt-4 rounded-xl">
              <View className="flex flex-row gap-5 items-center mb-4">
                <Image
                  source={{ uri: PaymentMethod.image }}
                  className="w-10 h-10 rounded-full"
                />
                <Text className="text-xl font-semibold">
                  {PaymentMethod.name}
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <Text>{PaymentMethod.number}</Text>
                <Ionicons name="copy-outline" size={24} color="black" />
              </View>
            </View>
          ) : (
            <View className="mt-2">
              <TextInput
                placeholder="Card pan"
                className="border py-4 rounded-xl px-3 border-gray-400"
              />

              <View className="flex flex-row justify-between mt-4">
                <TextInput
                  placeholder="09/26"
                  className="border py-4 px-3 rounded-xl w-40 border-gray-400"
                />
                <TextInput
                  placeholder="cvv"
                  className="border py-4 px-3 rounded-xl w-40 border-gray-400"
                />
              </View>
            </View>
          )}

          <Text className="text-lg font-medium py-2">Payment Total</Text>
          <Text className="border border-gray-400 py-4 text-xl font-semibold rounded-xl mt-2 mb-6 px-4">
            ${paymentDetails.price}
          </Text>
        </View>

        <View className="flex flex-row items-center border-t border-gray-400 border-b gap-7 justify-between px-10 py-6 mt-14">
          <View className="">
            <Text className="text-3xl font-medium">
              ${paymentDetails.price}
            </Text>
            <Text className="text-sm">will get +1200 points</Text>
          </View>
          <Button
            title={PaymentMethod.number != null ? "Paid" : "Continue"}
            extrastyling="py-5 bg-black w-56 rounded-full"
            handles={() => setStatus(true)}
            textstyling="text-center text-white font-bold"
          />
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={cancelTransaction}
      >
        <View className="w-full z-[10000000000] h-full bg-[#000000a0]">
          <View className="bg-white absolute px-4 py-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 h-60 rounded-xl">
            <Text className="text-2xl font-bold text-center mt-5">
              Are you sure you want to cancel Transaction?
            </Text>

            <View className="flex-row justify-between absolute bottom-10 left-0 right-0 px-14">
              <TouchableOpacity onPress={() => setCancelTransaction(false)}>
                <Text className="text-3xl font-bold">No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCancelTransaction(false);
                  setStatusConfirmation("cancelled");
                  storeStatus("cancelled");
                  router.push(`/Done`);
                }}
              >
                <Text className="text-3xl font-bold">Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={true} visible={status}>
        <View className="w-full z-[10000000000] h-full bg-[#000000a0]">
          <View className="bg-white absolute px-4 py-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 h-60 rounded-xl">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-2xl font-medium text-center mt-5">
                select status
              </Text>

              <Ionicons
                name="close-sharp"
                size={24}
                color="black"
                onPress={() => {
                  setStatus(false);
                  setStatusConfirmation("");
                }}
              />
            </View>

            <View className="flex-col gap-4 absolute bottom-10 left-0 right-0 px-4">
              {Status.map((stats, index) => (
                <Pressable
                  key={index}
                  className="flex-row justify-between border-b border-b-black pb-5"
                  onPress={() => {
                    setStatusConfirmation(stats.status);
                    setStatus(false);
                    storeStatus(stats.status);
                    router.push("/Done");
                  }}
                >
                  <Text className="text-xl font-bold">{stats.status}</Text>
                  <View
                    className={`w-5 h-5 border border-black rounded-full ${
                      statusConfirmation == stats.status && "bg-blue-500"
                    }`}
                  ></View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default postViwer;
