import React from 'react'
import { View, TextInput, ScrollView, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function UserChat() {
  return (
    <View style={{ height: '100%' }}>
        <ScrollView >
            <ScrollView style={{ backgroundColor: '#cb98ebdc', paddingTop: 50, paddingLeft: 7, paddingRight: 7 , paddingBottom: 400 }}>
       
          <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F', borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>That guy we saw today how do you see him</Text>
          </View>

          <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F', borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>That guy we saw today how do you see him</Text>
          </View>

          <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F', borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>That guy we saw today how do you see him</Text>
          </View>
        
       
         <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F',  borderRadius: 20, alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>He was ok but some red flages</Text>
         </View>

         <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F',  borderRadius: 20, alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>He was ok but some red flages</Text>
         </View>

         <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F',  borderRadius: 20, alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>He was ok but some red flages</Text>
         </View>

         <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F', borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>That guy we saw today how do you see him</Text>
          </View>
        
          <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F',  borderRadius: 20, alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>He was ok but some red flages</Text>
         </View>

         <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F', borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>That guy we saw today how do you see him</Text>
          </View>
        
          <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F',  borderRadius: 20, alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>He was ok but some red flages</Text>
         </View>

         <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F', borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>That guy we saw today how do you see him</Text>
          </View>
        
          <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F',  borderRadius: 20, alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>He was ok but some red flages</Text>
         </View>

         <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F', borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>That guy we saw today how do you see him</Text>
          </View>
        
          <View style={{ padding: 15, width: '60%', backgroundColor: '#635A8F',  borderRadius: 20, alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: '#ccc', fontFamily: 'serif' }}>He was ok but some red flages</Text>
         </View>

      </ScrollView>      
        </ScrollView>


      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'row',justifyContent: 'space-between', padding: 20, gap: 15, backgroundColor: '#635A8F', alignItems: 'center' }}>
      <Ionicons name="apps" size={24} color="black" />
      <Ionicons name="image" size={24} color="black" />
      <Ionicons name="mic" size={24} color="black" />
      <View style={{ display: 'flex', flexDirection: 'row', width: '65%', backgroundColor: '#C4C2CB', padding: 5, borderRadius: 20 }}>
        <TextInput placeholder='message' style={{width: '85%'}}/>
        <Ionicons name="send" size={24} color="black" />
      </View>
      </View>
    </View>
  )
}

export default UserChat
