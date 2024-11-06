import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ConfirmationPage = () => {
  return (
    <View style={styles.container}>
      <Text>ConfirmationPage</Text>
    </View>
  )
}

export default ConfirmationPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
      },
})