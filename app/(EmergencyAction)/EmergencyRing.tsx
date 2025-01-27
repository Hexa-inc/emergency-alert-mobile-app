import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Animated } from 'react-native'
import images from '../../constants/Image'

const EmergencyRing = () => {

    const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Run the shake animation when the component mounts
    const shake = () => {
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10, // Move right
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10, // Move left
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0, // Center back
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => shake()); 
    };

    shake(); 

  }, [shakeAnim]);

  return (
    <View style={styles.container}>
       <Animated.Image
        style={[styles.buttonImage, { transform: [{ translateX: shakeAnim }] }]}
        source={images.alertBell}
      />
    </View>
  )
}

export default EmergencyRing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1142BE',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      alertButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonImage: {
        width: 300, // Adjust size to fit your design
        height: 300, // Adjust size to fit your design
        resizeMode: 'contain',
        borderRadius: 180
      },
      text: {
        color: '#ffffff',
        fontSize: 16,
      },
})