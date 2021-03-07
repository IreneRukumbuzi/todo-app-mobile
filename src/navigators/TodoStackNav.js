import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodoList from '../screens/TodoList';

const TodoStack = createStackNavigator();

const TodoStackNav = () => {
  return (
    <TodoStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TodoStack.Screen name={'Todos'} component={TodoList} />
    </TodoStack.Navigator>
  );
};

export default TodoStackNav;
