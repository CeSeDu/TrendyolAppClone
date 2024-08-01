import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

function AccountScreen() {
  return (
    <ScrollView>
         <Text style={tw`w-full bg-orange-500 rounded-lg absolute z-0 h-32`} ></Text>
      <View style={tw`bg-white m-2 rounded-lg mt-8`}>

        <View
          style={tw`flex-row justify-around border-b items-center bg-white gap-2 w-full rounded-lg`}>
          <View style={tw`flex-row  justify-start items-center bg-white gap-2`}>
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1354140697054609408/SMjDJmYg_400x400.png',
              }}
              style={tw`w-16 h-16 rounded-t-lg bg-red-900`}
            />
            <Text>senadurmus23@gmail.com</Text>
            <TouchableOpacity
              style={tw`flex-row items-center bg-red-600 rounded-full px-1`}>
              <Text style={tw`text-xs text-white`}>Doğrula</Text>
              <Icon name="chevron-forward-outline" size={10} color="white" />
            </TouchableOpacity>
          </View>
          <Icon name="notifications" size={25} color="gray" />
        </View>

        <View style={tw`flex-row justify-center p-4`}>
          <View style={tw`w-24 h-24 flex items-center`}>
            <Icon name="time-outline" size={30} color="gray" />
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <Icon name="ticket" size={30} color="gray" />
            <Text style={tw`text-center`}>İndirim Kuponalarım</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <Icon name="chatbox" size={30} color="gray" />
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <Icon name="wallet" size={30} color="gray" />
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
        </View>
      </View>
      {/* Siparişlerim */}
      <View style={tw`bg-white m-2 rounded-lg`}>
        <View
          style={tw`flex-row justify-around border-b items-center bg-white gap-2 w-full rounded-lg`}>
          <View
            style={tw`flex-row  justify-between w-full rounded-lg p-4 bg-white gap-2`}>
            <Text style={tw`text-lg  `}>Siparişlerim </Text>
            <TouchableOpacity
              style={tw`flex-row items-center rounded-full px-1`}>
              <Text style={tw`text-xs text-black`}>
                Siparişlerime Git
                <Icon name="chevron-forward-outline" size={10} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex-row justify-center p-4`}>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-orange-600`}>
              <Icon
                name="cube-sharp"
                size={30}
                color="white"
                style={tw` p-2 rounded-full`}
              />
            </View>
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-orange-600 p-2 `}>
              <Icon name="return-up-back-outline" size={30} color="white" />
            </View>
            <Text style={tw`text-center`}>İndirim Kuponalarım</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-orange-600 p-2 `}>
              <Icon name="chatbox-outline" size={30} color="white" />
            </View>
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-orange-600 p-2 `}>
              <Icon name="wallet" size={30} color="white" />
            </View>
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
        </View>
      </View>
      {/* hizmetler */}
      <View style={tw`bg-white m-2 rounded-lg`}>
        <View
          style={tw`flex-row justify-around border-b items-center bg-white gap-2 w-full rounded-lg`}>
          <View
            style={tw`flex-row  justify-between w-full rounded-lg p-4 bg-white gap-2`}>
            <Text style={tw`text-lg  `}>Hizmetlerimizi Keşfet </Text>
            <TouchableOpacity
              style={tw`flex-row items-center rounded-full px-1`}>
              <Text style={tw`text-xs text-black`}>
                Tümünü Gör
                <Icon name="chevron-forward-outline" size={10} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex-row justify-center p-4`}>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-blue-600`}>
              <Icon
                name="cube-sharp"
                size={30}
                color="white"
                style={tw` p-2 rounded-full`}
              />
            </View>
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-blue-600 p-2 `}>
              <Icon name="return-up-back-outline" size={30} color="white" />
            </View>
            <Text style={tw`text-center`}>İndirim Kuponalarım</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-blue-600 p-2 `}>
              <Icon name="chatbox-outline" size={30} color="white" />
            </View>
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
          <View style={tw`w-24 h-24 flex items-center`}>
            <View style={tw` rounded-full bg-blue-600 p-2 `}>
              <Icon name="wallet" size={30} color="white" />
            </View>
            <Text style={tw`text-center`}>Önceden Gezdiklerin</Text>
          </View>
        </View>
      </View>

      {/* hizmetler */}
      <View style={tw`bg-white m-2 rounded-lg`}>
        <View
          style={tw`flex-row justify-around border-b items-center bg-white gap-2 w-full rounded-lg`}>
          <View
            style={tw`flex-row  justify-between w-full rounded-lg p-4 bg-white gap-2`}>
            <Text style={tw`text-lg  `}>Hesabım & Yardım</Text>
          </View>
        </View>

        <View
          style={tw`flex-row justify-between  w-full items-center px-4  border-b border-gray-300  py-4`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Icon name="wallet" size={30} color="gray" />
            <Text style={tw`text-center text-lg   text-gray-500`}>
              Önceden Gezdiklerin
            </Text>
          </View>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </View>
        <View
          style={tw`flex-row justify-between  w-full items-center px-4  border-b border-gray-300  py-4`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Icon name="wallet" size={30} color="gray" />
            <Text style={tw`text-center text-lg   text-gray-500`}>
              Önceden Gezdiklerin
            </Text>
          </View>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </View>
        <View
          style={tw`flex-row justify-between  w-full items-center px-4  border-b border-gray-300  py-4`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Icon name="wallet" size={30} color="gray" />
            <Text style={tw`text-center text-lg   text-gray-500`}>
              Önceden Gezdiklerin
            </Text>
          </View>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </View>
        <View
          style={tw`flex-row justify-between  w-full items-center px-4  border-b border-gray-300   py-4`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Icon name="wallet" size={30} color="gray" />
            <Text style={tw`text-center text-lg   text-gray-500`}>
              Önceden Gezdiklerin
            </Text>
          </View>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </View>
        <View
          style={tw`flex-row justify-between  w-full items-center px-4    py-4`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Icon name="wallet" size={30} color="gray" />
            <Text style={tw`text-center text-lg   text-gray-500`}>
              Önceden Gezdiklerin
            </Text>
          </View>
          <Icon name="chevron-forward-outline" size={20} color="black" />
        </View>
      </View>
    </ScrollView>
  );
}

export default AccountScreen;
