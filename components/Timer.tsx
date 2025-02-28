import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import usePlace from "../hooks/usePlace";

const Timer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [data, setData] = useState<any>({});

  async function someething() {
    const booking = await AsyncStorage.getItem("bookingData");
    const data = JSON.parse(booking);

    setData(data);
  }

  useEffect(() => {
    let intervalId;
    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      alert("time up transaction treminated");
      return router.push(`/(tabs)/screens/Home`);
    }

    someething();

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const { place, price } = usePlace(data.placeId);

  const timer = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const secondAfterhours = Math.floor(seconds % 3600);
    const minutes = Math.floor(secondAfterhours / 60);
    const second = Math.floor(secondAfterhours % 60);

    return (
      <View className="flex flex-row gap-1 items-center">
        <Text className="px-2 py-2 bg-red-700 rounded-md text-white">
          {hours.toString().padStart(2, "0")}
        </Text>
        <Text className="text-red-700">:</Text>
        <Text className="px-2 py-2 bg-red-700 rounded-md text-white">
          {minutes.toString().padStart(2, "0")}
        </Text>
        <Text className="text-red-700">:</Text>
        <Text className="px-2 py-2 bg-red-700 rounded-md text-white">
          {second.toString().padStart(2, "0")}
        </Text>
      </View>
    );
  };

  return (
    <View className=" mx-10 mt-3 border border-gray-400 px-4 py-6 rounded-3xl">
      <View className="flex flex-row justify-between">
        <Text>Pay soon</Text>

        {timer(timeLeft)}
      </View>

      <Pressable
        onPress={() => setOpen(!open)}
        className={`${
          open == true ? "h-96 " : ""
        } border border-gray-500 py-2 px-3 rounded-lg mt-5`}
      >
        {open == true && (
          <View className="-z-40">
            <Image source={{ uri: place.image }} className="w-full h-64" />
            <View className="flex-row justify-between flex-wrap py-3">
              <Text className="text-lg font-semibold">
                price: ${price}/person
              </Text>
              <Text className="text-lg font-semibold">
                Total: ${data.price}/{data.persons}-
                {data.persons > 1 ? "persons" : "person"}
              </Text>
            </View>
          </View>
        )}

        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-col gap-1">
            <Text className="text-xl font-semibold">{place.name}</Text>
            <Text>15 - 20 Dec 2023</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color="black"
            className={`${
              open == true ? "rotate-180" : ""
            } transition duration-200 ease-in-out`}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Timer;
