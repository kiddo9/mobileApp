import { Stack, router } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Alert, BackHandler, Platform } from 'react-native'
import { Ionicons, FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons';

function layout() {

  function toggle(){
    router.push('/ChatOptions')
  }

  function Audio(){
    router.push('/AudioCall')
  }

  function Video(){
    router.back()
  }


  return (
    <Stack screenOptions={{headerBackVisible: false,}}>
        <Stack.Screen name='index' options={{ headerShown: false }}  />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='Intro/first' options={{ headerShown: false }} />
      <Stack.Screen name='Intro/Second' options={{ headerShown: false }} />
      <Stack.Screen name='Intro/third' options={{ headerShown: false }} />
      <Stack.Screen name='Auth/Login' options={{ headerShown: false }} />
      <Stack.Screen name='Auth/Signin' options={{ headerShown: false }} />
      <Stack.Screen name='Auth/Forgotten_password' options={{ headerShown: false }} />
      <Stack.Screen name='Auth/Token' options={{ headerShown: false }} />
      <Stack.Screen name='Auth/Password_reset' options={{ headerShown: false }} />
      <Stack.Screen name='UserChat' options={{ headerShown: true, headerRight: () => (
        <View style={{ position: 'relative', width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 40 }}>
          <View>
            <Text style={{ fontFamily: 'serif', fontSize: 20 }}>Kboy</Text>
          </View>
         <View style={{ flexDirection: 'row', gap: 20,}}>
           <FontAwesome5 name="video" size={24} color="black" onPress={Video} />
           <FontAwesome5 name="phone-alt" size={24} color="black" onPress={Audio} />
           <FontAwesome5 name="dot-circle" size={24} color="black" onPress={toggle} />
         </View>

         </View>
      ), headerTitle: '', headerStyle: {
        backgroundColor: '#635A8F',
        
      }, headerTitleStyle: {
        fontFamily: 'serif',
      } }} />
      <Stack.Screen name='UserProfile/[id]' options={{ headerShown: true, headerTransparent: true, headerStyle: {
        backgroundColor: 'transparent',
        
      },}} />
      <Stack.Screen name='Search' options={{ headerRight: () => (
         <View style={{ flexDirection: 'row', gap: 20, paddingRight: 10, width: '85%', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextInput placeholder='Search......' placeholderTextColor='white' style={{ fontFamily: 'serif', color: 'white' }} />
           <Ionicons name="search" size={24} color="white" />
         </View>
      ), headerTitle: '', headerStyle: {
        backgroundColor: '#635A8F',
        
      }, headerTitleStyle: {
        fontFamily: 'serif',
      } }} />

      <Stack.Screen name='Details/[id]' options={{ headerStyle: {
        backgroundColor: 'transparent',
        
      }, headerTransparent: true, headerTitle: '', }} />

      <Stack.Screen name='Groups' options={{ headerShown: false }} />
      <Stack.Screen name='Archive' options={{ headerShown: false }} />
      <Stack.Screen name='AudioCall' options={{ headerTitle: '', headerStyle: {
        backgroundColor: '#635A8F',    
      } }} />
      <Stack.Screen name='VideoCall' options={{ headerTitle: '', headerStyle: {
        backgroundColor: '#635A8F',    
      } }} />
      <Stack.Screen name='Post' options={{ headerTitle: '', headerStyle: {
        backgroundColor: '#635A8F',    
      } }} />
       <Stack.Screen name='postViwer' options={{ headerTitle: '', headerStyle: {
        backgroundColor: '#252525',    
      } }} />
      <Stack.Screen name='more' options={{ headerTitle: '', headerStyle: {
        backgroundColor: '#252525',    
      } }} />
    </Stack>
    
  )
}

export default layout
