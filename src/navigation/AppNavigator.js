// src/navigation/AppNavigator.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import LoginScreen from '../screens/LoginScreen';
import CartStackScreen from './CartStackScreen';
import AccountScreen from '../screens/AccountScreen';
import FavoritesStackScreen from './FavoritesStackScreen';
import CollectionAdd from '../components/CollectionAdd';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator({ cart, addToCart, removeFromCart }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CartStack') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'AccountStack') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'FavoritesStack') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white' },
      })}
    >
      <Tab.Screen name="HomeStack">
        {props => <HomeStackScreen {...props} addToCart={addToCart} />}
      </Tab.Screen>
      <Tab.Screen name="FavoritesStack" component={FavoritesStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="CartStack">
        {props => <CartStackScreen {...props} cart={cart} removeFromCart={removeFromCart} />}
      </Tab.Screen>
      <Tab.Screen name="AccountStack" component={AccountScreen} />
      <Tab.Screen name="CollectionAdd" component={CollectionAdd} options={{ tabBarButton: () => null }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Ürün sepete eklendi');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <BottomTabNavigator {...props} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
