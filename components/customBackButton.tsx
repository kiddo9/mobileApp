import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface back {
    ClassName: any,
    text: boolean,
    Color: string,
    Size: number
}

const CustomBackButton = (Back: back) => {
   
  return (
        <TouchableOpacity className={`${Back.ClassName} ${Back.text == true && 'flex flex-row items-center gap-2'}`} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={Back.Size} color={Back.Color} />
            {
                Back.text == true && (
                    <Text className='text-white'>Back</Text>
                )
            }
    </TouchableOpacity>
  )
}

export default CustomBackButton