import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import products from '../data/products';
import CollectionAdd from '../components/CollectionAdd';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Sepetim') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Hesabım') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Favorilerim') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorilerim">
        {props => <FavoritesScreen {...props} products={products}/>}
      </Tab.Screen>
      <Tab.Screen name="Sepetim">
        {props => <CartScreen {...props} products={products} />}
      </Tab.Screen>
      <Tab.Screen name="Hesabım" component={AccountScreen} />
      <Tab.Screen name="CollectionAdd" component={CollectionAdd} options={ {tabBarButton: () => null}} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
