import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      alert('Você está abaixo do peso!\nSeu IMC é de: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Peso ideal!\nSeu IMC é de: ' + imc.toFixed(2));
    }else if(imc >=24.9 && imc < 34.9){
      alert('Levemente acima do peso!\nSeu IMC é de: ' + imc.toFixed(2));
    }

  }

  return(
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Calcule o seu IMC</Text>
      <TextInput style={estilos.tituloInput}>Peso (kg)</TextInput>
      <TextInput
        style={estilos.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso)}
        keyboardType="numeric"
      />

      <TextInput style={estilos.tituloInput}>Altura (cm)</TextInput>
      <TextInput
        style={estilos.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura)}
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={estilos.botao}
        onPress={handleSubmit}
      >
        <Text style={estilos.botaoTexto}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
  },
  tituloInput: {
    marginTop: 16,
    marginLeft: 24,
    fontSize: 16,
  },
  titulo:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#fff',
    fontSize: 23
  },
  botao:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41aef4',
    padding: 10,
    borderRadius: 7
  },
  botaoTexto:{
    color: '#fff',
    fontSize: 25
  }
});