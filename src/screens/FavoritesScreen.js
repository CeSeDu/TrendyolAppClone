import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {CheckBox, Tab, TabView, Text} from 'react-native-elements';
import tw from 'twrnc';
import ProductCard from '../components/ProductCard';
import Collections from '../components/Collections';
import FavoritesHeader from '../components/FavoritesHeader';



function FavoritesScreen({products, navigation}) {
  const [index, setIndex] = useState(0);
 

  return (
    <View style={tw`bg-white flex-1`}>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'orange',
          height: 3,
        }}
        variant="light">
        <Tab.Item
          title="Favorilerim"
          titleStyle={{fontSize: 12, color: 'gray'}}
          containerStyle={tw`bg-white`}
        />
        <Tab.Item
          title="Koleksiyonlarım"
          titleStyle={{fontSize: 12, color: 'gray'}}
          containerStyle={tw`bg-white`}
        />
      </Tab>
      <View style={tw` flex-row`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`flex-row p-2 bg-white`}>
       
        </ScrollView>
      </View>
    
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={tw`w-full`}> 
        <ScrollView>
            <FavoritesHeader />
            <ProductCard products={products} />
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={tw`w-full`}>
          <Collections navigation={navigation} />
        </TabView.Item>
      </TabView>
    </View>
  );
}

export default FavoritesScreen;
