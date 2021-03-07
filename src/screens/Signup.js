import React from 'react';
import {View, StyleSheet} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import HelperText from '../components/HelperText';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>SIGN UP</Heading>
      <Input placeholder={'Name'} style={styles.input} />
      <Input
        keyboardType={'email-address'}
        style={styles.input}
        placeholder={'Email'}
      />
      <Input style={styles.input} secureTextEntry placeholder={'Password'} />
      <Button title={'Sign up'} style={styles.btn} onPress={() => {
        navigation.navigate('Todos', {screen: 't'})
      }} />
      <HelperText
        title={'Already have an account? Login here'}
        style={styles.links}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 140,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    marginBottom: 30,
  },

  links: {
    marginTop: 20,
  },

  input: {
    marginVertical: 10,
  },

  btn: {
    marginTop: 18,
  },
});

export default Signup;
