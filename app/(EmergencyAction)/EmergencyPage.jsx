import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useGlobal } from '@/components/GlobalSearch'; // Import global context
import images from '../../constants/Image'; // Ensure correct path

const EmergencyPage = () => {
  const router = useRouter();
  const { sickness, hostelname } = useGlobal(); // Single destructuring

  const handleEmergency = async () => {
    try {
      const response = await fetch('https://your-backend-url.com/api/emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          signal: 'EmergencyON',
          sickness: sickness || 'Unknown', 
          hostelname: hostelname || 'Unknown'
        }),
      });

      if (response.ok) {
        console.log('Signal Sent: Emergency signal has been sent.');
        console.log(`Sickness: ${sickness}`);
        console.log(`Hostel: ${hostelname}`);

        router.push('/(EmergencyAction)/EmergencyRing'); // Navigate to Emergency Action page
      } else {
        console.log('Error: Failed to send the emergency signal.');
      }
    } catch (error) {
      console.log('Error: An error occurred while sending the signal.');
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
    width: 300, 
    height: 300, 
    resizeMode: 'contain',
    borderRadius: 180
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});
