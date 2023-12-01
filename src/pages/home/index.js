import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View , Modal} from "react-native";
import Slider from '@react-native-community/slider';
import { ModalPassword } from "../../components/modal/index.js";


// Conjunto de caracteres para ele Gerar
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*(/){|}'

export function Home() {

  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible,setModalVisible] = useState(false);

  function generetePassword() {
    
    let password = "";

    // n = charset.length Se baseia no tamanho dos caracteres que temos e enquanto i for menor que o size (tamanho de caracteres escolhido)
    for(let i = 1, n = charset.length; i < size; i++) {
      // ele vai concatenar dentro de password o charset.charAt que retorna uma posicao dentro do charset
      // Math.floor gerar um numero inteiro Math.radom para pegar um numero aleatorio vezes n que é o valor do charset
      // o n vai gerar um numero aleatorio ate a quantidade de numero de caracteres que tem dentro de charset
      password += charset.charAt(Math.floor(Math.random() * n ))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/logo.png")} 
        style={styles.logo}
      />
      <Text style={styles.title}>
        {size} Caracteres
      </Text>

      <View style={styles.areaSlide}>
        <Slider 
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor="#392de9"
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.buttonGerenetor} onPress={generetePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword 
          password={passwordValue}
          handleClose={ ()=> setModalVisible(false)}
        />
      </Modal>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo: {
    marginBottom: 50
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  areaSlide: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 6,
    borderRadius: 8,
    marginTop: 18,
    marginBottom: 18
  },
  buttonGerenetor: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#392DE9',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }

})