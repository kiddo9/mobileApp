import { View, Text , Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';


const postViwer = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#252525', height: '100%'}}>
        <View style={{ height: '100%' }}>

          <View style={{ padding: 27,position: 'relative', height: '100%' }}>
          <Image source={require('../assets/images/Rectangle 3656.png')} style={{ width: '100%', borderRadius: 30, objectFit: 'contain', alignSelf: 'center',  marginTop: 'auto', marginBottom: 'auto',   }}/>
          {/* <View style={{ position: 'absolute', bottom: 20}}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Good morning all this is to bring to your notice that since GST will take place at PS, that is combination of TS students , all  should wait for EPS 221 to commence immediately  at PS.
            Thank you</Text>
          </View> */}
          </View>

          <View style={{ backgroundColor: 'gray', position: 'absolute', bottom:0, width: '100%', flexDirection: 'row', justifyContent: 'space-around', padding: 10}}>
          <Ionicons name="heart" size={24} color="red" />
          <Ionicons name="chatbox-sharp" size={24} color="orange" />
          <Ionicons name="send" size={24} color="green" />
          </View>
        </View>
    </SafeAreaView>
  )
}

export default postViwer