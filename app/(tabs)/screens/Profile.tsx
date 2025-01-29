import React, { useEffect, useState } from 'react'
import { View,ScrollView, Image, Text, TouchableOpacity, Alert } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Texts from '../../../components/Text'
import Button from '../../../components/Button';
import ImageCard from '../../../components/ImageCard'
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile() {

  const [user, setUser] = useState('');

  useEffect(() => {
    const decode = async() => {
        const storage = JSON.parse(await AsyncStorage.getItem('User'));
        const decoded = jwtDecode(storage);
        setUser(decoded)
        //console.log(decoded);
    };

    decode();
  }, [])

  // const fetchdata = async() => {
  //   const data = await AsyncStorage.getItem('User');

  //   try {
  //     if(data !== null){
  //       const user = JSON.parse(data)
  //       console.log(user);
  //       setUser(user)
  //     }else{
  //       setUser(null)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchdata();
  // }, [])

  return (
    <View className='h-full bg-[#1A8EEA]'>
      <SafeAreaView>
        <View className='absolute z-50 flex flex-row items-center justify-between px-2 py-3 bg-white w-[340px] ml-9 shadow-lg shadow-gray-800 top-24 rounded-2xl'>
        <View className='flex flex-row items-center'>
          <ImageCard image={require('../../../assets/images/Ellipse 224.png')} Style='' />
          <View className='ml-2'>
            <Texts text={user.LastName} Style='font-bold text-xl' />
            <Button title='Edit Profile' textstyling='' extrastyling='' />
          </View>
          </View>
          <TouchableOpacity className='bg-[#1A8EEA] flex flex-row items-center py-2 px-6 rounded-2xl'>
          <Entypo name="circle" size={14} color="white" />
          <View className='ml-3'>
          <Texts text='your points' Style='' />
          <Texts text='6000' Style='' />
          </View>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 300 }} className=' bg-white h-full mt-28  rounded-t-[50px] px-7 py-7 '>
          <View className='h-32 px-2 mt-20 border border-gray-500 rounded-3xl'>
            <View className='flex flex-row items-center justify-between px-6 mb-2'>
              <Texts text='Orders' Style='text-2xl font-bold' />
              <Link href='' ><Texts text='see all' Style='' /></Link>
            </View>
            <Texts text='
                          View your order and transaction history here'
            Style='' />
          </View>

          <View className='h-32 px-2 mt-5 border border-gray-500 rounded-3xl'>
            <View className='flex flex-row items-center justify-between px-6 mb-2'>
              <Texts text='Payments' Style='text-2xl font-bold' />
              <Link href='' ><Texts text='see all' Style='' /></Link>
            </View>
            <Texts text='
                          Save your preferred payment method for smoother transactions
                          '
            Style='' />
          </View>

          <View className='h-32 px-2 mt-5 border border-gray-500 rounded-3xl'>
            <View className='flex flex-row items-center justify-between px-6 mb-2'>
              <Texts text='Coupons & Vouchars' Style='text-2xl font-bold' />
              <Link href='' ><Texts text='see all' Style='' /></Link>
            </View>
            <Texts text='
                          Claim vouchers and discounts for reduced prices or free shipping
                          '
            Style='' />
          </View>

          <View className='h-32 px-2 mt-5 border border-gray-500 rounded-3xl'>
            <View className='flex flex-row items-center justify-between px-6 mb-2'>
              <Link href='/Setting' ><Texts text='Settings' Style='text-2xl font-bold' /></Link>
            </View>
            <Texts text='
                          View and set your account preferences'
            Style='' />
          </View>

          <View className='h-32 px-2 mt-5 border border-gray-500 rounded-3xl'>
            <View className='flex flex-row items-center justify-between px-6 mb-2'>
              <Link href='' ><Texts text='Support center' Style='text-2xl font-bold' /></Link>
            </View>
            <Texts text='
                          View and set your account preferences'
            Style='' />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Profile
