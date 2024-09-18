import { Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style.js';
import { useState } from 'react';

function App() {

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");

  async function consultarCep() {
    const req = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    const devolve = await req.json();

    setLogradouro("Endereço: " + devolve.logradouro);
    setBairro("Bairro: " + devolve.bairro);
    setLocalidade("Cidade: " + devolve.localidade);
    setEstado("Estado: " + devolve.estado);
  }

  return <SafeAreaView style={styles.container}>
    <StatusBar barStyle="default" />

    <Image style={styles.img} source={
      require("./assets/lupa-cep.jpeg")
    }/>

    <View style={styles.form}>
      <TextInput placeholder='Digite o CEP...'
      style={styles.inputCep} 
      onChangeText={texto => setCep(texto)} />

      {/*<Button title='Consultar' onPress={consultarCep}/>*/ }

      <TouchableOpacity style={styles.btn} onPress={consultarCep}>
        <Text style={styles.btnText}>Consultar</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.form}>
      <Text style={styles.result}>{logradouro}</Text>
      <Text style={styles.result}>{bairro}</Text>
      <Text style={styles.result}>{localidade}</Text>
      <Text style={styles.result}>{estado}</Text>
    </View>
  </SafeAreaView>
}

export default App;