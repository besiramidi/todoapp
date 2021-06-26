import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import Todo from '../Todo';
import Notes from './Notes';
import CreateNote from './CreateNote';

const { Navigator, Screen } = createBottomTabNavigator();


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='To Do'/>
    <BottomNavigationTab title='Notes'/>
  </BottomNavigation>
);

const TabNavigator = ({navigation}) => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Todo' component={Todo}/>
    <Screen name='Notes' component={Notes}/>
    <Screen name='CreateNote' component={CreateNote}/>
  </Navigator>
);

const Main = () => (
  <NavigationContainer>
    <TabNavigator/>
    
  </NavigationContainer>
);

export default Main;