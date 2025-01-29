import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
import { router, Link } from 'expo-router'
import * as Yup from 'yup'
import {Formik} from 'formik'

function Forgotten_password() {

  const formvalidate = Yup.object().shape({
    email: Yup.string().required('To procceed Please enter your email')
  })

  const defualt = {
    email: ''
  }

    const redirct = (values, {setSubmitting}) => {
      const vav = JSON.stringify(values)
      Alert.alert('ok',vav)
        router.push('/Auth/Token');
        setSubmitting(false)
    }
  return (
    <View className='bg-[#1A8EEA] h-full'>
        <SafeAreaView className='h-full'>
          <ImageCard image={require('../../assets/images/undraw_forgot_password_re_hxwm (1) 1.png')} Style='mx-auto' />
          <View className='absolute bottom-0 left-0 right-0 h-full bg-white top-52 rounded-t-[50px] px-5 py-10'>
            <Texts text='Forgot password' Style='text-3xl font-bold' />

            <Texts text='Please enter email for sending OTP' Style='text-md mt-4' />
            <Formik initialValues={defualt} validationSchema={formvalidate} onSubmit={redirct}>
              {({handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting}) => (
                <View>
                  <Texts text='Email' Style='text-md mt-10' />
              <TextInput onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder='Enter your Email Address' placeholderTextColor='black' className='flex flex-row items-center px-3 py-1 mt-2 border-2 border-gray-500 rounded-full' />
              {touched && <Text style={{ color: 'red' }}>{errors.email}</Text>}


             {/*  <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting} className='bg-[#1E1E1E] p-4 rounded-full mt-4'>
                <Text className='font-bold text-center text-white'>Recovery Password</Text>
            </TouchableOpacity>  */}
        <Button title="Send" handles={handleSubmit} extrastyling='bg-[#1E1E1E] p-4 rounded-full mt-4' textstyling='text-white text-center font-bold' disable={isSubmitting} />  
            </View>
            )}
            </Formik>
             
            
            </View> 
        </SafeAreaView>
    </View>
  )
}

export default Forgotten_password
