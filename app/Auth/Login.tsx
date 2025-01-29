import React, { useState, useContext, createContext, useEffect, } from 'react'
import { Text, TextInput, TouchableOpacity, View, Alert, ScrollView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import {Link, router} from 'expo-router'
import * as Yup from 'yup'
import { Formik } from 'formik';
import api from '../../API/api';
import AsyncStorage from '@react-native-async-storage/async-storage'


function Login() {

    const [user, setUser] = useState(null);

    const FormValidationSchema = Yup.object().shape({
        email: Yup.string().required('Email is missing').email('Enter a valid email'),
        password: Yup.string().required('Password is missing'),
      });
    
      const defaultValue = {
        email: '',
        password: '',
      };

    const [Show, SetShow] = useState(false)

    function toggle(){
        SetShow(!Show);
    }

    const handleSubmission = async (values:any, { setSubmitting }) => {
        // try {
        //     const response = await api.post('/Login', values);
        //     if(response.data.success == true){
                // Alert.alert(response.data.message);
                // const Details = JSON.stringify(response.data.user);
                // console.log(Details);
                // await AsyncStorage.setItem('User', Details);
                router.push('/(tabs)/screens/Home');
        //     }else{
        //         Alert.alert(response.data.message)
        //     }
        // } catch (error) {
        //     console.log(error);
        // }finally{
        //       setSubmitting(false);  
        // }
      };


  return (
  
    <SafeAreaView className='bg-[#1A8EEA]  h-[100%]'>
            
        <View className='h-[100%]'>  
            <ImageCard image={require('../../assets/images/Wagon.png')} Style='' />
              <ScrollView contentContainerStyle={{paddingBottom: 30}} className={`${Platform.OS == 'ios' && 'rounded-tl-[60rem] rounded-tr-[60rem]'} h-[100vh] top-56 bottom-0 left-0 right-0 absolute bg-white`} style={{...Platform.select({android: {borderTopLeftRadius: 60, borderTopRightRadius: 60}})}}>

                <View className='mt-10 mx-7'>
                    <Text className='text-3xl font-bold mb-3'>Sign In</Text>
                    <Text className='text-lg mb-9'>please enter a valid account</Text>

                    <Formik initialValues={defaultValue} validationSchema={FormValidationSchema} onSubmit={handleSubmission}>
                        {({handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View>
                               <Text>Email</Text>
                                <TextInput 
                                    className={`border py-4 mt-2 px-4 rounded-3xl ${errors.email && 'border-red-500 transition duration-200'} ${Platform.OS == 'android' && 'py-3'}`} 
                                    placeholder='youremail@yahoo.com'
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                /> 
                                

                                <Text className='mt-4'>password</Text>
                                <TextInput 
                                    className={`border py-4 mt-2 px-4 rounded-3xl ${errors.password && 'border-red-500 transition duration-200'} ${Platform.OS == 'android' && 'py-3'}`}  
                                    placeholder='********'
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                /> 

                                <Link href={'/Auth/Forgotten_password'} className='mt-3 text-right'><Text className='text-right text-md font-bold'>Forgot password</Text></Link>


                                <Button title='sign In' handles={handleSubmit} extrastyling=' w-full bg-black mt-10 py-4 rounded-3xl' textstyling='text-center text-lg font-bold text-white' />
                            </View>
                            
                        )}
                    </Formik>

                    <View className='flex flex-row gap-3 items-center mt-3 mb-5'>
                        <View className='w-40 h-px bg-black'></View>
                        <Text>OR</Text>
                        <View className='w-40 h-px bg-black'></View>
                    </View>

                    <View className='flex flex-row justify-center gap-8'>
                        <View className='border w-16 rounded-lg flex justify-center items-center py-2 px-2'>
                            <Ionicons name='logo-google' size={20} color={'black'} />
                        </View>

                        <View className='border w-16 rounded-lg flex justify-center items-center py-2 px-2'>
                            <Ionicons name='logo-twitter' size={20} color={'black'} />
                        </View>
                    </View>
                    
                    <View className='flex flex-row items-center gap-2 justify-center mt-7'>
                        <Text>Don't have an account? </Text>
                        <Link href={'/Auth/Signin'} className=''><Text className='font-bold'>Sign up</Text></Link>
                    </View>
                    
                </View>
                
              </ScrollView>
        </View>
    </SafeAreaView>
    
  )
}




export default Login
