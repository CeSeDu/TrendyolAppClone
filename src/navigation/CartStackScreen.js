// src/navigation/CartStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const CartStack = createStackNavigator();

function CartStackScreen({ cart, removeFromCart }) {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Sepetim" options={{ headerShown: false }} >
        {props => <CartScreen {...props} cart={cart} removeFromCart={removeFromCart}  />}
      </CartStack.Screen>
      <CartStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
    </CartStack.Navigator>
  );
}

export default CartStackScreen;
