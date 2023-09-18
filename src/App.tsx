import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionList from './components/QuestionList';
import Answer from './components/Answer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionList">
        <Stack.Screen name="QuestionList" component={QuestionList} />
        <Stack.Screen name="Answer" component={Answer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

