import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

function Camera() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();

    function post(){
      router.push('/Post');
    }
  
    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.permission}>
        <Text style={{ textAlign: 'center', fontFamily: 'serif', color: 'white', fontSize: 20 }}>We need your permission to show the camera</Text>
        <TouchableOpacity style={{ backgroundColor: '#635A8F', width: 200, padding: 20, borderRadius: 30, marginTop: 20 }} onPress={requestPermission} > 
          <Text style={{ textAlign: 'center', fontFamily: 'serif', color: 'white' }}>Grant permission</Text>
        </TouchableOpacity>
      </View>
      );
    }
  
    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  
    return (
      <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={{ width: 60, position: 'absolute', right: 20, bottom:150, borderRadius: 100, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'  }}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <FontAwesome name="rotate-right" size={30} color="#ccc" />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#cb98ebdc', width:  50, padding: 10, position: 'absolute', right: 25, bottom:80, borderRadius: 100, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
          <TouchableOpacity onPress={post}>
          <Ionicons name="add" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  permission: {
    height: '100%',
    backgroundColor: '#cb98ebdc',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Camera
