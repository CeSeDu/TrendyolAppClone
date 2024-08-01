import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

function Collections({navigation}) {

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`px-8`}>
        <View style={tw`flex-row justify-between gap-4  `}>
          <TouchableOpacity
            style={tw`border-orange-600 p-2 w-1/2 py-4 border rounded-lg `}>
            <Text>Koleksiyonlarım(0)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`border-orange-600 p-2 py-4  w-1/2 border rounded-lg `}>
            <Text>Takip Ettiklerim(0)</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-1 items-center mt-24`}>
        <Icon name="albums-outline" size={70} color="orange" style={tw`mt-12 mb-4`}/>
            <Text style={tw`font-bold text-xl text-gray-600 m-4`}>Koleksiyonlarım</Text>
            <Text style={tw`text-center`}>Beğendiğin ürünleri gruplayarak koleksiyonlarına kaydet, arkadaşlarınla paylaş!</Text>
        </View>
        <Button
          title="Koleksiyon Oluştur"
          buttonStyle={tw`bg-orange-600`}
          titleStyle={tw`text-white`}
          style={tw`m-8`}
          onPress={() => navigation.navigate('CollectionAdd')}

        />
      </View>
    </ScrollView>
  );
}

export default Collections;
