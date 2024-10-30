import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HostelPage = () => {
  return (
    <View style={styles.container}>
      <Text>HostelPage</Text>
    </View>
  )
}

export default HostelPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center",
        alignSelf: "center",
        width: "100%"
      },
})