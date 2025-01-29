import React, { useEffect, useState } from 'react'
import { View, ScrollView, Image, Text , TouchableOpacity, TextInput} from 'react-native'
import SearchNofifyBar from '../../../components/SearchNofifyBar'
import { MaterialCommunityIcons, Ionicons, EvilIcons  } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import Button from '../../../components/Button';
import Loader from '../../../components/Loader';
import ImageCard from '../../../components/ImageCard'
import Texts from '../../../components/Text'
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../../API/api';


function Home() {
  const [comments, Setcomments] = useState(false);
  const [PostMenu, SetPostMenu] = useState(false);
  const [Story, Setstory] = useState('');

  function OpenCarmera(){
    router.push('/Camera')
  }

  function OpenStory(){
    router.push('/Story')
  }

  const show = () => {
    Setcomments(!comments)
  }

  const NotShow = () => {
    Setcomments(false)
  }

  const OpenPostMenu = () => {
    SetPostMenu(!PostMenu)
  }

  const view = () => {
    router.push('/Details/1')
  }

  const [data, setData] = useState('');
  const [loader, setloader] = useState(false)

  const list = async() => {
    setloader(true)
    const response = await api.get('/Home');
    try {
      setData(response.data.message)
      console.log(response.data);
      setloader(false)
    } catch (error) {
      setloader(false)
      console.log(error)
    }
  }

  // useEffect(() => {
  //   list();
  // }, []);


  return (
    <View className='h-full px-6 bg-white'>
      { loader && (<Loader />) }
        <SafeAreaView >
            <View className='flex flex-row items-center justify-between px-3 pt-8'>
              <View>
                <Texts text='Your location' Style='' />
                <Texts text='Nigeria, Lagos' Style='text-xl font-bold' />
              </View>
              <View className='flex flex-row gap-4'>
              <MaterialCommunityIcons  name="infinity" size={24} color="black" />
              <Ionicons name="settings-outline" size={24} color="black" onPress={ () => router.push('/Setting')} />
              </View>
            </View>

            <View className='mx-auto my-9 border-2 border-gray-500 w-[350px] rounded-full px-5 flex flex-row items-center py-2'>
            <EvilIcons name="search" size={24} color="black" />
              <TextInput  placeholder='search' placeholderTextColor='black' className='' />
            </View>
        
            <ScrollView contentContainerStyle={{ paddingBottom: 300}}  className='h-full'>
            <View>
              <View className='flex flex-row items-center justify-between px-6 mb-6'>
                  <Texts text='Popular Places' Style='text-2xl font-bold' />
                  <Link href='' ><Texts text='see all' Style='' /></Link>
              </View>
              <ScrollView horizontal={true} className='gap-8 py-1'>
                <TouchableOpacity onPress={view} className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Hiking' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4161.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='sermus mountain' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Traveling' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4162.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='Raja Amputa' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View className='flex flex-row items-center justify-between px-6 mt-5 mb-6'>
                  <Texts text='Recommended' Style='text-2xl font-bold' />
                  <Link href='' ><Texts text='see all' Style='' /></Link>
            </View>
            <View className='gap-6'>

              <View className='flex flex-row items-center justify-between px-2 py-1 border border-gray-500 rounded-3xl'>
                <View className='flex flex-row items-center gap-3 ml-1'>
                   <ImageCard image={require('../../../assets/images/land.png') } Style='w-14 h-14 my-2' />
                <View>
                  <Texts text='Kianinivi Mountain' Style='text-md font-bold' />
                  <Texts text='Hiking' Style='border border-gray-500 text-center rounded-full px-1 my-1' />
                  <Texts text='Sokol, jombo' Style='text-sm' />
                </View>
                </View>
               
                <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
              </View>

              <View className='flex flex-row items-center justify-between px-2 py-1 border border-gray-500 rounded-3xl'>
                <View className='flex flex-row items-center gap-3 ml-1'>
                   <ImageCard image={require('../../../assets/images/Rectangle 4161.png') } Style='w-14 h-14 my-2' />
                <View>
                  <Texts text='Kianinivi Mountain' Style='text-md font-bold' />
                  <Texts text='Hiking' Style='border border-gray-500 text-center rounded-full px-1 my-1' />
                  <Texts text='Sokol, jombo' Style='text-sm' />
                </View>
                </View>
               
                <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
              </View>

              <View className='flex flex-row items-center justify-between px-2 py-1 border border-gray-500 rounded-3xl'>
                <View className='flex flex-row items-center gap-3 ml-1'>
                   <ImageCard image={require('../../../assets/images/land.png') } Style='w-14 h-14 my-2' />
                <View>
                  <Texts text='Kianinivi Mountain' Style='text-md font-bold' />
                  <Texts text='Hiking' Style='border border-gray-500 text-center rounded-full px-1 my-1' />
                  <Texts text='Sokol, jombo' Style='text-sm' />
                </View>
                </View>
               
                <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
              </View>
            </View>

            <View className='flex flex-row items-center justify-between px-6 mt-5 mb-6'>
                  <Texts text='Promo Partner' Style='text-2xl font-bold' />
                  <Link href='' ><Texts text='see all' Style='' /></Link>
            </View>
            <View className='relative flex flex-row items-center'>
              <ImageCard image={require('../../../assets/images/image 5.png')} Style='rounded-l-3xl' /> 
              <View className='w-64 h-28 rounded-l-full -ml-12 bg-[#1A8EEA] rounded-tr-3xl px-10 py-2'>
              <Texts text='Promo Partners' Style='text-2xl font-bold text-white' />
              <Texts text='with various banks, brands and tuorism bodies' Style='text-white' />
              <Texts text='Promo' Style='text-white text-sm' />
              </View> 
            </View>


            <View className='py-10'>
              <View className='flex flex-row items-center justify-between px-6 mb-6'>
                  <Texts text=' Nearest to your location' Style='text-2xl font-bold w-52' />
                  <Link href='' ><Texts text='see all' Style='' /></Link>
              </View>
              <ScrollView horizontal={true} className='gap-8 py-1'>
                <View className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Hiking' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4161.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='sermus mountain' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </View>

                <View className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Traveling' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4162.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='Raja Amputa' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </View>
              </ScrollView>
            </View>

            <View>
              <View className='flex flex-row items-center justify-between px-6 mb-6'>
                  <Texts text='choose your location you want' Style='text-2xl w-52 font-bold' />
                  <Link href='' ><Texts text='see all' Style='' /></Link>
              </View>
              <ScrollView horizontal={true} className='gap-8 py-1'>
                <View className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Hiking' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4161.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='sermus mountain' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </View>

                <View className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Traveling' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4162.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='Raja Amputa' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </View>
              </ScrollView>
            </View>

            <View className='py-6'>
              <View className='flex flex-row items-center justify-between px-6 mb-6'>
                  <Texts text='Artist' Style='text-2xl w-52 font-bold' />
                  <Link href='' ><Texts text='see all' Style='' /></Link>
              </View>
              <ScrollView horizontal={true} className='gap-8 py-1'>
                <View className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Hiking' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4161.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='sermus mountain' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </View>

                <View className='px-3 py-2 border border-gray-500 rounded-3xl' >
                  <View className='relative'>
                    <Texts text='Traveling' Style='absolute left-3 z-[1000] bg-white top-4 px-5 py-1 rounded-3xl' />
                    <ImageCard image={require('../../../assets/images/Rectangle 4162.png')} Style='' />
                  </View>
                  <View className='flex flex-row items-center justify-between py-3'>
                     <View>
                  <Texts text='Raja Amputa' Style='font-bold' />
                  <Texts text='Making East java' Style='' />
                  </View>
                  <View className='flex flex-row'>
                    <ImageCard image={require('../../../assets/images/Vector.png')} Style='mr-3' />
                    <Texts text='4.5' Style='' />
                  </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            
        </ScrollView> 



        </SafeAreaView>
    </View>
  )
}

export default Home
