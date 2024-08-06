import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const ProductsStack = createStackNavigator();

function ProductsStackScreen() {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }}   />
      <ProductsStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
    </ProductsStack.Navigator>
  );
}

export default ProductsStackScreen;
