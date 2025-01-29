import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View className='absolute z-[2000] left-0 right-0 top-0 bottom-0 bg-white justify-center'>
      <ActivityIndicator size={'large'} color={'black'}  />
    </View>
  )
}

export default Loader