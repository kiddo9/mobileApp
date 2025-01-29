import { View, Text , TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Picker} from '@react-native-picker/picker'

const Post = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#cb98ebdc', height: '100%' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 400 }}>
     <View style={{ paddingLeft: 20, paddingRight: 20 }}>
      <Text style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: '800', fontSize: 20, color: 'white' }}>Make your Post</Text>

      <View style={{ backgroundColor: '#635A8F', height: 200 , marginTop: 10, borderRadius: 20, position: 'relative'}}>
        <TextInput placeholder='Description of post' placeholderTextColor={'white'}  style={{padding: 20, color: 'white'}} multiline numberOfLines={7}/>
      </View>

      <View style={{ marginTop: 30 }}>
        <TextInput placeholder='tag me' placeholderTextColor={'white'} multiline numberOfLines={4} style={{ color: 'white', backgroundColor: '#635A8F', borderRadius: 10, paddingLeft: 10}} />
      </View>

      <View style={{ backgroundColor: '#635A8F', marginTop: 30, borderRadius: 10, position: 'relative', paddingTop: 5, paddingBottom: 5}}>
        <Picker style={{color: 'white'}}>
          <Picker.Item label="public" value="public" />
          <Picker.Item label="story" value="story" />
        </Picker>
      </View>

      <View style={{ backgroundColor: '#635A8F', marginTop: 30, borderRadius: 10, position: 'relative', height: 200, width: '100%', borderWidth: 3, borderColor: 'blue'}}>
        <TouchableOpacity style={{ position: 'absolute', backgroundColor: '#cb98ebdc', top: 10, left: 10, padding: 10, borderRadius: 20, zIndex: 10000 }}>
          <Text style={{ color: '#eee' }}>Add Image or Video</Text>
        </TouchableOpacity>
        <Image source={require('../assets/images/Rectangle 3656.png')} style={{ width: 'inherit', height: 195,  borderRadius: 10, objectFit: 'contain' }} />
      </View>
          <TouchableOpacity style={{ backgroundColor: '#635A8f', padding: 15, borderRadius: 20, marginTop: 20 }}>
          <Text style={{ color: '#eee', textAlign: 'center' }}>Upload</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>

    </SafeAreaView>

  )
}

export default Post