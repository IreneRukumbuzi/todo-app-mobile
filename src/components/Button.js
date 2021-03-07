import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#55BCF6',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Button;
