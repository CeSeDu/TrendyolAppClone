import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const AccountStack = createStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Hesabım" component={AccountScreen} />
      <AccountStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;
