import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SicknessPage = () => {
  return (
    <View style={styles.container}>
      <Text>SicknessPage</Text>
    </View>
  )
}

export default SicknessPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
      },
})