import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import {Ionicons, Feather, Fontisto} from '@expo/vector-icons'

function Rootlayout() {

  // const Home = () => (
  //     <View style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
  //        <Feather name="home" size={24} color="black" />
  //        <Text>Home</Text>
  //     </View>
  // )


  return (
    <Tabs screenOptions={{ tabBarInactiveBackgroundColor: 'black', tabBarActiveBackgroundColor: 'black', tabBarInactiveTintColor: 'gray', tabBarActiveTintColor: 'white' ,}}>
       <Tabs.Screen
        name="screens/Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-row items-center">
              <Feather name="home" size={24} color={focused ? 'white' : 'gray'} />
            </View>
          ),
          headerShown: false,
          title: 'Home',
        }}
      />

      <Tabs.Screen name='screens/Chats' options={{ tabBarIcon: ({focused}) => (
        <View style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Fontisto name="heart-alt" size={24} color={focused ? 'white' : 'gray'} />
        </View>
   ), headerShown: false, title: 'Wishlist' }} />
      <Tabs.Screen name='screens/Add' options={{ tabBarIcon: ({focused}) => (
        <View >
        <Ionicons name='notifications-outline' size={30} color={focused ? 'white' : 'gray'}  />
      </View>
   ), headerShown: false, title: 'notification' }} />
      <Tabs.Screen name='screens/Profile' options={{ tabBarIcon: ({focused}) => (
        <View style={{  }}>
        <Ionicons name='person-circle-outline' size={30} color={focused ? 'white' : 'gray'} />
      </View>
   ), headerShown: false, title: 'profile' }}/>
      
    </Tabs>
  )
}

export default Rootlayout
