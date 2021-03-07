import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Todo = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    fontSize: 18,
  },
  circular: {
    width: 16,
    height: 16,
    borderColor: '#55BCF6',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Todo;
