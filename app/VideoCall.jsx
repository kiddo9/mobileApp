import React from 'react'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function VideoCall() {
  return (
    <View style={{ backgroundColor: '#cb98ebdc', height: '100%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%', paddingLeft: 20, paddingRight: 20, paddingTop: 30, paddingBottom: 30, backgroundColor: '#635A8F', alignItems: 'center' }}>
      <FontAwesome name="volume-up" size={30} color="black" />
      <FontAwesome5 name="phone-alt" size={24} color="black" />
      <FontAwesome name="bluetooth-b" size={30} color="black"  />
      <MaterialCommunityIcons name="video-off" size={30} color="black" />
      <MaterialCommunityIcons name="phone-cancel" size={30} color="black" style={{ backgroundColor: 'red', padding: 10, borderRadius: 100 }}/>
      </View>
    </View>
  )
}

export default VideoCall