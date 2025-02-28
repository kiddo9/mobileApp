import React, { useState } from "react";
import {
  Alert,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBackButton from "../../components/customBackButton";
import SettingOption from "../../components/SettingOption";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../../components/Button";
import { router } from "expo-router";
const changePassword = () => {
  const [open, setOpen] = useState<boolean>(false);

  const Value = {
    oldPassword: "",
    confirmOldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const handleUpdate = async () => {
    if (
      !Value.oldPassword ||
      !Value.confirmOldPassword ||
      !Value.newPassword ||
      !Value.confirmNewPassword
    ) {
      Alert.alert("enter passwords");
      return;
    }
    if (Value.oldPassword != Value.confirmOldPassword) {
      Alert.alert("confirm old passowrd");
      return;
    }

    if (Value.newPassword != Value.confirmNewPassword) {
      Alert.alert("confirm New passowrd");
      return;
    }

    if (Value.newPassword == Value.oldPassword) {
      Alert.alert("New password show be different from your password");
      return;
    }

    if (Value.newPassword.length <= 8 || Value.oldPassword.length <= 8) {
      Alert.alert("password should be at least 8 characters");
      return;
    }

    setOpen(false);
    alert("password changed");
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
      <View className="bg-white mt-10 rounded-t-[40px] h-full px-7 py-9">
        {open == false && (
          <SettingOption
            title="change-account-password"
            Name="lock-closed-outline"
            Click={() => {
              setOpen(true);
            }}
          />
        )}

        {open == true && (
          <TouchableOpacity
            onPress={() => {
              setOpen(false);
            }}
          >
            <AntDesign
              name="closecircle"
              size={34}
              color="red"
              className=" left-[90%] mb-10"
            />
          </TouchableOpacity>
        )}

        <View className={`${open == true ? "block" : "hidden"} `}>
          <TextInput
            placeholder="current password"
            className="w-full py-4 rounded-xl my-3 border border-gray-400 px-3"
            onChangeText={(text) => (Value.oldPassword = text)}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="confirm password"
            className="w-full py-4 rounded-xl my-3 border border-gray-400 px-3"
            onChangeText={(text) => (Value.confirmOldPassword = text)}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="New password"
            className="w-full py-4 rounded-xl my-3 border border-gray-400 px-3"
            onChangeText={(text) => (Value.newPassword = text)}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="re-new password"
            className="w-full py-4 rounded-xl my-3 border border-gray-400 px-3"
            onChangeText={(text) => (Value.confirmNewPassword = text)}
            secureTextEntry={true}
          />

          <Button
            title="Update"
            extrastyling="w-full bg-black mx-auto mt-10 py-5 rounded-xl"
            textstyling="text-white text-center font-semibold"
            handles={() => handleUpdate()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default changePassword;
