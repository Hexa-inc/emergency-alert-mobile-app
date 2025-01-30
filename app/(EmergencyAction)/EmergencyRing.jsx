import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Text, ActivityIndicator } from 'react-native';
import { startBackgroundService, stopBackgroundService } from '@/services/backgroundService'; // Adjust path to your background service file
import { useGlobal } from '@/components/GlobalSearch'; // Import global context for emergency alert state
import images from '../../constants/Image';

const EmergencyRing = () => {
  const { emergencyAlert, setEmergencyAlert } = useGlobal(); // Access global context
  const [loading, setLoading] = useState(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the background service to listen for alerts
    startBackgroundService();

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

    // Cleanup function to stop the background service when component unmounts
    return () => {
      stopBackgroundService(); // Stop the background service when the component unmounts
    };
  }, [shakeAnim]);

  // Handle emergency alert state
  useEffect(() => {
    if (emergencyAlert) {
      console.log('Emergency alert received!');
      // Reset alert state after handling it
      setEmergencyAlert(false);
      // Optionally, add further alert handling logic
    }
  }, [emergencyAlert]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <>
          <Animated.Image
            style={[styles.buttonImage, { transform: [{ translateX: shakeAnim }] }]}
            source={images.alertBell}
          />
          <Text style={styles.text}>RINGING..</Text>
        </>
      )}
    </View>
  );
};

export default EmergencyRing;

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
    borderRadius: 180,
  },
  text: {
    color: '#ffffff',
    fontSize: 46,
  },
});
