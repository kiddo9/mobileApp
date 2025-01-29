import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage'

const useDetails = () => {
    useEffect(() => {
        const decode = async() => {
            const storage = await AsyncStorage.getItem('User');
            console.log('from storage', storage);
            const decoded = jwtDecode(storage)
            console.log(decoded);
        };

        decode();
      }, [])
}

export default useDetails