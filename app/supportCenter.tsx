import React from 'react'
import { Image, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomBackButton from '../components/customBackButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EvilIcons, Ionicons } from '@expo/vector-icons';

function SupportCenter() {
  const helpOptions = [
    {image:require("../assets/images/Frame 92973240.png") , name: "Order"},
    {image:require("../assets/images/Frame 92973241.png") , name: "Payment"},
    {image:require("../assets/images/Frame92973239.png") , name: "Account"},
    {image:require("../assets/images/Frame.png") , name: "General"},
    {image:require("../assets/images/Frame 92973243.png") , name: "Change"},
    {image:require("../assets/images/Frame 92973242.png") , name: "Cancellation"},
  ]
  return (
    <SafeAreaView className='bg-[#1A8EEA] h-full'>
    <CustomBackButton Color='white' ClassName={`text-white ${Platform.OS == 'ios' ? 'mt-1' : 'mt-10'} mx-4 py-3 px-3`} Size={20} text={true} />

    <View className='bg-white w-full h-full mt-10 rounded-t-[4rem]'>
      <ScrollView contentContainerStyle={{paddingBottom: 200}} className='px-9 mt-10'>
        <Text className='text-2xl font-medium'>Hi Adams, how can we help?</Text>

        <View className={`mx-auto my-9 border border-gray-500 w-full rounded-full px-5 flex flex-row items-center ${Platform.OS == 'ios' ? 'py-4' : 'py-2'}`}>
            <EvilIcons name="search" size={24} color="black" />
              <TextInput  placeholder='search' placeholderTextColor='black' className='' />
            </View>

            <View className='border rounded-3xl mb-14 border-gray-400 px-7 gap-8 justify-between flex flex-row items-center py-7'>
              <View>
                <Text className='text-xl font-semibold mb-8'>Complaint List</Text>
                <Image source={require("../assets/images/undraw1.png")} />
              </View>
              <Text className='w-40 text-sm'>All Your components question or submission to Customer care can be seen in the complaint List</Text>
            </View>


            <Text className='text-xl font-semibold'>Select help topic</Text>
            <View className='flex flex-row flex-wrap justify-between gap-y-7 mt-7'>
              {
                helpOptions.map((help, index) => (
                  <TouchableOpacity key={index}>
                    <Image source={help.image} />
                    <Text className='text-center'>{help.name}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
        
        <TouchableOpacity className='absolute bottom-36 right-5 w-20 flex flex-row justify-center items-center rounded-full h-20 bg-black'>
          <Ionicons name="chatbubbles-outline" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>

   
 </SafeAreaView>
  )
}

export default SupportCenter
