import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'


const {width, height} = Dimensions.get("window")
const isTablet = width >= 768


export default function CreateAccount() {

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.topText}>Create Account--</Text>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  subcontainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: isTablet ? 30 : 20,
    paddingBottom: 20, // Optional padding for the bottom
    position: 'absolute',
    bottom: 0,
  },
  topText: {
    fontSize: isTablet ? 50 : 40, // Adjusted font size for tablets
    color: "blue",
    fontWeight: "500",
    textAlign: "left"
  },
});
