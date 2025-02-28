import React from 'react'
import { View, Text } from 'react-native'

interface stage {
    stage: number,
    Style: any
}

const PaymentStage = (Stage: stage) => {
  return (
    <View className={`${Stage.Style} flex flex-row gap-3`}>
        <View className={`flex flex-row items-center gap-1`}>
            <Text className={`w-10 rounded-full h-10 px-3 py-3 text-center flex justify-center items-center ${Stage.stage == 1 ? 'bg-blue-500' : 'bg-gray-400 text-gray-300'} `}>1</Text>
            <Text className={`${Stage.stage != 1 && 'text-gray-400'}`}>Payment Method</Text>
        </View>

        <View className='flex flex-row items-center gap-1'>
            <Text className={`w-10 rounded-full h-10 px-3 py-3 text-center flex justify-center items-center ${Stage.stage == 2 ? 'bg-blue-500' : 'bg-gray-400 text-gray-300'} `}>2</Text>
            <Text className={`${Stage.stage != 2 && 'text-gray-400'}`}>Pay</Text>
        </View>

        <View className='flex flex-row items-center gap-1'>
            <Text className={`w-10 rounded-full h-10 px-3 py-3 text-center flex justify-center items-center ${Stage.stage == 3 ? 'bg-blue-500' : 'bg-gray-400 text-gray-300'} `}>3</Text>
            <Text className={`${Stage.stage != 3 && 'text-gray-400'}`}>Done</Text>
        </View>
    </View>
  )
}

export default PaymentStage