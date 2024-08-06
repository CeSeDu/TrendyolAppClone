import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import axios from 'axios';
import tw from 'twrnc';
import Card from '../components/Card';

const ProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log('veriler alınamadı', error);
      })
  }, []);

  const renderProduct = ({ item: product }) => (
    <View style={tw`w-1/2 p-2`}>
      <Card product={product} navigation={navigation} />
    </View>
  );

  return (
    <View style={tw`flex-1 p-2`}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(product) => product.id.toString()}
          numColumns={2}
          contentContainerStyle={tw`p-2`}
        />
      ) : (
        <Text>Ürünler yükleniyor....</Text>
      )}
    </View>
  );
}

export default ProductsScreen;
