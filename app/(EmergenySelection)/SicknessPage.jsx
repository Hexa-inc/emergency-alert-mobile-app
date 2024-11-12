import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Route } from 'expo-router/build/Route';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const SicknessPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <AntDesign name="arrowleft" size={30} color="black" style={{marginTop:29, marginLeft:10}} />
      <View style={{backgroundColor:"white",marginTop:37,borderTopLeftRadius:35, borderTopRightRadius:35, padding:10,}}>
      <Text style={{fontSize:25, fontWeight:"bold", marginVertical:20}}>Sickness</Text>

      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginVertical:15}} >
        <Text style={{fontSize:20,padding:15}}>Allergic Reaction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black"}}>
        <Text style={{fontSize:20,padding:15}}>Anxiety/Panic disorder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginVertical:15}}>
        <Text style={{fontSize:20,padding:15}}>Bleeding</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black"}}>
        <Text style={{fontSize:20,padding:15}}>Chestpain</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black",  marginVertical:15}}>
        <Text style={{fontSize:20,padding:15}}>Difficulty Breathing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black"}}>
        <Text style={{fontSize:20,padding:15}}>Fainting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black",  marginVertical:15}}>
        <Text style={{fontSize:20,padding:15}}>Heat Stroke</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black",}}>
        <Text style={{fontSize:20,padding:15}}>Menstrual Cramps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginVertical:15}}>
        <Text style={{fontSize:20,padding:15}}>Seizures</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", }}>
        <Text style={{fontSize:20,padding:15}}>Ulcer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginBottom:15}}>
        <Text style={{fontSize:20,padding:15}}>Viral infection</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:20, borderWidth:1, borderColor:"black", marginBottom:60}}>
        <Text style={{fontSize:20,padding:15}}>Poisonous intake</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}

export default SicknessPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
       
      },
})