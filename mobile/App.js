import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);


export default function App() {
  return (
    // todos os elementos visuais do react-native não tem valor semantico
    // Os elementos, difetente do html, não possuem estilização propria]
    //Não há classes nem ID nos components
    // para stilizar uma pagina se passa uma variavel styles
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}

