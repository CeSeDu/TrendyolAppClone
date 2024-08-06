import React, { useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

function CartScreen({ navigation, cart, removeFromCart }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {}),
  );

  const handleQuantityChange = (productId, action) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]:
        action === 'increase'
          ? prevQuantities[productId] + 1
          : Math.max(prevQuantities[productId] - 1, 1),
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = product.price ? parseFloat(product.price.replace(' TL', '').replace(',', '.')) : 0;
      return total + price * quantities[product.id];
    }, 0);
  };

  const renderProduct = ({ item: product }) => (
    <View style={tw`w-full p-2`}>
      <View style={tw`flex-row items-center justify-between`}>
        <CheckBox
          checked={checkedItems[product.id] || false}
          onPress={() =>
            setCheckedItems(prevCheckedItems => ({
              ...prevCheckedItems,
              [product.id]: !prevCheckedItems[product.id],
            }))
          }
          checkedColor="orange"
        />
        <Image source={{ uri: product.url }} style={tw`w-24 h-24`} />
        <View style={tw`flex-1`}>
          <View style={tw`flex-row ml-4`}>
            <Text style={tw`font-bold`}>{product.name}</Text>
            <Text>{product.description}</Text>
            <TouchableOpacity onPress={() => removeFromCart(product.id)}>
              <Icon name="trash-outline" size={20} color="black" style={tw`self-end`} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row items-center justify-between p-4`}>
            <View style={tw`flex-row justify-between `}>
              <View style={tw`flex-row items-center border border-gray-200 px-4 rounded-full`}>
                <TouchableOpacity onPress={() => handleQuantityChange(product.id, 'decrease')}>
                  <Text style={tw`text-lg text-gray-400 `}>-</Text>
                </TouchableOpacity>
                <View style={tw`bg-orange-100 p-1 m-1 rounded-full`}>
                  <Text style={tw`mx-2 text-orange-600`}>{quantities[product.id]}</Text>
                </View>
                <TouchableOpacity onPress={() => handleQuantityChange(product.id, 'increase')}>
                  <Text style={tw`text-lg text-orange-600`}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={tw`font-bold text-orange-600`}>{product.price || 'Fiyat Bilgisi Yok'}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={cart}
        renderItem={renderProduct}
        keyExtractor={(product) => product.id.toString()}
        contentContainerStyle={tw`p-2`}
      />
      <View style={tw`p-4 border-t border-gray-300 bg-white`}>
        {showSummary && (
          <View style={tw`my-4 p-4 bg-white rounded-lg border border-gray-300 w-full`}>
            <View style={tw`w-full flex-row justify-between rounded-lg`}>
              <Text>Ara Toplam</Text>
              <Text>{calculateTotal().toFixed(2)} TL</Text>
            </View>
            <View style={tw`w-full flex-row justify-between rounded-lg`}>
              <Text>Kargo</Text>
              <Text>xxx</Text>
            </View>
            <View style={tw`border border-gray-300 m-2`}></View>
            <Text style={tw`text-lg font-bold flex-row w-full justify-between`}>
              Toplam: {calculateTotal().toFixed(2)} TL
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => setShowSummary(!showSummary)}
          style={tw`flex-row items-center justify-between rounded-lg`}>
          <Icon name={showSummary ? 'chevron-down' : 'chevron-up'} size={20} color="orange" />
          <View>
            <Text>Toplam</Text>
            <Text style={tw`text-orange-600 font-bold`}>{calculateTotal().toFixed(2)} TL</Text>
            <Text style={tw`text-green-500`}>Kargo Bedava</Text>
          </View>
          <View style={tw`w-3/5 items-center justify-between bg-orange-500 p-2 mt-2 rounded-lg`}>
            <Text style={tw`text-white text-lg font-bold`}>Sepet Onayla</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default CartScreen;
