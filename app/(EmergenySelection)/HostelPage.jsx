import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import  { useRouter, Link } from 'expo-router';

const HostelPage = () => {
  const router = useRouter();

  const handleSelectHostel = async (hostelName) => {
    try {
      // Mock backend request
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second delay

      console.log(`Selected hostel: ${hostelName}`); // Logs the selected hostel

      // Navigate to the next page
      router.push('/(EmergencyAction)/EmergencyPage'); // Replace '/nextPage' with your actual route
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>    
      <Link asChild href={'/'}>
      <AntDesign name="arrowleft" size={30} color="white" style={{ marginTop: 29, marginLeft: 10 }} />
      </Link>
      <View style={styles.hostelContainer}>
        <Text style={styles.header}>Select Hostel</Text>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {['New Elizabeth Hall', 'Elizabeth 1', 'Elizabeth 2', 'Elizabeth 3', 'Guest House', 'Daniel 1', 'House of Daniel', 'Regional House', 'Chapel'].map((hostel, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.hostelButton} 
              onPress={() => handleSelectHostel(hostel)}>
              <Text style={styles.hostelText}>{hostel}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    
    padding: 10,
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
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
