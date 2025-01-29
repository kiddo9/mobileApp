import React from 'react'
import { View, Text, ScrollView, Button, Alert, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

function more() {

  const handleLogout = async() => {
    await AsyncStorage.removeItem('User');
    router.push('/Auth/Login')
    Alert.alert('you have logged out of this account')
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#cb98ebdc', height: '100%' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 500, paddingTop: 100 }}>
        <Button title='logout' onPress={handleLogout} />

        
      <View style={style.container}>
        <TextInput placeholder='search' placeholderTextColor={'red'} style={style.input}/>
        <View style={style.icon}>
          <Ionicons name='search' size={20} color='black' />
          <Ionicons name='radio' size={20} color='black' />
        </View>
      </View>


      </ScrollView>





    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 4,
    marginRight: 4,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  icon: {
    flexDirection: 'row',
    gap: 12
  },
  input: {
     width: '82%',
     fontFamily: 'serif',
     fontSize: 20
  }, 

})

export default more
