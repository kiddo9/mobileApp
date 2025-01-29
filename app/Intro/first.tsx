import React from 'react'
import { Text, View, Image, ScrollView} from 'react-native';
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
const first = () => {


    const check = () => {
        router.push('/Intro/Second')
    }

  return (
    <SafeAreaView className='bg-[#1A8EEA] h-[100%]'>
    <View className=''>
      <ImageCard image={require('../../assets/images/Booking.png')} Style='mx-auto' />
    </View>
    <View className='bg-white h-[450px] absolute right-0 left-0 bottom-0 rounded-t-[100px] roun'>
      <View className=' mx-auto w-80 mt-12 h-96'>
        <Texts text='Plan Your Trip' Style='text-center text-4xl font-bold' />
        <Texts text='Create your dream trip with ease. choose a destination, find a perfect place to stay and create an itineary that suits your perfernce' Style='text-center text-lg mt-12 px-5' />
        <Button title="Next" handles={check} extrastyling='bg-[#1E1E1E] p-6 rounded-full mt-20' textstyling='text-white text-center font-bold' />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default first