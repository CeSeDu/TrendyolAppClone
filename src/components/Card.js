import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
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

const Card = ({products}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`flex-row p-2 bg-white shadow-lg`}>
      {products.map(product => (
        <View
          key={product.id}
          style={tw`bg-white rounded-lg shadow-lg mb-4 mr-4`}>
          <TouchableOpacity
            style={tw`bg-white rounded-full flex-row items-center justify-center shadow-lg absolute z-10 right-2 top-2 w-8 h-8`}>
            <Icon name="heart-outline" size={20} color="gray" />
          </TouchableOpacity>
          <View style={tw`w-40 h-40`}>
            <Image
              source={{uri: product.image}}
              style={tw`w-full h-full rounded-t-lg`}
            />
          </View>
          <View style={tw`${getLabelColor(product.label)}`}>
            <Text style={tw`text-xs text-center text-white`}>{product.label}</Text>
          </View>
          <View style={tw`p-2`}>
            <View style={tw`flex-row items-center my-2`}>
              <Text style={tw`text-gray-500 w-24`}>
                <Text style={tw`font-bold`}>{product.name} </Text>
                {product.description}
              </Text>
            </View>
            <Text style={tw`text-orange-500`}>{product.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Card;
