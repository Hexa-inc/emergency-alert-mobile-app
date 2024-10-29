import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, {useState} from 'react';
import { Link, router } from 'expo-router'
import Input from '@/components/Input';

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;


type Errors = {
  firstname: string | null;
  email: string | null;
  password: string | null;
}


export default function CreateAccount() {

   
  const [firstname, setfirstname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setErrors] = useState<Errors>({
    firstname : null,
    email : null,
    password: null
  })



  const isValidEmail = (email: string): string | null => {
    if (!email.includes('@')) {
      return 'Please enter a valid email';
    }
    return null;
  };

   
  const handleContinue = () => {
    
    const newErrors: {
      firstname: string | null;
      email: string | null;
      password: string | null;
    } = {
      firstname: firstname.trim() === '' ? 'First name is required' : null,
      email: email.trim() === '' ? 'Email is required' : isValidEmail(email),
      password: password.trim() === '' ? 'Phone number is required' : null,
  
    };
  
    setErrors(newErrors);
  
    if (!Object.values(newErrors).some((error) => error !== null)) {
      router.navigate("./");
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.topText}>Create Account</Text>

        <View style={{width: "100%", bottom: "3.6%", left: "3%"}}>
           <Input value={firstname} setValue={setfirstname} placeholder='First Name' error={error.firstname} />
        </View>

        <View style={{width: "100%", bottom: "3.6%", left: "3%"}}>
           <Input value={email} setValue={setEmail} placeholder='E-mail' error={error.email} />
        </View>

        <View style={{width: "100%", bottom: "3.6%", left: "3%"}}>
           <Input value={password} setValue={setPassword} placeholder='Password' error={error.password} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  subcontainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: isTablet ? 30 : 20,
    paddingBottom: 20, // Optional padding for the bottom
    position: 'absolute',
    bottom: 0,
  },
  topText: {
    fontSize: isTablet ? 50 : 40, // Adjusted font size for tablets
    color: "blue",
    fontWeight: "500",
    textAlign: "left"
  },
});
