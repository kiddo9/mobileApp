import './../global.css'
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
      const token = await AsyncStorage.getItem('token')
      
      if(token == ''){
       return router.push("/Intro/first")
      }
      const verify = await api.get('/auth',{
        headers: {
          authurization: token
        }
       })

      try {
       if (verify.data.success == true){
        await AsyncStorage.setItem('user', JSON.stringify(verify.data.user))
       await AsyncStorage.removeItem("bookingData")
       
        router.push("/(tabs)/screens/Home")
       }else{
        router.push("/Intro/first")
       }
    } catch (error) {
        console.log(error);
        return router.push("/Auth/Login")
      }
    }

    verifyLoggeduser();
  }, [])
  
}

export default Index
