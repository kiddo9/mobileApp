import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native';
import { Link } from 'expo-router';

function SearchNofifyBar() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10,  paddingLeft: 7, paddingRight: 7, alignItems: 'center'  }}>
      <Link href='/Search'>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 15, backgroundColor: '#635A8F', borderRadius: 20 }}>
        <Ionicons name="search" size={24} color="white" />
        </View>
        </Link>
        {/* <Text style={{ fontFamily: 'serif', fontSize: 30 }}>Caio</Text> */}
        <Link href='/Notification'>
        <Ionicons name="notifications" size={44} color="white" />
        </Link>
    </View>
  )
}

export default SearchNofifyBar
