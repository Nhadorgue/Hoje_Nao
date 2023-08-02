import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { cores } from "./estilos";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
        //ESTA DANDO ERRO ABAIXO POIX NÃO TEM AS TELAS AINDA. É DISSO QUE ELE ESTA RECLAMANDO
        tabBarOptions={{
            activeTintColor:cores.preto,
            inactiveTintColor:cores.cinza,
            activeBackgroundColor: cores.preto,
            inactiveBackgroundColor: cores.rosa,
            style:{
                height: 70,
            },
            labelStyle:{
                width: '100%',
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight:21,
                marginTop: 3,
                paddingTop: 21,
                backgroundColor: cores.rosa
            },
            keyboardHidesTabBar: true,
        }}>
            <Tab.Screen name = "Home" />
            <Tab.Screen name = "Teste" />

        </Tab.Navigator>

    </NavigationContainer>

}