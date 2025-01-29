import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, ScrollView } from 'react-native';
import {Camera} from 'expo-camera'
import {Ionicons} from '@expo/vector-icons'

function TitleBar() {
  return (
    <View>
      <TextInput placeholder='Ask Meta AI or Search' style={styles.searchBar} />
      <View style={styles.subTitleBar}>
        <Text style={styles.subTitleBar_active}>All</Text>
        <Text style={styles.subTitleBar_child}>Unread</Text>
        <Text style={styles.subTitleBar_child}>Groups</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111827',
      paddingTop: 100,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 20
    },
  
    text : {
      color: '#fff',
      fontSize: 30,
      fontFamily: 'sans-serif'
    },
  
   navbar_child: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 75
   },
  
   titleBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
  
   searchBar: {
    backgroundColor: '#4b5563',
    padding: 10,
    marginTop: 7,
    marginBottom: 7,
    borderRadius: 25,
    color: '#fff'
   },
  
   subTitleBar: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
    paddingBottom: 10
   },
  
   subTitleBar_child: {
   backgroundColor: '#334155',
   padding: 5,
   borderRadius: 10,
   paddingLeft: 15,
    paddingRight: 15,
    color: '#a1a1aa'
   },
  
   subTitleBar_active: {
    backgroundColor: '#166534',
    padding: 5,
    borderRadius: 10,
    paddingLeft: 15,
     paddingRight: 15,
     color: '#27AE60'
    }
  
  });
  
  
  

export default TitleBar
