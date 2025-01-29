import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Texts from '../../../components/Text'
import ImageCard from '../../../components/ImageCard'
import api from '../../../API/api';
import axios from 'axios';

function Add() {

  const Users = [
    {
      id: 1,
      image: require('../../../assets/images/Ellipse 224.png'),
      name: 'Valentine',
      statue: 'ok',
      message: 'How are you',
      unread: '9',
      read: true
    },
    {
      id: 2,
      image: require('../../../assets/images/Ellipse 221.png'),
      name: 'Kboy',
      statue: 'ok',
      message: 'How are you',
      unread: '4',
      read: true
    },
    {
      id: 3,
      image: require('../../../assets/images/Ellipse 223.png'),
      name: 'Kerian',
      statue: 'ok',
      message: 'How are you',
      unread: '6',
      read: true
    },
    {
      id: 4,
      image: require('../../../assets/images/Ellipse 222.png'),
      name: 'Preye',
      statue: 'ok',
      message: 'How are you',
      unread: '12',
      read: true
    },
    {
      id: 5,
      image: require('../../../assets/images/Ellipse 224.png'),
      name: 'Gare',
      statue: 'ok',
      message: 'How are you',
      unread: '1',
      read: true
    },
    {
      id: 6,
      image: require('../../../assets/images/Ellipse 221.png'),
      name: 'Femi',
      statue: 'ok',
      message: 'How are you',
      unread: '10',
      read: true
    },
    {
      id: 7,
      image: require('../../../assets/images/Ellipse 223.png'),
      name: 'Me',
      statue: 'ok',
      message: 'How are you',
      unread: '7',
      read: true
    },
  ]

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
