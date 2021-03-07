import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Todo from '../components/Todo';
import Input from '../components/Input';

const TodoList = () => {
  const handleAdd = () => {
    console.log('Heyyyy');
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Today's tasks</Text>

      <View style={styles.todos}>
        <Todo text="Hello" />
        <Todo text="You" />
      </View>

      <KeyboardAvoidingView
        style={styles.writeTask}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Input style={styles.inputText} placeholder={'Write a task'} />
        <TouchableOpacity>
          <View style={styles.addSign}>
            <Text style={styles.addText} onPress={() => handleAdd()}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },

  wrapper: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#E8EAED',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#55BCF6',
  },
  writeTask: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addSign: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#55BCF6',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
  },
  inputText: {
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: '#fff',
    width: '70%',
    fontSize: 16,
    borderColor: '#55BCF6',
    borderWidth: 1,
    margin: 20,
  },
});

export default TodoList;
