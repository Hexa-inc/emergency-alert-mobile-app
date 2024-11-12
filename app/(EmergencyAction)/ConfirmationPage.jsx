import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const ConfirmationPage = () => {
  return (
    <View style={styles.container}>
      {/* <Text>ConfirmationPage</Text> */}
      {/* <Image source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/017/350/123/small/green-check-mark-icon-in-round-shape-design-png.png'}} style={{}}/> */}
      <View style={{backgroundColor:"green", borderRadius:100,}}>
      <Entypo name="check" size={45} color="white" style={{padding:10}}/>
      </View>
      <Text style={{textAlign:"center", fontSize:24, fontWeight:"condensed"}}>Sent</Text>
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