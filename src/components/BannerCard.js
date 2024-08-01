import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from 'twrnc';

const BannerCard = ({ sellerbanner }) => {
  return (
    <View style={tw`w-full h-40 my-2`}>
      <Image source={{ uri: sellerbanner.image }} style={tw`w-full h-full`} />
      <View style={tw`absolute w-1/3 h-full bg-blue-300 opacity-75 right-0 flex justify-center items-center`}>
        <Text style={tw`text-2xl text-center text-white font-bold `}>
          Mağazayı İncele
        </Text>
      </View>
    </View>
  );
};

export default BannerCard;
