import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View>
      <Text>This is Login</Text>
      <Button 
        title="Logar"
        onPress = {() => navigation.navigate('Chamados')}
      />
    </View>
  );
}

