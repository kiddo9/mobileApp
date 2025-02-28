import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const preLoader = () => {
  return (
    <View className='absolute z-[2000000000000] left-0 right-0 top-0 bottom-0 bg-[#ffffffb8] justify-center'>
        <ActivityIndicator size={40} color={'black'}  />
    </View>
  )
}

export default preLoader
