import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Main from './components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Main/>
  </ApplicationProvider>
);