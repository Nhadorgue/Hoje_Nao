import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/rotas';

export default function App() {
  return <TelaPadrao><Rotas /></TelaPadrao>;

}
