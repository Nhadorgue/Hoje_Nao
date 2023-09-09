import { StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { useState } from 'react';
import { styles } from '../../styles';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)

  const login = () => {
    console.log(email)
    console.log(senha)
    
    if (email == "test" && senha == "test"){
      // Autenticação e redirecionamento
      navigation.navigate('App');
      //navigation.navigate('Home');
    }
    else{
      alert("Email e/ou senha inválidos!")
      return;
    }
  }

  const cadastrar = () => {
    // navigation.reset({
    //  index: 0,
    //  routes: [{ name: "Cadastrar" }]
    //})
    navigation.navigate('Cadastrar');
    
  }

  return (
    <View style={styles.container}>
      <Image 
        source={ require('../../../assets/Logo_HN.png')}
        style={styles.iconeAuth}
        
      />

      <Text h1 style={styles.h}>Hoje Não!</Text>

      <Input placeholder='Digite seu usuário'
        color='white'
        leftIcon={{ type: 'font-awesome', name: 'user', color: '#EC86D0' }}
        keyboardType='email-address'
        onChangeText={value => setEmail(value)}
      />

      <Input placeholder="Digite sua senha"
        color='white'
        secureTextEntry={true}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#EC86D0' }}
        onChangeText={value => setSenha(value)}
      />

      <Button title="ENTRAR"
        buttonStyle={styles.botaoPadrao}
        titleStyle={styles.textoBotoes}
        containerStyle={styles.containerBotoes}
        onPress={() => login()}
      />

      <Button title="Cadastre-se"
        containerStyle={{
          position: 'absolute',
          bottom: 10,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
          justifyContent: 'flex-end',
        }}
        type="clear"
        titleStyle={{
          textDecorationLine: 'underline',
          color: '#EC86D0'
        }}
        onPress={() => cadastrar()}
      />
    </View>
  );
}

