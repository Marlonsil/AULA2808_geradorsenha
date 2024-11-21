// KATH LINDA DIVA // 
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SavedPasswords from './src/screens/SavePasswords';
import ImporSenha from './src/screens/ImportanciaSenha';
import { ModalPassword } from './src/components/modal/index';


let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [SavedPasswords, setSavedPasswords] = useState([]);

  function gerarSenha() { 

    let senha = "";

    for (let i = 0, n = charset.length; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }

    setSenhaGerada(senha)
    setModalVisible(true);

  }


  function salvarSenha() {
    setSavedPasswords (prevPasswords => {
    const updatedPasswords = [...prevPasswords, senhaGerada];
    setModalVisible(false); 
    navigation.navigate('SavedPasswords', { savedPasswords: updatedPasswords }); // Navega e passa as senhas
    return updatedPasswords; 
    });
  }

  function importanciaSenha() {
    navigation.navigate('ImporSenha'); // Navega para a tela "ImporSenha"
  }

  // KATH LINDA DIVA // 
  return (    
    <View style={styles.container}>
      <Image
        source={require("./src/imgs/cadeadoroxo.png")}
        style={styles.logo}
      />
 
      <Text style={styles.title}> SENHAS DIVÔNICAS :) </Text>
 
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}> GERAR SENHA </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={salvarSenha}>
        <Text style={styles.textButton}> SENHAS SALVAS </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={importanciaSenha}>
        <Text style={styles.textButton}> PORQUE TER UMA SENHA FORTE? </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalPassword senha={senhaGerada} handleClose={ () => setModalVisible(false)} salvarSenha={salvarSenha} />
      </Modal>      

    </View >
    
  );
}

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SavedPasswords" component={SavedPasswords} />
      <Stack.Screen name="ImporSenha" component={ImporSenha} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 50,
    color: '#7F5C84',
  },
  button: {
    backgroundColor: '#A982AE',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  textButton: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  senha: {
    marginTop: 20,
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
