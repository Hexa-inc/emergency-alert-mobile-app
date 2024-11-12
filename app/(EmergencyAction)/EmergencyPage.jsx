import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmergencyPage = () => {
  return (
    <View style={styles.container}>
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