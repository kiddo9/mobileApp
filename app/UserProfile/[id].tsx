import React, { useEffect } from 'react'
import { View, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FontAwesome, EvilIcons, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import Texts from '../../components/Text'
import Button from '../../components/Button';
import api from '../../API/api';
import { useState } from 'react';


function UserProfile() {
  const [user, setUser] = useState();

  const message = () => {
    Alert.alert('Say "HI"')
    router.push('/UserChat');
  }

  const {id} = useLocalSearchParams();

  const getUserDetails = async (id) => {
    
    try { 
      const response = await api.get(`/GetUser/${id}`);
      if(response.data.success == true){
        console.log(response.data.individual);
        setUser(response.data.individual)
      }else{
        console.log('wrong request');
      }
    } catch (error) {
      console.log('error occured', error);
    }
  }

  useEffect(() => {
       getUserDetails(id);
  }, [id])

 

  return (
    <View className='bg-[#1A8EEA] h-full'>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: 300 }} className='h-full bg-white rounded-t-[40px] mt-44 px-4 py-7'>
        <Texts text='Wishlist(Hiking)' Style='text-3xl font-bold' />
        <View className='mx-auto my-5 border-2 border-gray-500 w-[350px] rounded-full px-5 flex flex-row items-center py-2'>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput  placeholder='search' placeholderTextColor='black' className='' />
        </View>
        <View className='flex flex-row items-center justify-between'>
        <Texts text='Filter by: ' Style='text-lg font-bold' />
        <TouchableOpacity className='flex-row items-center px-3 py-1 border border-gray-500 rounded-2xl'>
          <Texts text='Days' Style='' />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity className='flex-row items-center px-3 py-1 border border-gray-500 rounded-2xl'>
          <Texts text='Type Trip' Style='' />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity className='flex-row items-center px-3 py-1 border border-gray-500 rounded-2xl'>
          <Texts text='Price' Style='' />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <View className='gap-6 mt-5'>

        <View className='px-3 py-4 border border-gray-500 rounded-3xl'>
          <View className='flex-row items-center justify-between pb-3 border-b-2 border-gray-500'>
            <View className='flex-row items-center gap-4'>
            <Ionicons name="bag-outline" size={24} color="black" />
            <View>
            <Texts text='Open Trip' Style='font-bold' />
            <Texts text='2 feb, 2024' Style='' />
            </View>
            </View>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
          </View>
          <View className='flex-row items-center justify-between pt-4'>
            <View className='flex-row gap-3'>
              <Image source={require('../../assets/images/Rectangle 4161.png')} className='w-28 h-28 rounded-2xl' />
              <View className=''>
              <Texts text='Semeru Mountain' Style='text-lg font-bold pb-2' />
              <View className='flex-row items-center justify-between w-20'>
                <Button title='+' extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' />
                <Texts text='2'  Style=''/>
                <Button title='-' extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' />
              </View>
              <Texts text='$45' Style='text-xl pt-2 font-bold' />
              </View>
            </View>
            <Button title='Booking' extrastyling='border border-gray-500 w-20 h-6 rounded-full' textstyling='text-center' />
          </View>
        </View>


        <View className='px-3 py-4 border border-gray-500 rounded-3xl'>
          <View className='flex-row items-center justify-between pb-3 border-b-2 border-gray-500'>
            <View className='flex-row items-center gap-4'>
            <Ionicons name="bag-outline" size={24} color="black" />
            <View>
            <Texts text='Open Trip' Style='font-bold' />
            <Texts text='2 feb, 2024' Style='' />
            </View>
            </View>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
          </View>
          <View className='flex-row items-center justify-between pt-4'>
            <View className='flex-row gap-3'>
              <Image source={require('../../assets/images/Rectangle 4161.png')} className='w-28 h-28 rounded-2xl' />
              <View className=''>
              <Texts text='Semeru Mountain' Style='text-lg font-bold pb-2' />
              <View className='flex-row items-center justify-between w-20'>
                <Button title='+' extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' />
                <Texts text='2'  Style=''/>
                <Button title='-' extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' />
              </View>
              <Texts text='$45' Style='text-xl pt-2 font-bold' />
              </View>
            </View>
            <Button title='Booking' extrastyling='border border-gray-500 w-20 h-6 rounded-full' textstyling='text-center' />
          </View>
        </View>

        <View className='px-3 py-4 border border-gray-500 rounded-3xl'>
          <View className='flex-row items-center justify-between pb-3 border-b-2 border-gray-500'>
            <View className='flex-row items-center gap-4'>
            <Ionicons name="bag-outline" size={24} color="black" />
            <View>
            <Texts text='Open Trip' Style='font-bold' />
            <Texts text='2 feb, 2024' Style='' />
            </View>
            </View>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
          </View>
          <View className='flex-row items-center justify-between pt-4'>
            <View className='flex-row gap-3'>
              <Image source={require('../../assets/images/Rectangle 4161.png')} className='w-28 h-28 rounded-2xl' />
              <View className=''>
              <Texts text='Semeru Mountain' Style='text-lg font-bold pb-2' />
              <View className='flex-row items-center justify-between w-20'>
                <Button title='+' extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' />
                <Texts text='2'  Style=''/>
                <Button title='-' extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' />
              </View>
              <Texts text='$45' Style='text-xl pt-2 font-bold' />
              </View>
            </View>
            <Button title='Booking' extrastyling='border border-gray-500 w-20 h-6 rounded-full' textstyling='text-center' />
          </View>
        </View>

        </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default UserProfile
