import React from 'react';
import { Button, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Styles from './style'

export default function Login({ navigation }, props) {
  return (
    <View style={Styles.main}>
      
        <Image
          style={Styles.logo}
          source={require('../../assets/logo.png')}
        />
     

      <View style={Styles.container}>
        <View style={Styles.containerLogo}>
        </View>
            <TextInput
              style={Styles.input}
              keyboardType='email-address'
              autoCapitalize='none'
              placeholder="E-mail"
              autoCorrect={false}
            />

            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              style={Styles.input}
              placeholder="Senha"
              autoCorrect={false}
            />

            <TouchableOpacity style={Styles.btnSubmit} onPress={() => navigation.navigate('Chamados')} >
              <Text style={Styles.submitText}>Acessar</Text>
            </TouchableOpacity>

          </View>
    </View>
  );
}

