import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
import { router } from 'expo-router';

const third = () => {

    function Next(){
        router.push('Auth/Login')
        //router.push('(tabs)/screens/Home')
    }

  return (
    <SafeAreaView className='bg-[#1A8EEA] h-[100%]'>
    <View className=''>
      <ImageCard image={require('../../assets/images/Hiking.png')} Style='mx-auto' />
    </View>
    <View className='bg-white h-[450px] absolute right-0 left-0 bottom-0 rounded-t-[100px] roun'>
      <View className='mx-auto mt-12 w-80 h-96'>
        <Texts text='Explore Local Attractions' Style='text-center text-4xl font-bold' />
        <Texts text='Explore Local Attractions
Discover the beauty of local places you may never have visited. Experience local life and enjoy authentic experiences in each destination.' Style='text-center text-lg mt-7 px-3' />
        <Button title="Finish" handles={Next} extrastyling='bg-[#1E1E1E] p-6 rounded-full mt-10' textstyling='text-white text-center font-bold' />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default third