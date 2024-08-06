import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';

const getLabelColor = label => {
  switch (label) {
    case 'Çok Al Az Öde':
      return 'bg-orange-600';
    case 'Kargo Bedava':
      return 'bg-gray-600';
    case 'Kupon Ürünü':
      return 'bg-pink-500';
    default:
      return 'bg-gray-200';
  }
};

const Card = ({ product, horizontal, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product })}
      style={tw`bg-white rounded-lg shadow-lg mb-4 ${horizontal ? 'mr-4 w-40' : 'w-full'}`}
    >
      <View style={tw`bg-white rounded-full flex-1 items-center justify-center shadow-lg absolute z-10 right-2 top-2 w-8 h-8`}>
        <Icon name="heart-outline" size={20} color="gray" />
      </View>
      <View style={tw`${horizontal ? 'w-40 h-40' : 'w-full h-40'}`}>
        <Image
          source={{ uri: product.url }}
          style={tw`w-full h-full rounded-t-lg`}
        />
      </View>
      <View style={tw`${getLabelColor(product.label)}`}>
        <Text style={tw`text-xs text-center text-white`}>{product.label}</Text>
      </View>
      <View style={tw`p-2`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-gray-500 h-12 ${horizontal ? 'w-full' : 'w-24'}`}>
            <Text style={tw`font-bold`}>{product.id} </Text>
            {product.title}
          </Text>
        </View>
        <Text style={tw`text-orange-500`}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
