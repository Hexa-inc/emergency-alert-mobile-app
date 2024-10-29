import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CreateAccount() {

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
          <Text style={styles.topText}>Create Account</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "blue",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
    },
    subcontainer: {
       borderTopStartRadius: 40,
    },
    topText: {
        fontSize: 40,
        color: "blue",
    },
    
})