import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CheckBox, Icon, Text} from 'react-native-elements';
import tw from 'twrnc';

function FavoritesHeader() {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <>
      <View style={tw`flex-row p-2 bg-white justify-between`}>
        <TouchableOpacity
          style={tw`ml-2 rounded-md border border-orange-600 items-center flex-row px-4 py-2 gap-2`}>
          <View style={tw`bg-orange-600 rounded-full p-1`}>
            <Icon name="heart" size={10} color={'white'} />
          </View>
          <Text style={tw`text-black text-xs`}>Tümü</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`ml-2 rounded-md border border-gray-400 items-center flex-row px-4 py-2 gap-2`}>
          <View style={tw`bg-orange-600 rounded-full p-1`}>
            <Icon name="heart" size={10} color={'white'} />
          </View>
          <Text style={tw`text-black text-xs`}>Kuponlu Ürünler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`ml-2 rounded-md border border-gray-400  items-center flex-row px-4 py-2 gap-2`}>
          <View style={tw`bg-orange-600 rounded-full p-1`}>
            <Icon name="heart" size={10} color={'white'} />
          </View>
          <Text style={tw`text-black text-xs`}>Fiyatı Düşenler</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row items-center`}>
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          checkedColor="orange"
        />
        <Text>Tükenen Ürünleri Gösterme</Text>
      </View>
    </>
  );
}

export default FavoritesHeader;
