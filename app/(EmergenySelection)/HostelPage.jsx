import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Link, { useRouter } from 'expo-router';

const HostelPage = () => {
  const router = useRouter();

  const handleSelectHostel = async (hostelName) => {
    try {
      // Mock backend request
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second delay

      console.log(`Selected hostel: ${hostelName}`); // Logs the selected hostel

      // Navigate to the next page
      router.push('/EmergencyPage'); // Replace '/nextPage' with your actual route
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>    
      
      <AntDesign name="arrowleft" size={30} color="black" style={{ marginTop: 29, marginLeft: 10 }} />
      
      <View style={styles.hostelContainer}>
        <Text style={styles.header}>Select Hostel</Text>

        {['New Elizabeth Hall', 'Elizabeth 1', 'Elizabeth 2', 'Elizabeth 3', 'Guest House', 'Daniel 1', 'House of Daniel', 'Regional House', 'Chapel'].map((hostel, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.hostelButton} 
            onPress={() => handleSelectHostel(hostel)}>
            <Text style={styles.hostelText}>{hostel}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HostelPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  hostelContainer: {
    backgroundColor: 'white',
    marginTop: 37,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  hostelButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 14,
  },
  hostelText: {
    fontSize: 20,
    padding: 14,
  },
});
