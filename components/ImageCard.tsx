import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

interface ImageCard {
  image: any;
  Style: string;
}

function Header({image, Style}: ImageCard){
  return (
    <>
    <Image source={image} className={Style}/>
    </>
  )
}

export default Header
