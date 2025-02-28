import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Texts from '../../../components/Text'
import ImageCard from '../../../components/ImageCard'
import api from '../../../API/api';
import axios from 'axios';
import CustomBackButton from '../../../components/customBackButton';

function Add() {

  const [user, setUser] = useState([]);
  const ImG = require('../../../assets/images/Ellipse 223.png');

  const getUsers = async() => {
     const response = await api.get('/AllUsers')
    //const response = await axios.get('http://192.168.251.237:3000/AllUsers')

    //console.log(response.data.users);
    try {
      if (response.data.success == true) {
        setUser(response.data.users)
        console.log(response.data.users);
      }else{
        console.log("no usrs found");
      }
    } catch (error) {
      console.log('error occured :' ,error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])


  return (
    <View className='h-full bg-[#1A8EEA]'>
      <SafeAreaView>
      <CustomBackButton Color='white' ClassName={`text-white ${Platform.OS == 'ios' ? 'mt-1' : 'mt-10'} mx-4 py-3 px-3`} Size={20} text={true} />
        <ScrollView contentContainerStyle={{ paddingBottom: 300 }} className=' bg-white h-full mt-28  rounded-t-[50px] px-7 py-7'>

        <View className='mt-4'>
        <Texts text='Today' Style='text-3xl font-bold' /> 
          <View className='px-3 py-3 border-2 border-gray-500 rounded-3xl'>
           <View className='flex-row items-center justify-between'>
            <View className='flex flex-row items-center gap-3'>
            <MaterialCommunityIcons name="infinity" size={24} color="black" />
            <Texts text='Promo' Style='mt-2 ml-3' />
            </View>
            <Texts text='19 june, 2024' Style='' />
           </View>
           <Texts text='Discount 20% from GOPAY!' Style='text-2xl font-bold mt-2 mb-2' />
           <Texts text='By using GOPAY payment during your transaction, you get up to 20% discount!' Style='mb-4' />
           <ImageCard image={require('../../../assets/images/Frame 92973273.png')}  Style='' />
          </View>


          <Texts text='Yesterday' Style='text-3xl font-bold mt-9 mb-4' /> 
          <View className='px-3 py-3 border-2 border-gray-500 rounded-3xl'>
           <View className='flex-row items-center justify-between'>
            <View className='flex flex-row items-center gap-3'>
            <MaterialCommunityIcons name="infinity" size={24} color="black" />
            <Texts text='Promo' Style='mt-2 ml-3' />
            </View>
            <Texts text='19 june, 2024' Style='' />
           </View>
           <Texts text='Discount 20% from GOPAY!' Style='text-2xl font-bold mt-2 mb-2' />
           <Texts text='By using GOPAY payment during your transaction, you get up to 20% discount!' Style='mb-4' />
           <ImageCard image={require('../../../assets/images/Frame 92973273.png')} Style='' />
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Add
