import { Stack } from "expo-router";
import React from "react";

function layout() {
  return (
    <Stack screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Intro/first" options={{ headerShown: false }} />
      <Stack.Screen name="Intro/Second" options={{ headerShown: false }} />
      <Stack.Screen name="Intro/third" options={{ headerShown: false }} />
      <Stack.Screen name="Auth/Login" options={{ headerShown: false }} />
      <Stack.Screen name="Auth/Signin" options={{ headerShown: false }} />
      <Stack.Screen
        name="Auth/changePassword"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Auth/security" options={{ headerShown: false }} />
      <Stack.Screen
        name="Auth/Forgotten_password"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Auth/Token" options={{ headerShown: false }} />
      <Stack.Screen
        name="Auth/Password_reset"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="coupon" options={{ headerShown: false }} />
      <Stack.Screen
        name="UserProfile/[id]"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTitle: "",
        }}
      />
      <Stack.Screen name="supportCenter" options={{ headerShown: false }} />

      <Stack.Screen
        name="Details/[id]"
        options={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitle: "",
        }}
      />

      <Stack.Screen name="all" options={{ headerShown: false }} />
      <Stack.Screen name="payment1" options={{ headerShown: false }} />
      <Stack.Screen name="editProfile" options={{ headerShown: false }} />
      <Stack.Screen
        name="currency"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="language" options={{ headerShown: false }} />
      <Stack.Screen name="orders" options={{ headerShown: false }} />
      <Stack.Screen name="paymentEnd" options={{ headerShown: false }} />
      <Stack.Screen name="paymentMethod" options={{ headerShown: false }} />
      <Stack.Screen name="Setting" options={{ headerShown: false }} />
      <Stack.Screen name="Done" options={{ headerShown: false }} />
    </Stack>
  );
}

export default layout;
