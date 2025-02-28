import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native'
import CustomBackButton from '../components/customBackButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../API/api';
import PreLoader from '../components/preLoader';
import Texts from '../components/Text'
import { router } from 'expo-router';


function Groups() {
  const [data, setData] = useState([]);
    const [loader, setloader] = useState(false)
    const [search, setSearch] = useState("")

  const list = async() => {
    setloader(true)
    const response = await api.get('/Home');
    try {
      const random = [...response.data].sort(() => Math.random() - 0.5)
      setData(random)
      setloader(false)
    } catch (error) {
      setloader(false)
      console.log(error)
    }
  }
   const view = (id:any) => {
      router.push(`/Details/${id}`)
      
    }

  useEffect(() => {
    list();
  }, []);
  return (
  <SafeAreaView className='px-5'>
    {
      loader && (
        <PreLoader />
      )
    }
    <View className='flex-row items-center justify-between mt-4'>
      <CustomBackButton Color='black' Size={24} ClassName={'py-4'} text={false} /> 
      <TextInput placeholder='search here....' onChangeText={(e) => setSearch(e)} className='w-96 py-3 px-3 rounded-xl border border-black' />
    </View>
    <View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 300}}>
        {data.filter((place) => {
          return  place.name.toLowerCase().includes(search
            .toLowerCase()
          )
        }).map((place:any) => (
          <TouchableOpacity key={place.id} onPress={() => view(place.id)} className='px-3 transition duration-100 ease-in-out mt-10 py-2 border border-gray-500 rounded-3xl w-full' >
            <View className='relative'>
              <Texts text={place.category} Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
              <Image source={{uri: place.image}} className='w-full h-96 rounded-xl' />
            </View>
            <View className='flex flex-row items-center justify-between py-3'>
              <View>
            <Texts text={place.name} Style='font-bold' />
            <Texts text={place.location} Style='' />
            </View>
            <View className='flex flex-row'>
              {/* <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' /> */}
              <Texts text={place.rating} Style='' />
            </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </SafeAreaView>
  )
}


export default Groups
