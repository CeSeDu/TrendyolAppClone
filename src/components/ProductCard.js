import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Card, CheckBox, Image, Text } from 'react-native-elements';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
const mockProducts = [
  {
    id: 1,
    name: 'Ürün 1',
    description: 'Bu ürünün açıklaması',
    image: 'https://sky-static.mavi.com/mnresize/1430/2028/1210984-88692_image_1.jpg?_gl=1*4bohuu*_gcl_au*NzU2NjcyNTUuMTcyMjM2OTU5Mw..*_ga*MTk4ODQ4NzY2OC4xNzIyMzY5NTky*_ga_7WH23VFW0P*MTcyMjM2OTU5Mi4xLjEuMTcyMjM2OTYxNS4zOC4wLjA.',
    price: '100 TL',
    rating: 4,
  },
  {
    id: 2,
    name: 'Ürün 2',
    description: 'Bu ürünün açıklaması',
    image: 'https://sky-static.mavi.com/mnresize/1430/2028/1210984-88692_image_1.jpg?_gl=1*4bohuu*_gcl_au*NzU2NjcyNTUuMTcyMjM2OTU5Mw..*_ga*MTk4ODQ4NzY2OC4xNzIyMzY5NTky*_ga_7WH23VFW0P*MTcyMjM2OTU5Mi4xLjEuMTcyMjM2OTYxNS4zOC4wLjA.',
    price: '200 TL',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ürün 3',
    description: 'Bu ürünün açıklaması',
    image: 'https://sky-static.mavi.com/mnresize/1430/2028/1210984-88692_image_1.jpg?_gl=1*4bohuu*_gcl_au*NzU2NjcyNTUuMTcyMjM2OTU5Mw..*_ga*MTk4ODQ4NzY2OC4xNzIyMzY5NTky*_ga_7WH23VFW0P*MTcyMjM2OTU5Mi4xLjEuMTcyMjM2OTYxNS4zOC4wLjA.',
    price: '150 TL',
    rating: 3,
  },
  // Daha fazla ürün ekleyebilirsiniz
];

const ProductCard = () => {
 
  const renderProduct = ({ item }) => (

    <>
    <Card containerStyle={tw`rounded-lg p-0 m-2`}>
      <View style={tw`flex-row items-center justify-between`}>
        <Image source={{ uri: item.image }} style={tw`w-24 h-32 m-5`} />
        <View style={tw`flex-1 p-2`}>
          <Text style={tw`font-bold`}>{item.name}</Text>
          <Text style={tw`w-54`}>{item.description}</Text>
          <View style={tw`flex-row my-2`}>
            {Array.from({ length: 5 }, (_, index) => (
              <Icon
                key={index}
                name="star"
                size={20}
                color={index < item.rating ? 'orange' : 'gray'}
              />
            ))}
          </View>
          <Text style={tw`text-orange-600`}>{item.price}</Text>
          <View style={tw`flex-row items-center justify-between p-4`}>
            <TouchableOpacity style={tw`border-gray-600 border p-2 rounded-lg`}>
              <Text style={tw`text-gray-600`}>Tek Ebat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`border-orange-600 border p-2 rounded-lg`}>
              <Text style={tw`text-orange-600`}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
    </>
  );

  return (
    <FlatList
      data={mockProducts}
      renderItem={renderProduct}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ProductCard;
