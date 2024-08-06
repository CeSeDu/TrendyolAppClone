import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Card from '../components/Card';
import BannerCard from '../components/BannerCard';
import Icon from 'react-native-vector-icons/Ionicons';
import products from '../data/product';
import sellerBanners from '../data/SellerBanner';

const categories = [
  { id: 1, name: 'Kadın' },
  { id: 2, name: 'Erkek' },
  { id: 3, name: 'Çocuk' },
  { id: 4, name: 'Ev & Yaşam' },
  { id: 5, name: 'Elektronik' },
  // Daha fazla kategori ekleyebilirsiniz
];

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <ScrollView>
      <View style={tw`flex-row items-center justify-around bg-white bg-gray-100`}>
        {/* Search Bar */}
        <View style={tw`shadow-lg m-2 p-2 rounded-lg mb-4 flex-row bg-white`}>
          <TextInput
            style={tw`w-3/4 `}
            placeholder="Marka, ürün veya kategori ara"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
        <Icon name="notifications" size={30} color="black" />
      </View>
      {/* Buttons Group */}
      <View style={tw` flex-row shadow-lg`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`flex-row p-2 bg-white shadow-lg`}
        >
          <TouchableOpacity
            style={tw`ml-2 rounded-md border items-center flex-row px-4 py-2`}
          >
            <Text style={tw`text-black text-xs`}>Keşfet</Text>
          </TouchableOpacity>
          <View style={tw`border-l ml-2 border-gray-400`}></View>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={tw`ml-2 rounded-full items-center flex-row px-4 py-2 ${
                activeCategory === category.id
                  ? 'bg-orange-600'
                  : 'bg-white border border-gray-300'
              }`}
              onPress={() => setActiveCategory(category.id)}
            >
              <Text
                style={tw`${
                  activeCategory === category.id ? 'text-white' : 'text-black'
                } text-xs`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* Popular Products */}
      <View style={tw`p-4`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-lg font-bold`}>Popüler Ürünler</Text>
          <TouchableOpacity>
            <Text style={tw`text-orange-600 text-xs`}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`p-2`}>
        {products.map(product => (
          <Card key={product.id} product={product} horizontal navigation={navigation} />
        ))}
      </ScrollView>
      <View style={tw``}>
        {sellerBanners.map(banner => (
          <BannerCard key={banner.id} sellerbanner={banner} />
        ))}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
