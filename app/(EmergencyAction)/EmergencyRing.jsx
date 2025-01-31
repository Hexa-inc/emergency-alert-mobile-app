import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Text, ActivityIndicator } from 'react-native';
import { startBackgroundService, stopBackgroundService } from '@/services/backgroundService'; // Ensure path is correct
import { useGlobal } from '@/components/GlobalSearch'; // Global state for emergency alert
import images from '../../constants/Image';

const EmergencyRing = () => {
  const { emergencyAlert, setEmergencyAlert } = useGlobal(); 
  const [loading, setLoading] = useState(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start background service only if it's not already running
    startBackgroundService();

    return () => {
      stopBackgroundService(); // Cleanup when component unmounts
    };
  }, []);

  useEffect(() => {
    // Function to trigger the shake animation
    const shake = () => {
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
      ]).start();
    };

    // Start shaking only when an emergency alert is received
    if (emergencyAlert) {
      console.log('Emergency alert received!');
      shake();
      setEmergencyAlert(false); // Reset alert state after handling it
    }
  }, [emergencyAlert]); // Only trigger when emergencyAlert changes

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
  buttonImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 180,
  },
  text: {
    color: '#ffffff',
    fontSize: 46,
  },
});
