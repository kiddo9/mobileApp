import React, { useState } from 'react'
import { Text, View, Image, ScrollView} from 'react-native';
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../components/Loader';
import api from '../API/api';
import Button from '../components/Button';
import ImageCard from '../components/ImageCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

function Index() {

  const [loader, setloader] = useState(true)

  useEffect(() => {
    setloader(true)
    const verifyLoggeduser = async() => {
      try {
        const Usersinfo = await AsyncStorage.getItem('User');
        console.log(Usersinfo);
        if(Usersinfo == null){
          router.push('/(tabs)/screens/Home')
          //router.push('/Intro/first')
          //router.push('/Auth/Login')
          setloader(false)
        }else{
          router.push('/(tabs)/screens/Home')
          setloader(false)
        }
    } catch (error) {
        
      }
    }

    verifyLoggeduser();
  }, [])


  return(
    <View className='h-full'>
      {loader && (
         <Loader /> 
      )}
    
    </View>
  )
}

export default Index
