import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
import { router } from 'expo-router';

const second = () => {

    function Next(){
        router.push('Intro/third')
    }


  return (
    <SafeAreaView className='bg-[#1A8EEA] h-[100%]'>
    <View className=''>
      <ImageCard image={require('../../assets/images/Traveller with suitcase.png')} Style='mx-auto' />
    </View>
    <View className='bg-white h-[450px] absolute right-0 left-0 bottom-0 rounded-t-[100px] roun'>
      <View className=' mx-auto w-80 mt-12 h-96'>
        <Texts text='Get the Best Deals' Style='text-center text-4xl font-bold' />
        <Texts text='Save time and money by finding the best travel deals. We provide a range of exclusive promotions and discounts to make your trip more affordable.Your email here...Next' Style='text-center text-lg mt-7 px-5' />
        <Button title="Next" handles={Next} extrastyling='bg-[#1E1E1E] p-6 rounded-full mt-16' textstyling='text-white text-center font-bold' />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default second