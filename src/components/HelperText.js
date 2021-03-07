import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const HelperText = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#55BCF6',
    fontSize: 20,
  },
});

export default HelperText;
