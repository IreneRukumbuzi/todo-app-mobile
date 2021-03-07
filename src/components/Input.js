import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

const Input = ({style, ...props}) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: '#000',
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 16,
    fontSize: 18,
  },
});

export default Input;
