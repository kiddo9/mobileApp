import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

interface Options {
    title: string,
    Name: any,
    Click: () => void
}

const SettingOption = ({title, Name, Click}: Options) => {
  return (
    <View>
      <TouchableOpacity onPress={Click} className='flex-row items-center justify-between px-3 py-3 mt-4 border border-gray-500 rounded-xl'>
              <View className='flex-row items-center gap-3'>
              <Ionicons name={Name} size={24} color="black" />
              <Text>{title}</Text>
              </View>
              <FontAwesome name='angle-right' size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default SettingOption