import React, { useEffect, useState } from 'react'
import { Image, Modal, Platform, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBackButton from '../components/customBackButton';
import { Formik } from 'formik';
import Button from '../components/Button';
import api from '../API/api';
import useUser from '../hooks/useUser';

function EditProfile() {
  const gender = ["Sir", "Mama"]
  const [Gender,setGender] = useState<number>()
  const [visible, setVisible] = useState(false)
  const [code, setCode] = useState([])
  const [countrycode, setCountryCode] = useState("Nan")
  const [countryFlag, setCountryFlag] = useState("flag")

  const {user} = useUser()
 

  const internationalDiallingCode = async () => {
    
    try {
      const countryCode = await api.get("/countryCode")
      setCode(countryCode.data)
    } catch (error) {
      console.log("error occurex will fetchibng data. pls check your network", error);
      
    }
  }

  useEffect(() => {
    internationalDiallingCode();
  }, [])
  return (
   <SafeAreaView className='bg-[#1A8EEA] h-full'>
      <CustomBackButton Color='white' ClassName={`text-white ${Platform.OS == 'ios' ? 'mt-1' : 'mt-10'} mx-4 py-3 px-3`} Size={20} text={true} />

      <View className='bg-white w-full h-full mt-10 rounded-t-[4rem]'>
        <ScrollView contentContainerStyle={{paddingBottom: 300}} className='px-9 mt-10'>
          <Text className='text-2xl font-medium'>Account Info</Text>

          <View className='flex flex-row px-5 gap-4 border border-gray-400 py-5 rounded-xl mt-10 items-center'>
            <View className='relative'>
              <Image source={require("../assets/images/Ellipse 223.png")} />
              <Ionicons name="add-circle-sharp" size={24} color="black" className='absolute z-[1000000000] -bottom-1 right-0' />
            </View>
            <View>
              <Text className='text-xl font-medium mb-4'>Your Photo</Text>
              <Text className='text-[10px] text-gray-400 flex flex-wrap w-56'>Adding a profile picture makes youe profile more personlized</Text>
            </View>
          </View>

          <Formik initialValues={() => alert('ok')} validationSchema={() => alert('ok')} onSubmit={() => alert('ok')}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <Text className='mt-8 text-lg font-semibold'>Gender</Text>
                <View className='flex flex-row items-center gap-8 mt-3'>
                  {
                    gender.map((option, index) => (
                      <Pressable key={index} onPress={() => setGender(index)} className='flex flex-row items-center gap-3'>
                        <View className={`w-4 h-4 border border-black rounded-full ${Gender == index ? 'bg-blue-400' : ''}`}></View>
                        <Text>{option}</Text>
                      </Pressable>
                    ))
                  }
                </View>
                
                <Text className='mt-8 text-lg font-semibold mb-9'>Name</Text>

                <Text className='font-medium'>First Name</Text>
                <TextInput placeholder='first name' value={user.firstName} className='w-full py-4 rounded-3xl my-3 border border-gray-400 px-3' />

                <Text className='font-medium mt-4'>Last Name</Text>
                <TextInput placeholder='last name' value={user.lastName} className='w-full py-4 rounded-3xl my-3 border border-gray-400 px-3' />


                <Text className='mt-8 text-lg font-semibold mb-3'>Email, Phone number & Emergency</Text>

                <Text className='font-medium mt-4'>Email</Text>
                <TextInput placeholder='youremail@gmail.com' value={user.email} className='w-full py-4 rounded-3xl my-3 border border-gray-400 px-3' />

                <Text className='font-medium mt-4'>Phone Number</Text>
                <View className='w-full py-4 gap-4 rounded-3xl my-3 border border-gray-400 px-3 flex flex-row items-center'>
                  <TouchableOpacity className='flex flex-row items-center gap-2' onPress={() => setVisible(!visible)}>
                    <Text>{countryFlag} ({countrycode})</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" className={`${visible == true ? 'rotate-180' : ''} transition duration-150 ease-in-out`} />
                  </TouchableOpacity>
                  <TextInput placeholder='************' keyboardType='numeric' maxLength={10} className='w-56' />
                </View>

               
                  {visible && (
                    <View className='h-52 bg-white w-full shadow-md px-5 py-3'>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}} className='flex flex-col gap-3'>
                      {code.map((dailingCode, index) => (
                        <TouchableOpacity key={index} onPress={() => {setCountryCode(dailingCode.dialing_code); setCountryFlag(dailingCode.flag); setVisible(false)}}  className='border-b py-5'>
                        <Text className='text-lg font-semibold'>{dailingCode.flag} {dailingCode.dialing_code} {dailingCode.name}</Text>
                        </TouchableOpacity>
                      ))}
                      
                    </ScrollView>
                  </View>)}
                

                <Button title='Save'  extrastyling='w-full bg-black mx-auto mt-14 py-5 rounded-full' textstyling='text-white text-center font-semibold' />
              </View>
            )}

          </Formik>
        </ScrollView>
      </View>

     
   </SafeAreaView>
  )
}

export default EditProfile
