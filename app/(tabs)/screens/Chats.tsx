import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import ImageCard from '../../../components/ImageCard'
import Texts from '../../../components/Text'
import Axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';


const Chats = () => {


  const ChatSpace = () => {
    router.push('/UserProfile/1')
  }

  function OpenCarmera(){
    router.push('/Camera')
  }

  function OpenStory(){
    router.push('/Story')
  }

  const [data, setData] = useState('');

  const list = async() => {
    const response = await Axios.get('http://192.208.184.237:3000/chat');
    try {
      setData(response.data.message)
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    list();
  }, []);


  return (
  <SafeAreaView>
    <View className=' bg-[#1A8EEA]'>
      <ScrollView contentContainerStyle={{ paddingBottom: 300 }} className=' bg-white h-full mt-28  rounded-t-[50px] px-7 py-7'>
        <Texts text='Wishlist' Style='text-3xl font-bold' />
        <View className='flex flex-row flex-wrap gap-2 mt-3'>
        <TouchableOpacity onPress={ChatSpace} className='w-[163px]'>
          <View className='flex flex-row flex-wrap border border-gray-500 rounded-md'>
           <ImageCard image={require('../../../assets/images/image 5.png')} Style='w-20 h-20'/>
            <ImageCard image={require('../../../assets/images/land.png')} Style='w-20 h-20' />
            <ImageCard image={require('../../../assets/images/Rectangle 4161.png')} Style='w-20 h-20' />
            <ImageCard image={require('../../../assets/images/Rectangle 4162.png')} Style='w-20 h-20'/> 
          </View>
          <Texts text='Hiking' Style='font-bold text-xl' />
          <Texts text='4 mountains' Style='text-md' />
        </TouchableOpacity>

        <TouchableOpacity className='w-[163px]'>
          <View className='flex flex-row flex-wrap border border-gray-500'>
            <ImageCard image={require('../../../assets/images/image 5.png')} Style='w-20 h-20'/>
            <ImageCard image={require('../../../assets/images/image 5.png')} Style='w-20 h-20' />
            <ImageCard image={require('../../../assets/images/image 5.png')} Style='w-20 h-20' />
            <ImageCard image={require('../../../assets/images/image 5.png')} Style='w-20 h-20'/>
          </View>
          <Texts text='Travel' Style='font-bold text-xl' />
          <Texts text='4 hotels' Style='text-md' />
        </TouchableOpacity>

        <TouchableOpacity className='w-[163px] border border-gray-500 h-[163px] rounded-lg'>
        <Texts text='New Collections Wishlist' Style=' text-sm my-16 mx-auto' />
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
      </SafeAreaView> 
  )
}

export default Chats


  
  
  

