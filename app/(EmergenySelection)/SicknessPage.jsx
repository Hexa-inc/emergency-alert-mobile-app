import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const SicknessPage = () => {
  const router = useRouter();

  const handleSelectSickness = async (sickness) => {
    try {
      // Mock backend request
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second delay

      console.log(`Selected sickness: ${sickness}`); // Logs the selected sickness

      // Navigate to the next page
      router.push('/ConfirmationPage'); // Replace '/nextSicknessPage' with your actual route
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <AntDesign name="arrowleft" size={30} color="black" style={{ marginTop: 29, marginLeft: 10 }} />
        <View style={styles.sicknessContainer}>
          <Text style={styles.header}>Sickness</Text>

          {[
            'Allergic Reaction', 'Anxiety/Panic disorder', 'Bleeding', 'Chestpain', 'Difficulty Breathing',
            'Fainting', 'Heat Stroke', 'Menstrual Cramps', 'Seizures', 'Ulcer', 'Viral infection', 'Poisonous intake'
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
  sicknessContainer: {
    backgroundColor: 'white',
    marginTop: 37,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,
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
