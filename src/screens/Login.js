import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import HelperText from '../components/HelperText';
import {login} from '../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email, password) => {
    dispatch(login(email, password));

    navigation.navigate('TodoStack', {screen: 'Todos'});
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      <Input
        placeholder={'Email'}
        value={email}
        keyboardType={'email-address'}
        style={styles.input}
        onChangeText={(val) => {
          setEmail(val);
        }}
      />
      <Input
        placeholder={'Password'}
        value={password}
        name={password}
        style={styles.input}
        secureTextEntry
        onChangeText={(val) => {
          setPassword(val);
        }}
      />
      <Button
        title={'LOGIN'}
        style={styles.btn}
        onPress={() => {
          handleLogin(email, password);
        }}
      />
      <HelperText
        title={"Don't have an account? Sign up here"}
        style={styles.links}
        onPress={() => {
          navigation.navigate('Signup');
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

  input: {
    marginVertical: 10,
  },

  btn: {
    marginTop: 15,
  },
  links: {
    marginTop: 20,
  },
});

export default Login;
