import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import images from '../../constants/Image'// Update with the correct path to the file containing your image exports

const EmergencyPage = () => {
  const handleEmergency = async() => {
    try {
      // Send a mock signal to the backend
      const response = await fetch('https://your-backend-url.com/api/emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ signal: 'EmergencyON' }),
      });

      if (response.ok) {
        // Mock signal successfully sent
        console.log('Signal Sent', 'Emergency signal has been sent.');
        router.push('/(EmergenySelection)/SicknessPage');
      } else {
        // Handle backend errors
        console.log('Error', 'Failed to send the emergency signal.');
      }
    } catch (error) {
      // Handle network errors
      console.log('Error', 'An error occurred while sending the signal.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Emergency Button */}
      <TouchableOpacity onPress={handleEmergency} style={styles.emergencyButton}>
        <Image source={images.EmergencyOff} style={styles.buttonImage} />
      </TouchableOpacity>

      <Text style={styles.text}>Click the Emergency Button</Text>
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
    width: 300, // Adjust size to fit your design
    height: 300, // Adjust size to fit your design
    resizeMode: 'contain',
    borderRadius: 180
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});
