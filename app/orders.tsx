import { View, Text , TextInput, TouchableOpacity, Image, ScrollView, Platform} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Picker} from '@react-native-picker/picker'
import CustomBackButton from '../components/customBackButton'

const Post = () => {
  const orders = []
  return (
    <SafeAreaView className='bg-[#1A8EEA] h-full'>
    <CustomBackButton Color='white' ClassName={`text-white ${Platform.OS == 'ios' ? 'mt-1' : 'mt-10'} mx-4 py-3 px-3`} Size={20} text={true} />

    <View className='bg-white w-full h-full mt-10 rounded-t-[4rem]'>
      <ScrollView contentContainerStyle={{paddingBottom: 200}} className='px-9 mt-10'>

          {orders.length == 0 && (
            <View className='flex mt-20 flex-col justify-center items-center'>
              <Image source={require("../assets/images/undraw_no_data_re_kwbl 1.png")} className='mb-12' />
              <Text className='text-3xl font-bold'>Sorry</Text>
              <Text>You don't have any orders yet</Text>
            </View>
          )}
        
        
      </ScrollView>
    </View>

   
 </SafeAreaView>

  )
}

export default Post