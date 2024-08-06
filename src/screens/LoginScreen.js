import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import tw from 'twrnc';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' && password === '') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Hatalı Giriş', 'Kullanıcı adı veya şifre yanlış');
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <View
        style={tw`bg-orange-600 w-full h-82 absolute top-0 p-0 m-0 flex-1 justify-center items-center m-12`}>
        <Text style={tw`text-3xl text-white`}>Trendyol.com</Text>
      </View>
      <View style={tw`w-5/6 rounded bg-white shadow-lg h- justify-center items-center absolute top-74`}>
        <Text style={tw`text-2xl font-bold mb-6`}>Giriş Yap</Text>

        <TextInput
          style={tw`w-3/4 border border-gray-300 p-2 rounded mb-4 `}
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={tw`w-3/4 border border-gray-300 p-2 rounded mb-6`}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={tw`bg-orange-500 w-3/4 p-4 rounded items-center`}
          onPress={handleLogin}>
          <Text style={tw`text-white text-lg font-bold`}>Giriş Yap</Text>
        </TouchableOpacity>
        <View style={tw`w-full justify-around gap-4 mt-6 flex-row`}>
          <TouchableOpacity
            style={tw`border border-orange-600 p-4 rounded items-center`}
            onPress={handleLogin}>
            <Text style={tw`text-orange text-xs font-bold`}>
              Google ile Giriş Yap
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`border border-orange-600 p-4 rounded items-center`}
            onPress={handleLogin}>
            <Text style={tw`text-orange text-xs font-bold`}>
              Google ile Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`m-2`}>Üye değilmisin? <Text style={tw`text-orange-600`}>Üye ol</Text></Text>
      </View>
    </View>
  );
};

export default LoginScreen;
