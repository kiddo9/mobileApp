import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity, TouchableOpacityBase,Text, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
import Button from '../../components/Button'
import { Fontisto } from '@expo/vector-icons'
import CustomBackButton from '../../components/customBackButton'

function Notification() {
  const facilities = ['Transport', 'simaksi', 'coffee Break', 'Meals during trekking', 'comping tents', 'p3k', 'officially recognized mountain guide', 'Guide during trekking']
  let [showCount, setShowCount] = useState(1)
  let [price, setPrice] = useState(80)

  function addNumber() {
    setShowCount((prevCount) => {
      const newCount = prevCount + 1;
      setPrice(newCount * 80); // Update price based on the new count
      return newCount;
    });
  }

  function subtractNumber() {
    if (showCount > 1) {
      setShowCount((prevCount) => {
        const newCount = prevCount - 1;
        setPrice(newCount * 80); // Update price based on the new count
        return newCount;
      });
    }
  }
  return (
    <SafeAreaView className='h-full px-3 py-2'>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className={`${Platform.OS == 'android' ? 'pt-14' : 'pt-5'}`}>
        <View>
        <CustomBackButton ClassName={`bg-white top-12 absolute z-[100] ml-3 w-10 h-10 flex flex-row justify-center items-center rounded-full px-3`} text={false} />
         <View className={`absolute z-[100] bg-white w-10 h-10 rounded-full flex flex-row justify-center items-center px-1 top-12 right-2`}>
                   <Fontisto name="heart-alt" size={20} color='black' className='mx-auto' />
                </View>
          <ImageCard image={require('../../assets/images/Rectangle 4167.png')} Style=' w-full rounded-3xl' />   
          <View className='flex-row items-center justify-between px-5 -mt-[83px]'>
            <View>
              <Texts text='Sermus Mountain' Style='text-3xl text-white'/>
              <Texts text='Marling, East Java' Style='text-white'/>
            </View>
            <ImageCard image={require('../../assets/images/land.png')} Style='' />
          </View> 
        </View>

        <View className='flex-row justify-around mt-6'>
          <View className='pr-5 border-r border-gray-500'>
            <Texts text='Ratings' Style='text-center mb-2'/>
            <View className='flex-row items-center'>
            <ImageCard image={require('../../assets/images/Vector.png')} Style='' />
            <Texts text='4.5' Style='font-bold' />
          </View>
          </View>

          <View className='pr-5 border-r border-gray-500'>
            <Texts text='Type' Style='text-center'/>
            <View>
            <Texts text='Open Trip' Style='font-bold' />
          </View>
          </View>

          <View className='pr-5 border-r border-gray-500'>
            <Texts text='Estimated' Style=''/>
            <View>
            <Texts text='3D 2N' Style='font-bold' />
          </View>
          </View>

          <View className=''>
            <Texts text='VIA' Style=''/>
            <View>
            <Texts text='Raunpane' Style='font-bold' />
          </View>
          </View>
        </View>
        <Texts text='Description' Style='text-xl font-bold mt-6' />
        <Texts text='Mount Semeru or Mount Meru is a cone volcano in East Java, Indonesia. Mount Semeru is the highest mountain on the island of Java, with its peak Mahameru, 3,676 meters above sea level.' Style='' />

        <Texts text='choose date' Style='text-xl font-bold mt-6' />
        <View className={`flex-row mt-3 justify-between ${Platform.OS == 'android' && 'text-[20rem]'}`}>
        <Text className='border border-gray-400 py-2 px-2 rounded-xl'>15 Dec - 18 Dec 2024</Text>
        <Text className='border border-gray-400 py-2 px-2 rounded-xl'>15 Dec - 18 Dec 2024</Text>
        <Text className='border border-gray-400 py-2 px-2 rounded-xl'>choose date</Text>
        </View>

        <View className='flex-row items-center justify-between py-5 px-3 border border-gray-500 mt-7 rounded-3xl'>
          <View className='flex-col -mt-5'>
          <Texts text='Number of person' Style='text-lg font-bold mt-6' />
          <Text>${price}/person</Text>
          </View>
          <View className='flex-row items-center justify-between w-24'>
            <Button title='+' handles={addNumber} extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' disable={null} />
            <Text id='showCount' className='text-2xl'>{showCount}</Text>
            <Button title='-' handles={subtractNumber} extrastyling='border-2 border-gray-500 rounded-full w-6 h-6' textstyling='text-center' />
          </View>
        </View>

        <View className='mt-5'>
          <Text className='text-xl font-bold mb-5'>
            Facilities
          </Text>
          <View className='flex flex-row flex-wrap gap-3'>
            {facilities.map((list, index) => (
              <Text key={index} className={`${Platform.OS == 'ios' && 'border-2 border-black rounded-xl'} py-2 px-3 rounded-xl hover:bg-red-400 cursor-pointer`} style={{borderColor: 'gray', borderWidth: 1, ...Platform.select({ios:{borderRadius: 10}})}}>
                {list}
              </Text>
            ))}
          </View>
          
        </View>
      </ScrollView>

      <TouchableOpacity className='fixed w-20 -right-80 bottom-24'>
        <ImageCard image={require('../../assets/images/Button.png')} Style=''  />
      </TouchableOpacity>

      <View className={`absolute bottom-0 left-0 right-0 flex-row items-center justify-around h-20 bg-black ${Platform.OS == 'ios' && 'h-28 pb-5'}`}>
        <Texts text={`$${price}/person`} Style='text-white text-3xl' />
        <Button title='Book Now' extrastyling='bg-[#1A8EEA] px-2 rounded-full py-4 w-36' textstyling='text-white font-bold text-center' />
      </View>
    </SafeAreaView>
  )
}

export default Notification
