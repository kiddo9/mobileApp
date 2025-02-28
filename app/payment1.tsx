import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, TextInput, Platform, Alert } from 'react-native'
import {  MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomBackButton from '../components/customBackButton'
import PaymentStage from '../components/paymentStage'
import Button from '../components/Button';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Timer from '../components/Timer';
import usePayment from '../hooks/usePayment';

function Archive() {

  const [seleted, setSeleted] = useState<any>()
  const [voucher, setVoucher] = useState("")
  const [points, setPoints] = useState(null)
  const [bookingDetails, setBookingDetails] = useState<any>()
  const [voucherSelected, setVoucherSelected] = useState(false)
  const [message, setMessage] = useState("")
  const [isValid, setIsValid] = useState<any>()
  const [orderId, setOrderId] = useState("")
  const textInputRef = useRef(null)

  let discount:number
  let pointsCost = Math.ceil(points / 1200 )
  
  const {paymentOptions} = usePayment()

  const generationOrderId = (length:number) => {
    let OrderId:string = "";

    for(let i = 0; i < length; i++){
      OrderId += Math.floor(Math.random() * 10)
    }
    setOrderId(OrderId)
  }

  useEffect(() => {
    const BookingData = async () => {
      const getBookingData = await AsyncStorage.getItem("bookingData")
      setBookingDetails(JSON.parse(getBookingData))
    }
    
    BookingData()
    generationOrderId(9)
  }, [])

  const handleTextChange = (text:string) => {
    setVoucher(text)
    if(text.length == 6) {
      textInputRef.current.blur()
      validateVoucher(text)
    }else{
      setMessage("")
    }
  }

  const validateVoucher = (value:any) => {
    setIsValid(true)
    if(isValid == true){
      setMessage("validation successfull you got a 5% discount")
       discount = 5 / 100
      setVoucher(JSON.stringify(discount))
    }else if(isValid == 'expired') {
      setMessage("voucher has expired")
    }else if (isValid == "used") {
      setMessage("voucher has reached its used limit")
    }else{
      setMessage("invalid voucher")
    }
  }

  const calculateAndProceedPayment = () => {

    if(voucher != "" && voucherSelected != false) {
      const Discount = JSON.parse(voucher)

      const calculateDiscount = bookingDetails.price * Discount
      const total = bookingDetails.price - calculateDiscount

      const finalTotal = total - pointsCost

      return finalTotal
    }

    
    if(voucher != ""){
      const Discount = JSON.parse(voucher)

      const calculateDiscount = bookingDetails.price * Discount
      const total = bookingDetails.price - calculateDiscount

      return total
    }

    if(voucherSelected != false){
      return bookingDetails.price - pointsCost
    }
    
     return bookingDetails.price
  }

 

  async function completeTransaction () {

      if(seleted == null){
        return Alert.alert("please select a payment Method")
      }

      let NewPrice:any = calculateAndProceedPayment()
       bookingDetails.price = NewPrice
       bookingDetails.paymentMethodId = seleted
       bookingDetails.orderId = orderId

      await AsyncStorage.setItem("bookingData", JSON.stringify(bookingDetails))
      console.log(bookingDetails);

      return router.push('/paymentEnd')
  }
  


  return (
   <SafeAreaView>
    <View className='w-full px-14 py-10 shadow-2xl' style={Style.shadow}>
      <View className='flex flex-row items-center py-6 gap-5'>
        <CustomBackButton Size={24} ClassName={``} Color='black' text={false} />
        <View>
          <Text className='text-2xl font-semibold'>Continue payment</Text>
          <Text className='text-sm'>Order ID: {orderId}</Text>
        </View>
      </View>

      <PaymentStage stage={1} Style={'ml-1'} />
    </View>

    <ScrollView contentContainerStyle={{paddingBottom: 200}}>
          <Timer />

        <View className=' mx-10 mt-8 border border-gray-400 px-4 py-6 rounded-3xl'>
          <Text className='text-xl'>Payment Method</Text>

          <View className='mt-10 flex flex-col gap-5'>
            {
              paymentOptions.slice(0, 3).map((options, index) => (
                <Pressable onPress={() => setSeleted(options.id)
                } key={index} className='flex flex-row items-center justify-between border border-gray-500 px-3 py-3 rounded-xl'>
                  <View className='flex flex-row items-center gap-5'>
                    {options.number != null ? (
                      <Image source={{uri: options.image}} className='w-10 h-10 rounded-full'  />
                    ) : (
                      <Image source={require("../assets/images/image 8.png")}  />
                    )}
                    
                    <Text className='text-xl font-semibold'>{options.name}</Text>
                  </View>

                  <View className={`${seleted == options.id && 'bg-blue-600'} w-4 h-4 border border-black rounded-full`}></View>
                </Pressable>
              ))
            }
          </View>
        </View>

        <View className=' mx-10 mt-8 border border-gray-400 px-4 py-6 rounded-3xl'>
          <Text>Use the voucher</Text>
          <View className='border border-gray-500 px-1  rounded-xl mt-5'>
          <Pressable className='flex flex-row items-center justify-between px-3 py-3'>
            <View className='flex flex-row items-center gap-5'>
            <View className='w-4 h-4 border border-black rounded-full'></View>
              <Text className='text-xl font-semibold'>User Voucher</Text>
            </View>

            <View className={`w-4 h-4 border border-black rounded-full ${isValid == true && 'bg-blue-500'}`}></View>
          </Pressable>
            <View className={`mx-auto my-3 border relative border-gray-500 rounded-3xl px-7 flex flex-row items-center ${Platform.OS == 'ios' ? 'py-4 w-80' : 'py-1 w-80'}`}>
              <TextInput ref={textInputRef} placeholder='enter code' value={voucher} maxLength={6} onChangeText={(text) => handleTextChange(text)} placeholderTextColor='gray' className='text-sm w-full' />
                {
                  isValid == true && (
                    <View className='absolute top-0 left-0 right-0 bottom-0 bg-[#0000006b] rounded-3xl'></View>
                  )
                }
            </View>

            <Text className={`${isValid == true ? 'text-green-500' : 'text-red-600'} mx-8 py-1 pb-5`}>{message}</Text>
          </View>

          <View className='border border-gray-500 px-1  rounded-xl mt-5'>
          <Pressable onPress={() => {setVoucherSelected(!voucherSelected); setPoints(6000)}} className='flex flex-row items-center justify-between px-3 py-3'>
            <View className='flex flex-row items-center gap-5'>
            <View className='w-4 h-4 border border-black rounded-full'></View>
              <View>
                <Text className='text-xl font-semibold'>User Points</Text>
                <Text>Your point: {voucherSelected == false ? '............' : points}</Text>
                {
                  voucherSelected == true && (
                    <Text>${pointsCost}</Text>
                  )
                }
              </View>
            </View>

            <View className={`w-4 h-4 border border-black rounded-full ${voucherSelected != false && 'bg-blue-600'}`}></View>
          </Pressable>
          
          </View>
        </View>

        <Button title='Next' handles={completeTransaction} extrastyling='w-96 bg-black mx-auto mt-14 py-5 rounded-full' textstyling='text-white text-center font-semibold' />
    </ScrollView>

    {/* () => router.push('/paymentEnd') */}
    
    </SafeAreaView>
  )
}

const Style = StyleSheet.create({
  shadow: {
     shadowColor: "#0000",
    shadowOpacity: 1,
    shadowRadius: 25,
  }
})
export default Archive
