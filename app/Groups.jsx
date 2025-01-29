import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import Back from '../components/Button'

function Groups() {
  return (
    <View style={{ backgroundColor: '#cb98ebdc', height: '100%' }}>
        <Back />
        <View style={{ marginLeft: 85, marginRight: 10, paddingTop: 60, height: '100%', width: '78%'}}>
        <SafeAreaView>
                <Text>
                    You are not in any group
                </Text>
            </SafeAreaView>
        </View>
    </View>
  )
}

export default Groups
