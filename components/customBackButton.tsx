import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface back {
    ClassName: any,
    text: boolean
}

const CustomBackButton = (Back: back) => {
   
  return (
        <TouchableOpacity className={Back.ClassName} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            {
                Back.text == true && (
                    <Text>Back</Text>
                )
            }
    </TouchableOpacity>
  )
}

export default CustomBackButton