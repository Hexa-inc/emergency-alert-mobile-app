import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import Input from '@/components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'expo-checkbox';

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

type Errors = {
  firstname: string | null;
  email: string | null;
  password: string | null;
};

export default function CreateAccount() {
  const [firstname, setFirstname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const [error, setErrors] = useState<Errors>({
    firstname: null,
    email: null,
    password: null
  });

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
      password: password.trim() === '' ? 'Password is required' : null,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== null) && isChecked) {
      router.navigate("./");
    } else if (!isChecked) {
      alert('Please agree to the terms and conditions');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.topText}>Create Account</Text>

        <View style={styles.inputContainer}>
          <Input value={firstname} setValue={setFirstname} placeholder='First Name' error={error.firstname} />
        </View>

        <View style={styles.inputContainer}>
          <Input value={email} setValue={setEmail} placeholder='E-mail' error={error.email} />
        </View>

        <View style={styles.inputContainer}>
          <Input value={password} setValue={setPassword} placeholder='Password' error={error.password} />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? 'blue' : undefined} // Checkbox color
          />
          <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
        </View>

        <Link href={"./HostelPage"} style={styles.SigninButton} onPress={handleContinue}>
          
          <Text style={styles.SigninButtonText}>Sign Up</Text>
        </Link>

        <Text style={styles.signinTerms}>By signing in you agree to our Terms of Service and Privacy Policy.</Text>
      </View>
    </View>
  )
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
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
  },
  topText: {
    fontSize: isTablet ? 50 : 40,
    color: "blue",
    fontWeight: "500",
    textAlign: "left",
    padding: 20,
  },
  inputContainer: {
    width: "100%",
    bottom: "3.6%",
    left: "3%",
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  SigninButton: {
    flexDirection: 'row', // Positions text and icon side-by-side
    alignItems: 'center',
    justifyContent: 'center', // Centers content horizontally
    marginTop: 20,
    paddingVertical: 12, // Additional padding for vertical centering
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 17,
    alignSelf: "center", // Centers button in its container
    minWidth: 200, // Set minimum width as needed,
    width: "80%",
    // height: "13%",
    alignContent: 'center',
    textAlign: "center"
  },
  
  SigninButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center', // Ensures text is centered within the button
    
    
  },

  signinTerms: {
    padding: 13,
  }
});
