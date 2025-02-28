import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUser = () => {
    const [user, setUser] = useState<any>([]);
    const fetchdata = async() => {
        const data = await AsyncStorage.getItem('user');
    
        try {
          if(data !== null){
            const user = JSON.parse(data)
            setUser(user)
          }else{
            setUser(null)
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchdata()
      })
  return {user}
}

export default useUser
