import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Route } from 'expo-router/build/Route';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { RouterStore } from 'expo-router/build/global-state/router-store';
import { router } from 'expo-router';


const HostelPage = () => {
  return (
    <View style={styles.container}>    
      <AntDesign name="arrowleft" size={30} color="black" style={{marginTop:29, marginLeft:10}}/>
      <View style={{backgroundColor:"white",marginTop:37,borderTopLeftRadius:35, borderTopRightRadius:35, 
        borderBottomLeftRadius:15,borderBottomRightRadius:15, padding:10,}}>
      <Text style={{fontSize:25, fontWeight:"bold", marginVertical:20}}>Select Hostel</Text>

      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginVertical:15}} >
        <Text style={{fontSize:20,padding:15}}>New Elizabeth Hall</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", fontWeight:"bold"}}>
        <Text style={{fontSize:20,padding:15}}>Elizabeth 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginVertical:15}} >
        <Text style={{fontSize:20,padding:15}}> Elizabeth 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black"}} >
        <Text style={{fontSize:20,padding:15}}>Elizabeth 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black",  marginVertical:15}} >
        <Text style={{fontSize:20,padding:15}}>Guest House</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black"}} >
        <Text style={{fontSize:20,padding:15}}>Daniel 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black",  marginVertical:15}} >
        <Text style={{fontSize:20,padding:15}}>House of Daniel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginBottom:15}} >
        <Text style={{fontSize:20,padding:15}}>Regional House</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginBottom:30}} >
        <Text style={{fontSize:20,padding:15}}>Chapel</Text>
      </TouchableOpacity>
      </View>
     
    </View>
   
  )
}

export default HostelPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
     
      },
})