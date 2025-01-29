import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { router } from 'expo-router';

interface input{
  Style: string;
}

export default function Input({Style}: input) {
  return (
    <View>
      <TextInput className={Style} />
    </View>
  )
}



