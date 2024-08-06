import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import tw from 'twrnc';
import { Icon, Button } from 'react-native-elements';

const ProductDetailScreen = ({ addToCart }) => {
  const route = useRoute();
  const { product } = route.params;

  const handleAddToCart = () => {
    addToCart(product);
    alert('Ürün sepete eklendi');
  };

  return (
    <View style={tw`flex-1`}>
      <ScrollView style={tw`bg-white`} contentContainerStyle={tw`pb-20`}>
        <View style={tw`relative`}>
          <Image source={{ uri: product.url }} style={tw`w-full h-80`} />
          <View style={tw`absolute top-4 right-4 bg-white rounded-full p-1`}>
            <Icon name="heart-outline" type="ionicon" color="black" />
          </View>
        </View>

        <View style={tw`bg-gray-100`}>
          <View style={tw`bg-white shadow-md p-2 mb-4`}>
            <View style={tw`flex-row gap-1 items-center`}>
              <Text style={tw`text-lg font-bold`}>{product.id}</Text>
              <Text style={tw`text-sm text-gray-500 mt-1`}>{product.title}</Text>
            </View>

            <View style={tw`flex-row items-center mt-2 justify-between w-full border-b border-gray-200`}>
              <View style={tw`flex-row items-center`}>
                <Icon name="star" type="material" color="gold" size={20} />
                <Icon name="star" type="material" color="gold" size={20} />
                <Icon name="star" type="material" color="gold" size={20} />
                <Icon name="star" type="material" color="gold" size={20} />
                <Text style={tw`ml-1 text-lg`}>4.6</Text>
                <View style={tw`flex-row gap-2`}>
                  <Text style={tw`ml-1 text-sm text-gray-500`}>| 1316 Değerlendirme 📷</Text>
                </View>
              </View>
              <View style={tw`flex-row items-center`}>
                <Icon name="heart-outline" type="ionicon" color="gray" size={20} style={tw`ml-auto`} />
                <Text style={tw`ml-1 text-sm text-gray-500`}>53B</Text>
              </View>
            </View>

            <View style={tw`flex-row items-center mt-2 justify-between`}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-gray-600 font-bold`}>Seçili Satıcı: <Text style={tw`text-green-500 font-bold`}> Mavi</Text></Text>
                <Icon name="info-outline" type="material" color="gray" size={20} style={tw`ml-1`} />
              </View>
              <Text style={tw`text-sm text-gray-500 mt-1`}>24 Soru & Cevap ></Text>
            </View>
            <View style={tw`flex-row items-center gap-2`}>
              <Icon name="local-shipping" type="material" color="gray" />
              <Text style={tw`text-sm text-gray-500 mt-1`}>Tahmini kargoya teslim: <Text style={tw`text-sm text-gray-500 mt-1 font-bold`}>2 gün içinde</Text></Text>
            </View>
          </View>

          <View style={tw`mt-4 border-t border-b border-gray-200 p-2 bg-white shadow-md`}>
            <Text style={tw`text-lg font-bold`}>Ürünün Kampanyaları</Text>
            <View style={tw`flex-row items-center mt-2 border-t border-gray-200 pt-4`}>
              <Icon name="tag" type="material" color="orange" />
              <Text style={tw`ml-2`}>850 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</Text>
            </View>
          </View>

          <View style={tw`bg-white shadow-md p-2 py-4 mb-4 mt-8`}>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <View style={tw`border rounded-full p-1 border-orange-600`}>
                <Icon name="bookmark-outline" type="ionicon" color="orange" />
              </View>
              <Text style={tw`ml-2 text-black`}>Koleksiyona Ekle</Text>
            </TouchableOpacity>
          </View>

          <View style={tw`bg-white shadow-md p-2 py-4 mb-4 mt-4`}>
            <TouchableOpacity style={tw`flex-row p-2`}>
              <Icon name="star-outline" type="ionicon" color="orange" />
              <View style={tw`flex-1`}>
                <Text style={tw`ml-2 text-gray-600`}>Omuz Çantası kategorisinde</Text>
                <Text style={tw`ml-2 text-orange-500 font-bold text-md`}>en çok ziyaret edilen 1. Ürün</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={tw`bg-white shadow-md p-4 py-4 mb-4 mt-8`}>
            <View style={tw`border-b border-gray-300 pb-4`}>
              <Text style={tw`text-lg font-bold`}>Ürün Bilgileri</Text>
            </View>
            <Text style={tw`text-sm text-gray-500 mt-1 pt-4`}>15 gün içinde ücretsiz iade, detaylı bilgi için <Text style={tw`text-blue-500`}>tıklayın</Text></Text>
            <Text style={tw`text-sm text-gray-500 mt-1`}>Bu ürün <Text style={tw`text-blue-500`}>Mavi</Text> Tarafından gönderilecektir.</Text>
            <TouchableOpacity style={tw`border-t mt-4 border-gray-200`}>
              <Text style={tw`text-md font-bold mt-4 text-center`}>Daha Fazla Göster</Text>
            </TouchableOpacity>
          </View>

          <View style={tw`bg-white shadow-md p-4 py-4 mb-4 mt-8`}>
            <Text style={tw`text-lg font-bold`}>Ürün Özellikleri</Text>
            <View style={tw`mt-2 border-t border-gray-300 py-4`}>
              <Text style={tw`text-sm text-gray-500`}>Renk: <Text style={tw`text-black`}>Bej</Text></Text>
            </View>
            <View style={tw`mt-2 border-t border-gray-300 py-4`}>
              <Text style={tw`text-sm text-gray-500`}>Renk: <Text style={tw`text-black`}>Bej</Text></Text>
            </View>
            <View style={tw`mt-2 border-t border-gray-300 py-4`}>
              <Text style={tw`text-sm text-gray-500`}>Renk: <Text style={tw`text-black`}>Bej</Text></Text>
            </View>
            <View style={tw`mt-2 border-t border-gray-300 py-4`}>
              <Text style={tw`text-sm text-gray-500`}>Renk: <Text style={tw`text-black`}>Bej</Text></Text>
            </View>
            <TouchableOpacity style={tw`border-t mt-4 border-gray-200`}>
              <Text style={tw`text-md font-bold mt-4 text-center`}>Daha Fazla Göster</Text>
            </TouchableOpacity>
          </View>

          <View style={tw`bg-white shadow-md p-4 flex-row items-center justify-between mb-4 mt-8`}>
            <View style={tw`ml-4`}>
              <View style={tw`ml-4 flex-row`}>
                <Image source={{ uri: product.url }} style={tw`w-24 h-24 rounded-full`} />
                <View>
                  <Text style={tw`text-lg font-bold`}>Mavi</Text>
                  <Text style={tw`text-sm text-gray-500 mt-1`}>1,1M Takipci</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={tw`text-sm text-orange-500 mt-1 font-bold`}>Sayfayı Gör ></Text>
            </View>
          </View>

          <View style={tw`bg-white shadow-md p-4 flex-1 mb-4 mt-8`}>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-lg font-bold`}>Ürün Soru & Cevaplar</Text>
              <Text style={tw`text-sm text-orange-500 mt-1 font-bold`}>Tümü ></Text>
            </View>

            <View style={tw`border-t border-gray-300 bg-gray-100 rounded-md mt-6`}>
              <View style={tw`ml-4 flex-row `}>
                <Image source={{ uri: product.url }} style={tw`w-12 h-12 rounded-full`} />
                <View style={tw``}>
                  <Text style={tw`text-lg font-bold`}>Mavi</Text>
                  <Text style={tw`text-sm text-gray-500 mt-1`}>1,1M Takipci</Text>
                </View>
              </View>
              <Text style={tw`p-2`}>
                This is programmer error; code should only request extension points that are defined by itself or its dependencies. info Installing
                "/Users/senadurmus/Library/Developer/Xcode/DerivedData/trendyol-etqkkluzqfxtfvbmgjxozzakhdju/Build/Products/Debug-iphonesimulator/trendyol.app
              </Text>
            </View>
            <TouchableOpacity style={tw`border-t mt-4 border-gray-200`}>
              <Text style={tw`text-md font-bold mt-4 text-center text-orange-600`}>Tümünü Gör (234)</Text>
            </TouchableOpacity>
          </View>

          <View style={tw`bg-white shadow-md p-4 flex-row justify-between items-center mt-8`}>
            <View style={tw`flex-row items-center`}>
              <Image source={{ uri: product.url }} style={tw`w-12 h-12 rounded-full`} />
              <Text style={tw`text font-bold`}>Daha Fazla Omuz Çantası</Text>
            </View>
            <Text>></Text>
          </View>
          <View style={tw`bg-white shadow-md p-4 flex-row justify-between items-center`}>
            <View style={tw`flex-row items-center`}>
              <Image source={{ uri: product.url }} style={tw`w-12 h-12 rounded-full`} />
              <Text style={tw`text font-bold`}>Daha Fazla Omuz Çantası</Text>
            </View>
            <Text>></Text>
          </View>
          <View style={tw`bg-white shadow-md p-4 flex-row justify-between items-center`}>
            <View style={tw`flex-row items-center`}>
              <Image source={{ uri: product.url }} style={tw`w-12 h-12 rounded-full`} />
              <Text style={tw`text font-bold`}>Daha Fazla Omuz Çantası</Text>
            </View>
            <Text>></Text>
          </View>
          <Button title="Şikayet Et" buttonStyle={tw`mt-4 bg-red-500`} />
        </View>
      </ScrollView>

      <View style={tw`absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200`}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-xl text-orange-500`}>{product.price}</Text>
          <Button title="Sepete Ekle" buttonStyle={tw`bg-orange-500 w-full`} onPress={handleAddToCart} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
