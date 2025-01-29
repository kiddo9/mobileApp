import React from 'react'
import { Text, View } from 'react-native';


interface headtext {
  text: any;
  Style: string
}

function text({text, Style}: headtext) {


  return (
    <View>
      <Text className={Style}>{text}</Text>
    </View>
  )
}

export default text
