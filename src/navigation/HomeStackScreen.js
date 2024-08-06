import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen({ addToCart }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="ProductDetail">
        {props => <ProductDetailScreen {...props} addToCart={addToCart} options={{ headerShown: false }} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
