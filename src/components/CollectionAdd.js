import React, {useState} from 'react';
import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

const CollectionAdd = ({navigation}) => {
  const [collections, setCollections] = useState([]);
  const [newCollectionName, setNewCollectionName] = useState('');

  const handleAddCollection = () => {
    if (newCollectionName.trim() !== '') {
      setCollections([
        ...collections,
        {id: collections.length + 1, name: newCollectionName},
      ]);
      setNewCollectionName('');
    }
  };

  return (
    <View>
      <View style={tw`flex-row items-center justify-between`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <Text style={tw`p-4 font-bold text-orange-600`}>Koleksiyonlarım</Text>
      </View>
      <View style={tw`bg-white m-4 p-2`}>
      <TextInput
        style={tw`border p-2 my-4 m-4 rounded-lg`}
        placeholder="Yeni Koleksiyon Adı"
        value={newCollectionName}
        onChangeText={setNewCollectionName}
      />
      <TouchableOpacity
        style={tw`p-2 shadow bg-orange-600 flex-row justify-center items-center rounded-lg m-4`}
        onPress={handleAddCollection}>
        <Text style={tw`text-white `}>Koleksiyon Oluştur</Text>
      </TouchableOpacity>
      <ScrollView>
        {collections.map(collection => (
          <View key={collection.id} style={tw`p-2 border-b border-gray-200`}>
            <Text style={tw`text-lg`}>{collection.name}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
};

export default CollectionAdd;
