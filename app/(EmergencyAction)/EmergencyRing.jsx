import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useGlobal } from '@/components/GlobalSearch'; // Access updated context
import images from '../../constants/Image';

const EmergencyPage = () => {
  const router = useRouter();
  const { emergencyAlert, setEmergencyAlert, sickness, hostelname } = useGlobal(); // Access emergencyAlert state and other global values
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (emergencyAlert) {
      console.log('Emergency alert received!');
      
      // Handle the emergency alert here (e.g., show notifications, start sounds)
      
      // Optionally, reset the emergency alert state after processing
      setEmergencyAlert(false); // Reset after handling the alert
    }
  }, [emergencyAlert]);

  const handleEmergency = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://your-backend-url.com/api/emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          signal: 'EmergencyON',
          sickness: sickness || 'Unknown',
          hostelname: hostelname || 'Unknown',
        }),
      });

      if (response.ok) {
        console.log('Signal Sent: Emergency signal has been sent.');
        router.push('/(EmergencyAction)/EmergencyRing'); // Navigate to the emergency action page
      } else {
        console.log('Error: Failed to send the emergency signal.');
      }
    } catch (error) {
      console.log('Error: An error occurred while sending the signal.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <>
          <TouchableOpacity onPress={handleEmergency} style={styles.emergencyButton}>
            <Image source={images.EmergencyOff} style={styles.buttonImage} />
          </TouchableOpacity>
          <Text style={styles.text}>Click the Emergency Button</Text>
        </>
      )}
    </View>
  );
};

export default EmergencyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1142BE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  emergencyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 180,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});
