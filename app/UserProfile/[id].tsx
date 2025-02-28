import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  Text,
} from "react-native";
import {
  FontAwesome,
  EvilIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import Texts from "../../components/Text";
import Button from "../../components/Button";
import api from "../../API/api";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UserProfile() {
  const [Price, setPrice] = useState(0);
  const [Count, setCount] = useState(1);
  // const [option, setOption] = useState(false);

  const filterTitle = ["Days", "Type Trip", "Price"];

  const [TripCard, setTripCard] = useState<any>({});
  const [collection, setCollection] = useState([]);

  const { id } = useLocalSearchParams();

  const getUserDetails = async () => {
    try {
      const wishlist = await AsyncStorage.getItem("wishlistCollections");
      if (wishlist) {
        setCollection(JSON.parse(wishlist));
      }
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  // 🔹 Run `getUserDetails()` on mount
  useEffect(() => {
    getUserDetails();
  }, []);

  // 🔹 Run `getdata()` whenever `collection` updates
  useEffect(() => {
    if (collection.length > 0) {
      const data = collection.find((dat) => dat.name == id);
      setTripCard(data || {}); // Ensure it doesn't break if no match is found
    }
  }, [collection, id]); // ✅ Add dependencies to re-run when `collection` or `id` changes

  const deletePlace = async (index: any) => {
    [...TripCard.items, TripCard.items.splice(index, 1)];

    setTripCard((prev: any) => {
      const items = {
        ...prev,
        items: TripCard.items,
      };

      return items;
    });
    await AsyncStorage.setItem(
      "wishlistCollections",
      JSON.stringify(collection)
    );

    alert("Item deleted");
  };

  const customConfirmation = (Value: any) => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete place from wish list",
      [
        {
          text: "NO",
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => deletePlace(Value),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View className="bg-[#1A8EEA] h-full">
      <SafeAreaView>
        <TouchableOpacity
          className={`text-white ${
            Platform.OS == "ios" ? "mt-1" : "mt-10"
          } mx-4 py-3 px-3 flex flex-row items-center gap-2`}
          onPress={() => router.push("/(tabs)/screens/Chats")}
        >
          <MaterialIcons name="arrow-back-ios" size={20} color={"white"} />
          <Text className="text-white">Back</Text>
        </TouchableOpacity>
        <View
          className={`${
            Platform.OS == "ios" ? "mt-2" : "mt-10"
          } h-[100%] bg-white rounded-t-[40px]`}
        >
          <Texts
            text={`Wishlist(${TripCard.name})`}
            Style="text-xl font-semibold pt-10 px-7 py-7"
          />
          <View
            className={`mx-auto my-7 border border-gray-500 w-[27rem] rounded-3xl px-7 flex flex-row items-center ${
              Platform.OS == "ios" ? "py-4" : "py-1"
            }`}
          >
            <EvilIcons name="search" size={20} color="black" />
            <TextInput
              placeholder="search wishlist"
              placeholderTextColor="gray"
              className="text-sm"
            />
          </View>

          <View className="flex flex-row items-center pb-7 gap-1 px-7 py-7 pt-3">
            <Texts text="Filter by " Style="text-md font-semibold" />

            <View
              className={`${
                Platform.OS == "ios" ? "gap-4" : "gap-3"
              } flex flex-row`}
            >
              {filterTitle.map((title, index) => (
                <TouchableOpacity
                  key={index}
                  className={`flex-row items-center ${
                    Platform.OS == "ios" ? "px-4" : "px-3"
                  } py-3 justify-center border gap-1 border-gray-500 rounded-xl`}
                >
                  <Texts text={title} Style="" />
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
            <View className="gap-6 mt-5 px-6">
              {TripCard.items == 0 && (
                <Text className="text-center text-xl font-semibold my-28">
                  wishlist is empty
                </Text>
              )}
              {TripCard.items &&
                TripCard.items.map((itemString: string, index: number) => {
                  const card = JSON.parse(itemString); // Parse each string to an object

                  return (
                    <View
                      key={index}
                      className="px-3 py-2 border border-gray-500 rounded-3xl"
                    >
                      <View className="flex-row py-2 items-center justify-between">
                        <View className="flex-row items-center gap-4">
                          <Ionicons
                            name="bag-outline"
                            size={24}
                            color="black"
                          />
                          <View>
                            <Texts text={card.type} Style="font-semibold" />
                            <Texts text="2 feb, 2024" Style="" />
                          </View>
                        </View>
                        <TouchableOpacity
                          onPress={() => customConfirmation(index)}
                        >
                          <FontAwesome name="trash-o" size={24} color="black" />
                        </TouchableOpacity>
                      </View>

                      <View className="h-px w-full mt-2 bg-gray-400"></View>

                      <View className="flex-row items-center justify-between mt-3 px-2 py-4">
                        <View className="flex-row gap-3">
                          <Image
                            source={{ uri: card.image }}
                            className="w-28 h-28 rounded-2xl"
                          />
                          <View className="flex flex-col gap-2">
                            <Texts
                              text={card.name}
                              Style="text-lg w-40 font-semibold pb-2"
                            />
                            <View className="flex-row items-center justify-between w-20">
                              <Button
                                title="-"
                                handles={() => {
                                  if (Count > 1) {
                                    setCount((prev) => {
                                      const newCount = prev - 1;
                                      setPrice(newCount * card.price);
                                      return newCount;
                                    });
                                  }
                                }}
                                extrastyling="border border-gray-500 rounded-full w-6 h-6"
                                textstyling="text-center"
                              />
                              <Texts text={Count} Style="text-lg" />
                              <Button
                                title="+"
                                handles={() => {
                                  setCount((prev) => {
                                    if (card.id) {
                                      const newCount = prev + 1;
                                      setPrice(card.price * newCount);
                                      return newCount;
                                    }
                                  });
                                }}
                                extrastyling="border border-gray-500 rounded-full w-6 h-6"
                                textstyling="text-center"
                              />
                            </View>
                            <Texts text={Price} Style="text-xl font-semibold" />
                          </View>
                        </View>
                        <Button
                          title="Booking"
                          extrastyling={`border-2 border-black w-32 h-10 rounded-full mt-20 flex justify-center items-center ${
                            Platform.OS == "android" && "-ml-7"
                          }`}
                          textstyling="text-center"
                          handles={() => router.push(`/Details/${card.id}`)}
                        />
                      </View>
                    </View>
                  );
                })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default UserProfile;
