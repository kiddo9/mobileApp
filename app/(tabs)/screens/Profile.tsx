import React from 'react'
import { View,ScrollView, Image, Text, TouchableOpacity, Alert, Platform } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Texts from '../../../components/Text'
import Button from '../../../components/Button';
import ImageCard from '../../../components/ImageCard'
import useUser from '../../../hooks/useUser';


function Profile() {

  const {user} = useUser()

  const profileOptionList = [
    {title: "Your Order", detail: "View your order and transaction history here", route: "/orders"},
    {title: "Payment Method", detail: "Save your preferred payment method for smoother transaction", route: "/paymentMethod"},
    {title: "Coupon & Voucher", detail: "Claim vouchers and discounts and reduced prices or free shipping", route: "/coupon"},
    {title: "Support Center", detail: "Find the best answer to your question", route: "/supportCenter"},
    {title: "Settings", detail: "View and set up your account preference", route: "/Setting"},
  ]

  return (
    <View className='h-full bg-[#1A8EEA]'>
      <SafeAreaView>
        <View className={`absolute z-50 flex flex-row items-center justify-between px-2 py-3 bg-white left-9 right-9 shadow-sm shadow-gray-800  ${Platform.OS == 'ios' ? 'top-36' : 'top-14'} rounded-2xl`}>
        <View className='flex flex-row items-center'>
          <ImageCard image={require('../../../assets/images/Ellipse 224.png')} Style='' />
          <View className='ml-2'>
            <Texts text={user.lastName} Style='font-bold text-xl' />
            <Button handles={() => router.push("/editProfile")} title='Edit Profile' textstyling='' extrastyling='' />
          </View>
          </View>
          <TouchableOpacity className='bg-[#1A8EEA] flex flex-row items-center py-4 px-6 rounded-2xl'>
          <Entypo name="circle" size={14} color="white" />
          <View className='ml-3'>
          <Texts text='Your Points' Style='text-white' />
          <Texts text='6000' Style='text-white' />
          </View>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }} className=' bg-white h-full mt-28 text-black  rounded-t-[50px] px-7 py-7 '>
          
          <View className='mt-14 flex flex-col gap-5'>

          {profileOptionList.map((optionList, index) => (
            optionList.title == "Settings" ? (
              <TouchableOpacity key={index} onPress={() => router.push(optionList.route)} className='border border-gray-400 px-3 py-4 rounded-xl'>
                <View key={index}>
                <View className='flex flex-row justify-between items-center py-4'>
                <Text className='text-xl font-semibold'>{optionList.title}</Text>
              </View>
              <Text className='text-sm'>{optionList.detail}</Text>
            </View>
              </TouchableOpacity>
            ) : (
              <View key={index} className='border border-gray-400 px-3 py-4 rounded-xl'>
              <View className='flex flex-row justify-between items-center py-4'>
                <Text className='text-xl font-semibold'>{optionList.title}</Text>
                {/* Only show the button if the title is "Settings" */}
                  <Button title="See all" textstyling='text-sm' handles={() => router.push(optionList.route)} />
              </View>
              <Text className='text-sm'>{optionList.detail}</Text>
            </View>
            )
            
          ))}

           </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Profile
