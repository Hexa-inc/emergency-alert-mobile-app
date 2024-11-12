import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ConfirmationPage = () => {
  return (
    <View style={styles.container}>
      <Text>ConfirmationPage</Text>
      <Image source={{uri: 'https://thumbs.dreamstime.com/b/green-check-mark-icon-circle-tick-symbol-color-vector-illustration-145388687.jpg'}} style={{}}/>
      <Text style={{textAlign:"center"}}>Sent</Text>
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