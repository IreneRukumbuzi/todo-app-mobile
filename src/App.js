import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './redux/store';
import AuthStackNav from './navigators/AuthStackNav';
import TodoStackNav from './navigators/TodoStackNav';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name={'AuthStack'} component={AuthStackNav} />
            <RootStack.Screen name={'TodoStack'} component={TodoStackNav} />
          </RootStack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

export default App;
