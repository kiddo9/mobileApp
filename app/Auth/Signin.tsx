import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import ImageCard from "../../components/ImageCard";
import Texts from "../../components/Text";
import { Link, router } from "expo-router";
import api from "../../API/api";

function Signin() {
  const [Show, SetShow] = useState(false);
  const [Cshow, SetCshow] = useState(false);

  function toggle() {
    SetShow(!Show);
  }

  function Toggle() {
    SetCshow(!Cshow);
  }

  const defaultValue = {
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    cpwd: "",
  };

  const handleSubmission = async () => {
    if (
      !defaultValue.firstName ||
      !defaultValue.LastName ||
      !defaultValue.email ||
      !defaultValue.password ||
      !defaultValue.cpwd
    ) {
      Alert.alert("All fields are required");
      return;
    }

    if (defaultValue.password !== defaultValue.cpwd) {
      Alert.alert("Password does not match");
      return;
    }

    if (defaultValue.password.length < 6) {
      Alert.alert("Password must be at least 6 characters");
      return;
    }

    if (
      typeof defaultValue.email !== "string" ||
      defaultValue.email.indexOf("@") == -1 ||
      defaultValue.email.lastIndexOf(".") == -1 ||
      defaultValue.email.lastIndexOf(".") < defaultValue.email.indexOf("@")
    ) {
      Alert.alert("Invalid email address");
      return;
    }

    const name = defaultValue.email.substring(
      0,
      defaultValue.email.indexOf("@")
    );
    const domain = defaultValue.email.substring(
      defaultValue.email.indexOf("@") + 1,
      defaultValue.email.lastIndexOf(".")
    );

    const tld = defaultValue.email.substring(
      defaultValue.email.lastIndexOf(".") + 1
    );

    if (!name || !domain || !tld) {
      Alert.alert("Invalid email address");
      return;
    }

    try {
      const response = await api.post("/signin", defaultValue);
      if (response.data.success == true) {
        Alert.alert("You have successfully signed up to pTravels");
        router.push("/Auth/Login");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView className="bg-[#1A8EEA] h-full">
      <ImageCard image={require("../../assets/images/Hiking.png")} Style="" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className={`absolute bottom-0 left-0 right-0 h-full bg-white rounded-t-[38px] top-44 px-6 py-12 ${
          Platform.OS == "android" && "top-36"
        }`}
      >
        <Texts text="Sign Up" Style="text-2xl font-bold" />
        <Texts text="Create an account to get started" Style="mt-2  mb-8" />

        <TextInput
          onChangeText={(text) => (defaultValue.firstName = text)}
          onBlur={() => defaultValue.firstName}
          placeholder="First Name"
          className={`px-3 py-4 border-2 border-gray-500 rounded-3xl ${
            Platform.OS == "android" && "py-2"
          }`}
        />

        <TextInput
          onChangeText={(text) => (defaultValue.LastName = text)}
          onBlur={() => defaultValue.LastName}
          placeholder="last Name"
          className={`px-3 mt-4 py-4 border-2 border-gray-500 rounded-3xl ${
            Platform.OS == "android" && "py-2"
          }`}
        />

        <TextInput
          placeholder="Email / Phone number"
          onChangeText={(text) => (defaultValue.email = text)}
          onBlur={() => defaultValue.email}
          className={`px-3 py-4 border-2 border-gray-500 mt-4 rounded-3xl ${
            Platform.OS == "android" && "py-2"
          }`}
        />

        <View
          className={`flex flex-row px-3 mt-4 border-2 border-gray-500 rounded-3xl ${
            Platform.OS == "android" ? "py-2" : "py-4"
          }`}
        >
          <TextInput
            secureTextEntry={!Show}
            placeholder="Password"
            onChangeText={(text) => {
              defaultValue.password = text;
            }}
            onBlur={() => defaultValue.password}
            className={`${Platform.OS == "android" ? "w-80" : "w-96"}`}
          />
          <TouchableOpacity onPress={toggle}>
            <Ionicons name={Show ? "eye" : "eye-off"} size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View
          className={`flex flex-row items-center px-3 mt-4 border-2 border-gray-500 rounded-3xl ${
            Platform.OS == "android" ? "py-2" : "py-4"
          }`}
        >
          <TextInput
            secureTextEntry={!Cshow}
            placeholder="Confirm Password"
            onChangeText={(text) => {
              defaultValue.cpwd = text;
            }}
            onBlur={() => defaultValue.cpwd}
            className={`${Platform.OS == "android" ? "w-80" : "w-96"}`}
          />
          <TouchableOpacity onPress={Toggle}>
            <Ionicons
              name={Cshow ? "eye" : "eye-off"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <Button
          title="Sign Up"
          handles={handleSubmission}
          extrastyling="bg-[#1E1E1E] p-4 rounded-2xl mt-10"
          textstyling="text-white text-center font-bold"
        />

        {/* <Formik
          initialValues={defaultValue}
          validationSchema={FormValidationSchema}
          onSubmit={handleSubmission}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
         
              <View className="flex flex-col mt-2">
                <View>
                  
                </View>
                <View>
              </View>
              

              
              
           
          )}
        </Formik> */}

        <View className="flex flex-row items-center justify-center mt-5">
          <View className="w-32 h-px bg-[#1E1E1E]"></View>
          <Texts text="OR" Style="px-2" />
          <View className="w-32 h-px bg-[#1E1E1E]"></View>
        </View>

        <View className="flex flex-row justify-center gap-8">
          <View className="border w-16 rounded-lg flex justify-center items-center py-2 px-2">
            <Image source={require("../../assets/images/google.png")} />
          </View>

          <View className="border w-16 rounded-lg flex justify-center items-center py-2 px-2">
            <Ionicons name="logo-twitter" size={20} color={"black"} />
          </View>
        </View>

        <View className="flex flex-row justify-center gap-3 mt-6 items-center">
          <Text className="text-gray-500">Have an account?</Text>
          <Link href="/Auth/Login">
            <Text className="font-bold">Sign In</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signin;
