import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Platform, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard'
import Texts from '../../components/Text'
import { Link, router } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '../../API/api';


  const FormValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is missing'),
    LastName: Yup.string().required('Last name is missing'),
    email: Yup.string().required('Email is missing').email('Enter a valid email'),
    password: Yup.string().required('Password is missing').min(6, 'Password should be at least 6 characters'),
    cpwd: Yup.string().required('Re-enter password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValue = {
    firstName: '',
    LastName: '',
    email: '',
    password: '',
    cpwd: '',
  };


function Signin() {

  const [Show, SetShow] = useState(false);
  const [Cshow, SetCshow] = useState(false);

  function toggle() {
    SetShow(!Show);
  }

  function Toggle() {
    SetCshow(!Cshow);
  }

  const handleSubmission = async (values:any, { setSubmitting }) => {
    try {
      const response = await api.post('/signin', values);
      if(response.data.success == true){
        router.push('../Auth/Login')
        Alert.alert('You have successfully signed up to Ciao');
      }else{
        Alert.alert('Something went wrong. Please try again', response.data.message)
      }
    } catch (error) {
      Alert.alert('Error', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className='bg-[#1A8EEA] h-full'>
      <ImageCard image={require('../../assets/images/Hiking.png')} Style='' />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className={`absolute bottom-0 left-0 right-0 h-full bg-white rounded-t-[38px] top-44 px-6 py-12 ${Platform.OS == 'android' && 'top-36'}`}>
        <Texts text='Sign Up' Style='text-2xl font-bold' />
        <Texts text='Create an account to get started' Style='mt-2  mb-8' />
        <Formik initialValues={defaultValue} validationSchema={FormValidationSchema} onSubmit={handleSubmission}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting }) => (
            <View>
              <View className='flex flex-col mt-2'>
                <View>
                  <TextInput
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    placeholder='First Name'
                   className={`px-3 py-4 border-2 border-gray-500 rounded-3xl ${errors.firstName && 'border-red-500', Platform.OS == 'android' && 'py-2'}`}
                  />
                </View>
                <View>
                  <TextInput
                    onChangeText={handleChange('LastName')}
                    onBlur={handleBlur('LastName')}
                    value={values.LastName}
                    placeholder='Last Name'
                    className={`px-3 py-4 border-2 border-gray-500 mt-4 rounded-3xl ${errors.LastName && 'border-red-500', Platform.OS == 'android' && 'py-2'}`}
                  />
                </View>
              </View>
              <TextInput
                placeholder='Email / Phone number'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                className={`px-3 py-4 border-2 border-gray-500 mt-4 rounded-3xl ${errors.email && 'border-red-500', Platform.OS == 'android' && 'py-2'}`}
              />

              <View  className={`flex flex-row px-3 py-4 mt-4 border-2 border-gray-500 rounded-3xl ${errors.password && 'border-red-500', Platform.OS == 'android' && 'py-2'}`}>
                <TextInput
                  secureTextEntry={!Show}
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                   className=' w-80'
                />
                <TouchableOpacity onPress={toggle}>
                  <Ionicons name={Show ? "eye" : "eye-off"} size={20} color="black" />
                </TouchableOpacity>
              </View>
              
              <View  className={`flex flex-row items-center px-3 py-4 mt-4 border-2 border-gray-500 rounded-3xl ${errors.cpwd && 'border-red-500', Platform.OS == 'android' && 'py-2'}`}>
                <TextInput
                  secureTextEntry={!Cshow}
                  placeholder='Confirm Password'
                  onChangeText={handleChange('cpwd')}
                  onBlur={handleBlur('cpwd')}
                  value={values.cpwd}
                  className='w-80'
                />
                <TouchableOpacity onPress={Toggle}>
                  <Ionicons name={Cshow ? "eye" : "eye-off"} size={20} color="black" />
                </TouchableOpacity>
              </View>
              
             
              <Button title="Sign Up" handles={handleSubmit} extrastyling='bg-[#1E1E1E] p-4 rounded-2xl mt-10' textstyling='text-white text-center font-bold' disable={isSubmitting} />
            </View>
          )}
        </Formik>

        <View className='flex flex-row items-center justify-center mt-5'>
            <View className='w-32 h-px bg-[#1E1E1E]'></View>
            <Texts text='OR' Style='px-2' />
            <View className='w-32 h-px bg-[#1E1E1E]'></View>
        </View>

        <View className='flex flex-row justify-center gap-8'>
            <View className='border w-16 rounded-lg flex justify-center items-center py-2 px-2'>
                <Ionicons name='logo-google' size={20} color={'black'} />
            </View>

            <View className='border w-16 rounded-lg flex justify-center items-center py-2 px-2'>
                <Ionicons name='logo-twitter' size={20} color={'black'} />
            </View>
        </View>

        <View className='flex flex-row justify-center gap-3 mt-6 items-center'>
            <Text className='text-gray-500'>Have an account?</Text>
            <Link href='/Auth/Login'><Text className='font-bold'>Sign In</Text></Link>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default Signin;
