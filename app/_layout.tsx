import { Slot } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalProvider } from '@/components/GlobalSearch'; 

export default function Layout() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Slot /> 
      </GlobalProvider>
    </NavigationContainer>
  );
}
