import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
import { Link, router } from 'expo-router'

function Token() {
    function redirect(){
        router.push('/Auth/Password_reset')
    }
    return (
        <View className='h-full bg-[#1A8EEA]'>
            <SafeAreaView className='h-full' >
            <ImageCard image={require('../../assets/images/undraw_personal_email_re_4lx7 1.png')} Style='mx-auto' />
              <View className='absolute bottom-0 left-0 right-0 h-full bg-white top-52 rounded-t-[50px] px-5 py-10'>
                <Texts text='OTP Verification' Style='text-3xl font-bold mb-5' />
    
                <Texts text='Please enter your OTP sent to your email' Style='mb-10' />

                <Texts text='OTP here' Style='mb-1' />
                <TextInput placeholder='' className='flex flex-row items-center px-3 py-1 mt-2 border-2 border-gray-500 rounded-full' />
                
                    <Button title="verify" handles={redirect} extrastyling='bg-[#1E1E1E] p-4 rounded-full mt-4' textstyling='text-white text-center font-bold'/>

                </View> 
            </SafeAreaView>
        </View>
      )
}

export default Token
