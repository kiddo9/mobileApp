import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link, router, useFocusEffect, useNavigation } from "expo-router";
import ImageCard from "../../../components/ImageCard";
import Texts from "../../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chats = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [Delete, setDelete] = useState<boolean>(false);
  const [collectionName, setCollectionName] = useState<string>("");
  const [wishlist, setWishList] = useState([]);
  let [Value, setValue] = useState<string>("");

  async function collection() {
    const collections = await AsyncStorage.getItem("wishlistCollections");
    try {
      if (collections) {
        setWishList(JSON.parse(collections));
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    collection();
    console.log("runned");
  }, []);

  function createCollection() {
    if (!collectionName || collectionName.trim() === "") {
      alert("Collection name cannot be empty!");
      return;
    }

    setWishList((prevwishlist) => {
      const updatedWishlist = [
        ...prevwishlist,
        { name: collectionName, items: [] }, // Store collection as an object
      ];
      return updatedWishlist; // Ensure we return the updated state
    });

    setCreate(false);
  }

  useEffect(() => {
    if (wishlist.length >= 0) {
      store();
    }
  }, [wishlist]); // Runs whenever wishlist changes

  async function store() {
    try {
      await AsyncStorage.setItem(
        "wishlistCollections",
        JSON.stringify(wishlist)
      );
    } catch (error) {
      console.error("Error saving wishlist:", error);
    }
  }

  return (
    <SafeAreaView className=" bg-[#1A8EEA]">
      <View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 300 }}
          className=" bg-white h-full mt-28  rounded-t-[50px] px-7 py-7"
        >
          <Texts text="Wishlist" Style="text-3xl font-bold" />
          {wishlist.length == 0 && (
            <Texts
              text="wishlist is empty"
              Style="text-xl text-center my-20 font-medium"
            />
          )}

          <View className="flex flex-row flex-wrap gap-x-4 gap-y-8 mt-3">
            {wishlist.map((list, index) => {
              const items = Array.isArray(list.items)
                ? list.items.map((item: any) =>
                    typeof item == "string" ? JSON.parse(item) : item
                  )
                : [];

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => router.push(`UserProfile/${list.name}`)}
                  className={`${
                    Platform.OS === "ios" ? "w-[180px]" : "w-[163px]"
                  }`}
                  onLongPress={() => {
                    setDelete(true);
                    setValue(list.name);
                  }}
                >
                  <View
                    className={`${
                      items.length == 0 && "h-44"
                    } flex flex-row flex-wrap border border-gray-500 rounded-md`}
                  >
                    {items.slice(0, 4).map((item: any, idx: any) => (
                      <ImageCard
                        key={item.id || idx}
                        image={{ uri: item.image }}
                        Style="w-20 h-20 flex flex-grow"
                      />
                    ))}
                  </View>
                  <Texts text={list.name} Style="font-bold text-xl" />
                  <Text className="text-md">{items?.length || 0} places</Text>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              onPress={() => setCreate(true)}
              className={`${
                Platform.OS == "ios" ? "w-[180px]" : "w-[163px]"
              } border border-dashed border-gray-500 h-[163px] relative rounded-lg`}
            >
              <View className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <Ionicons name="add" size={24} color="black" />
              </View>
              <Texts
                text="New Collections wishl"
                Style="absolute top-28 text-center left-3"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Modal animationType="slide" transparent={true} visible={create}>
        <View className="w-full z-[10000000000] h-full bg-[#000000a0]">
          <View className="bg-[#fff] absolute px-4 py-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 h-60 rounded-xl">
            <AntDesign
              name="close"
              className="absolute right-4 top-4"
              size={24}
              color="black"
              onPress={() => setCreate(false)}
            />
            <TextInput
              placeholder="enter collection name"
              className="border py-4 px-3 mt-14 border-gray-400 rounded-xl"
              onChangeText={(text) => setCollectionName(text)}
            />
            <Button
              title="Create collection"
              extrastyling="w-80 mx-auto bg-black py-4 mt-5 rounded-xl"
              textstyling="text-white text-center"
              handles={createCollection}
            />
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={true} visible={Delete}>
        <View className="w-full z-[10000000000] h-full bg-[#000000a0]">
          <View className="bg-[#fff] absolute px-4 py-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 h-44 rounded-xl">
            <AntDesign
              name="close"
              className="absolute right-4 top-4"
              size={24}
              color="black"
              onPress={() => {
                setDelete(false);
                setValue("");
              }}
            />

            <Pressable className="mt-12 flex flex-row px-2 gap-5 mb-4 items-center">
              <FontAwesome name="edit" size={24} color="black" />
              <Text>edit colloction name</Text>
            </Pressable>
            <Pressable
              onPress={async () => {
                const findName = wishlist.findIndex(
                  (list: any) =>
                    Value.trim().toLowerCase() == list.name.trim().toLowerCase()
                );

                if (findName == -1) {
                  setDelete(false);
                  alert("unable to delete collection. collection not found");
                  return;
                }
                wishlist.splice(findName, 1);
                Alert.alert(`${Value} wishlist delete`);

                await AsyncStorage.setItem(
                  "wishlistCollections",
                  JSON.stringify(wishlist)
                );

                setDelete(false);
              }}
              className="mt-4 flex flex-row px-2 gap-5 items-center"
            >
              <FontAwesome name="trash-o" size={25} color="red" />
              <Text>delete colloction</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Chats;
