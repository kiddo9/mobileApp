import React, { useState } from 'react'
import { Text, View, TextInput , TouchableOpacity, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

function Password_reset() {
    const [Show, SetShow] = useState(false);
    const [Cshow, SetCshow] = useState(false);

    function toggle(){
        SetShow(!Show);
    }

    function Toggle(){
        SetCshow(!Cshow)
    }

    const redirect = () => {
        Alert.alert('Password reset successful');
        router.push('/Auth/Login')
    }

  return (
    <View className='h-full bg-[#1A8EEA]'>
        <SafeAreaView className='absolute bottom-0 left-0 right-0 h-full bg-white rounded-t-[32px] top-32 px-4 py-10'>
           <Texts text='Reset Password' Style='text-3xl font-bold' />

         <View className='flex flex-row items-center px-3 py-1 mt-8 mb-5 border-2 border-gray-500 rounded-full'>
            <TextInput secureTextEntry={!Show ? true : false} placeholder='password' className='px-3 py-1 w-72' />  
            {Show ? <Ionicons name="eye" size={24} color="white" onPress={toggle} /> : <Ionicons name="eye-off" size={24} color="black" onPress={toggle} />} 
            
        </View>
        <View className='flex flex-row items-center px-3 py-1 mt-2 border-2 border-gray-500 rounded-full'>
            <TextInput secureTextEntry={!Cshow ? true : false} placeholder='comfirm password' className='px-3 py-1 w-72' />  
            {Cshow ? <Ionicons name="eye" size={24} color="white" onPress={Toggle} /> : <Ionicons name="eye-off" size={24} color="black" onPress={Toggle} />} 
            
         </View>
         {/* <TouchableOpacity onPress={redirect} style={{ backgroundColor: '#635A8F', padding: 20, borderRadius: 50, marginTop: 30, textAlign: 'center'}}>
                <Text style={{ fontFamily: 'serif', fontSize: 15, color: 'white', fontWeight: '400', textAlign: 'center', shadowColor: '#000',  shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.25, elevation: 1 }}>Reset Password</Text>
            </TouchableOpacity> */}

<Button title="Reset" handles={redirect} extrastyling='bg-[#1E1E1E] p-4 rounded-full mt-12' textstyling='text-white text-center font-bold'/>

        </SafeAreaView>
        
    </View>
  )
}

export default Password_reset
