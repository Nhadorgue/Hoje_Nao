import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    h: {
        bottom: 30,
        color: '#EC86D0',
    },

    containerBotoes:{
        borderRadius: 50,
        marginHorizontal: 50,
        height: 50,
        width: 200,
        marginVertical: 10,

    },

    botaoPadrao: {
        backgroundColor: '#EC86D0',
        borderRadius: 50,

    },

    textoBotoes:{
        fontWeight: 'bold', 
        fontSize: 23 

    },

    iconePadrao:
    {
        width:100,
        height:100,
        
    },

    iconeAuth:
    {
        width:100,
        height:100,
        bottom:36
    },

    textoCadastro:
    {
        textAlign: "center",
        color:'white',
    },

    
});