import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Route } from 'expo-router/build/Route'
import { router } from 'expo-router'

const EmergencyPage = () => {
  return (
    <View style={styles.container} onPress={router.navigate('./SicknessPage')}>
      <Text>EmergencyPage</Text>
    </View>
  )
}

export default EmergencyPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
      },
})