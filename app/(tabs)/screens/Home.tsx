import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import Loader from "../../../components/Loader";
import ImageCard from "../../../components/ImageCard";
import Texts from "../../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../../API/api";

function Home() {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);

  const view = (id: any) => {
    router.push(`/Details/${id}`);
  };

  const list = async () => {
    setloader(true);
    const response = await api.get("/Home");
    try {
      const random = [...response.data].sort(() => Math.random() - 0.5);
      setData(random);
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    list();
  }, []);

  const Data = data.slice(0, 5);
  const subData = data.slice(0, 3);

  return (
    <View className="h-full px-6 bg-white">
      {loader && <Loader />}
      <SafeAreaView>
        <View className="flex flex-row items-center justify-between px-3 pt-8">
          <View>
            <Texts text="Your location" Style="" />
            <Texts text="Nigeria, Lagos" Style="text-xl font-bold" />
          </View>
          <View className="flex items-center flex-row gap-4">
            <Link href="/coupon">
              <Text>vouchar</Text>
            </Link>
            <Ionicons
              name="settings-outline"
              size={24}
              color="black"
              onPress={() => router.push("/Setting")}
            />
          </View>
        </View>

        <Pressable
          className="mx-auto my-9 border-2 border-gray-500 w-[350px] rounded-full px-5 flex flex-row items-center py-2"
          onPress={() => router.push("/all")}
        >
          <EvilIcons name="search" size={24} color="black" />
          <Text className="text-gray-300">search</Text>
        </Pressable>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 300 }}
          className="h-full"
        >
          <View>
            <View className="flex flex-row items-center justify-between px-6 mb-6">
              <Texts text="Popular Places" Style="text-2xl font-bold" />
              <Link href="/all">
                <Texts text="see all" Style="" />
              </Link>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{ paddingRight: 50 }}
              className="gap-20 flex flex-row py-1"
            >
              {Data.map((place) => (
                <TouchableOpacity
                  key={place.id}
                  onPress={() => view(place.id)}
                  className="px-3 ml-6  py-2 border border-gray-500 rounded-3xl w-96"
                >
                  <View className="relative">
                    <Texts
                      text={place.category}
                      Style="absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl"
                    />
                    <Image
                      source={{ uri: place.image }}
                      className="w-full h-96 rounded-xl"
                    />
                  </View>
                  <View className="flex flex-row items-center justify-between py-3">
                    <View>
                      <Texts text={place.name} Style="font-bold" />
                      <Texts text={place.location} Style="" />
                    </View>
                    <View className="flex flex-row">
                      <Texts text={place.rating} Style="" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View className="flex flex-row items-center justify-between px-6 mt-5 mb-6">
            <Texts text="Recommended" Style="text-2xl font-bold" />
            <Link href="/all">
              <Texts text="see all" Style="" />
            </Link>
          </View>
          <View className="gap-6">
            {subData.map((place) => (
              <Pressable
                key={place.id}
                onPress={() => view(place.id)}
                className="flex flex-row items-center justify-between px-2 py-1 border border-gray-500 rounded-3xl"
              >
                <View className="flex flex-row items-center gap-3 ml-1">
                  <ImageCard
                    image={{ uri: place.image }}
                    Style="w-14 rounded-xl h-14 my-2"
                  />
                  <View>
                    <Texts text={place.name} Style="text-md font-bold" />
                    <Texts
                      text={place.category}
                      Style="border border-gray-500 text-center rounded-full px-1 my-1"
                    />
                    <Texts text={place.location} Style="text-sm" />
                  </View>
                </View>

                <View className="flex flex-row">
                  <Texts text={place.rating} Style="" />
                </View>
              </Pressable>
            ))}
          </View>

          <View className="flex flex-row items-center justify-between px-6 mt-5 mb-6">
            <Texts text="Promo Partner" Style="text-2xl font-bold" />
            <Link href="/all">
              <Texts text="see all" Style="" />
            </Link>
          </View>
          <View className="relative flex flex-row items-center">
            <ImageCard
              image={require("../../../assets/images/image 5.png")}
              Style="rounded-l-3xl"
            />
            <View className="w-64 h-28 rounded-l-full -ml-12 bg-[#1A8EEA] rounded-tr-3xl px-10 py-2">
              <Texts
                text="Promo Partners"
                Style="text-2xl font-bold text-white"
              />
              <Texts
                text="with various banks, brands and tuorism bodies"
                Style="text-white"
              />
              <Texts text="Promo" Style="text-white text-sm" />
            </View>
          </View>

          <View className="py-10">
            <View className="flex flex-row items-center justify-between px-6 mb-6">
              <Texts
                text=" Nearest to your location"
                Style="text-2xl font-bold w-52"
              />
              <Link href="/all">
                <Texts text="see all" Style="" />
              </Link>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{ paddingRight: 50 }}
              className="gap-20 flex flex-row py-1"
            >
              {Data.map((place) => (
                <TouchableOpacity
                  key={place.id}
                  onPress={() => view(place.id)}
                  className="px-3 ml-6  py-2 border border-gray-500 rounded-3xl w-96"
                >
                  <View className="relative">
                    <Texts
                      text={place.category}
                      Style="absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl"
                    />
                    <Image
                      source={{ uri: place.image }}
                      className="w-full h-96 rounded-xl"
                    />
                  </View>
                  <View className="flex flex-row items-center justify-between py-3">
                    <View>
                      <Texts text={place.name} Style="font-bold" />
                      <Texts text={place.location} Style="" />
                    </View>
                    <View className="flex flex-row">
                      <Texts text={place.rating} Style="" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View>
            <View className="flex flex-row items-center justify-between px-6 mb-6">
              <Texts
                text="choose your location you want"
                Style="text-2xl w-52 font-bold"
              />
              <Link href="/all">
                <Texts text="see all" Style="" />
              </Link>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{ paddingRight: 50 }}
              className="gap-20 flex flex-row py-1"
            >
              {Data.map((place) => (
                <TouchableOpacity
                  key={place.id}
                  onPress={() => view(place.id)}
                  className="px-3 ml-6  py-2 border border-gray-500 rounded-3xl w-96"
                >
                  <View className="relative">
                    <Texts
                      text={place.category}
                      Style="absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl"
                    />
                    <Image
                      source={{ uri: place.image }}
                      className="w-full h-96 rounded-xl"
                    />
                  </View>
                  <View className="flex flex-row items-center justify-between py-3">
                    <View>
                      <Texts text={place.name} Style="font-bold" />
                      <Texts text={place.location} Style="" />
                    </View>
                    <View className="flex flex-row">
                      <Texts text={place.rating} Style="" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View className="py-6">
            <View className="flex flex-row items-center justify-between px-6 mb-6">
              <Texts text="Artist" Style="text-2xl w-52 font-bold" />
              <Link href="/all">
                <Texts text="see all" Style="" />
              </Link>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{ paddingRight: 50 }}
              className="gap-20 flex flex-row py-1"
            >
              {Data.map((place) => (
                <TouchableOpacity
                  key={place.id}
                  onPress={() => view(place.id)}
                  className="px-3 ml-6  py-2 border border-gray-500 rounded-3xl w-96"
                >
                  <View className="relative">
                    <Texts
                      text={place.category}
                      Style="absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl"
                    />
                    <Image
                      source={{ uri: place.image }}
                      className="w-full h-96 rounded-xl"
                    />
                  </View>
                  <View className="flex flex-row items-center justify-between py-3">
                    <View>
                      <Texts text={place.name} Style="font-bold" />
                      <Texts text={place.location} Style="" />
                    </View>
                    <View className="flex flex-row">
                      <Texts text={place.rating} Style="" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Home;
