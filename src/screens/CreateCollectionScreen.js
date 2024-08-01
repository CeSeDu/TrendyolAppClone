import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';
import tw from 'twrnc';

function CreateCollectionScreen({ navigation }) {
  const [collectionName, setCollectionName] = useState('');

  const handleCreateCollection = () => {
    // Koleksiyon oluşturma işlemleri burada yapılacak
    navigation.goBack();
  };

  return (
    <View style={tw`p-4 bg-white flex-1`}>
      <Text style={tw`text-lg font-bold`}>Yeni Koleksiyon Oluştur</Text>
      <TextInput
        style={tw`border p-2 my-4`}
        placeholder="Koleksiyon Adı"
        value={collectionName}
        onChangeText={setCollectionName}
      />
      <Button
        title="Oluştur"
        buttonStyle={tw`bg-orange-600`}
        onPress={handleCreateCollection}
      />
    </View>
  );
}

export default CreateCollectionScreen;
