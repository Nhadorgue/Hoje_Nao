import React, { useState } from 'react';
import { View, Image} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { styles } from '../../styles';

export default function Cadastrar() {

    const [nome, setNome] = useState(null)
    const [usuario, setUsuário] = useState(null)
    const [senha, setSenha] = useState(null)


    return (
        <View style={styles.container}>

            <Image 
                source={ require('../../../assets/user.png')}
                style={styles.iconePadrao}                
            />

            {/*PROGRAMAR UMA BARRA DE ROLAGEM PARA TODOS OS ITENS ABAIXO E COLOCA-LOS DENTRO*/}
            <Input placeholder='Nome próprio'
                keyboardType='ascii-capable'
                maxLength={50}
                style={styles.textoCadastro}
                onChangeText={value => setNome(value)}
            />

            <Input placeholder='Usuário'
                keyboardType='ascii-capable'
                maxLength={20}
                //leftIcon={{ position: 'absolute', left: 5,type: 'font-awesome', name: 'user', color: '#EC86D0', }}
                style={{
                    textAlign:'center',
                    marginLeft:0,
                    color:'white',
                    
                }}
                onChangeText={value => setUsuário(value)}
            />

            <Input placeholder='Senha'
                keyboardType='visible-password'
                maxLength={20}
                style={styles.textoCadastro}
                onChangeText={value => setSenha(value)}
            />

            <Input placeholder='E-mail'
                keyboardType='email-address'
                maxLength={20}
                style={styles.textoCadastro}
                onChangeText={value => setEmail(value)}
            />

            <Input placeholder='CPF'//PROGRAMAR MÁSCARA
                keyboardType='numeric'
                maxLength={11}
                style={styles.textoCadastro}
                onChangeText={value => setSenha(value)}
            />

            <Text style={styles.textoCadastro}>Data de Nascimento</Text>

            <Input placeholder='DD/MM/YYYY'//PROGRAMAR PARA APRESENTAR UM CALENDÁRIO OU PROGRAMAR MÁSCARA
                keyboardType='numeric'
                maxLength={10}
                style={styles.textoCadastro}
                onChangeText={value => setSenha(value)}
            />

            <Text style={styles.textoCadastro}>Gênero</Text>

            <Input placeholder='Selecione uma opção'//CONFIGURAR PARA VIRAR UMA CAIXA DE OPÇÕES PRÉ-PROGRAMADAS
                keyboardType='numeric'
                style={styles.textoCadastro}
                onChangeText={value => setSenha(value)}
            />

            <Button title="SALVAR"
                buttonStyle={styles.botaoPadrao}
                titleStyle={styles.textoBotoes}
                containerStyle={styles.containerBotoes}
                //onPress={() => login()}
            />

        </View>
    );

}