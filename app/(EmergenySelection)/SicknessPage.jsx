import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import {  useRouter, Link } from 'expo-router';
import { useGlobal } from '@/components/GlobalSearch';


const SicknessPage = () => {
  const router = useRouter();
  
  const { setSickness } = useGlobal(); // Correct placement

const handleSelectSickness = async (sickness) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setSickness(sickness); // Update global state
    router.push('/(EmergencyAction)/EmergencyPage'); // Navigate
  } catch (error) {
    console.error('Error:', error);
  }
};
  return (
    <View style={styles.container}>
      <Link asChild href={'/(EmergencyAction)/EmergencyPage'}>
      <Pressable>
      <AntDesign name="arrowleft" size={30} color="white" style={{ marginTop: 29, marginLeft: 10 }} />
      </Pressable>
      </Link>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sicknessContainer}>
          <Text style={styles.header}>Sickness</Text>

          {[
            'Allergic Reaction', 'Anxiety/Panic disorder', 'Bleeding', 'Chestpain', 'Difficulty Breathing',
            'Fainting', 'Heat Stroke', 'Menstrual Cramps', 'Seizures', 'Ulcer', 'Viral infection', 'Poisonous intake',
            'Others'
          ].map((sickness, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.sicknessButton} 
              onPress={() => handleSelectSickness(sickness)}>
              <Text style={styles.sicknessText}>{sickness}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SicknessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  sicknessContainer: {
    backgroundColor: 'white',
    marginTop: 37,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  sicknessButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 14,
  },
  sicknessText: {
    fontSize: 20,
    padding: 14,
  },
});
