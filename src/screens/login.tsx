import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";

import backgroundImg from '../assets/background.png'
import EasymineLogo from '../assets/EasymineLogo.png'
import OperadorFuel from '../assets/OperadorFuel.png'
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login(){
  return(
    <ImageBackground source={backgroundImg} style={styles.image}>
      <View className="flex flex-row items-center justify-center">
       <Image source={EasymineLogo} style={styles.logo} />
         <Text className="text-white font-bold text-5xl">
           EASY
         </Text>
         <Text className="text-[#FFCD00] font-bold text-5xl">
           MINE
         </Text>
         <Text className="text-[#FFCD00] font-bold text-5xl mt-24">
           FUEL
         </Text>
      </View>
      <View className="flex mt-0 items-center justify-center px-4">
        <Image source={OperadorFuel} style={styles.operador} />
        <View className="w-full h-3/6 bg-[#EEEFFF80] rounded-3xl px-3">
          <Text className="flex mt-2 mx-auto items-center ">
            É um usuário? Faça o login para acessar o Fuel.
          </Text>

          <Text className="text-[#111827] font-bold text-2xl">
            Login
          </Text>
          <Input placeholder="Digite o numero do login"/>

          <Text className="text-[#111827] font-bold text-2xl">
            Senha
          </Text>
          <Input placeholder="Digite a senha"/>
          <View className="flex flex-row justify-between mt-3">
            <Button 
              className="bg-[#424A6D] rounded-3xl"
              onPress={()=>{}}
              title="Opções"
            />
            <Button 
              className="bg-[#297FFF] rounded-3xl"
              onPress={()=>{}}
              title="Acessar"
            />
          </View>
          <Text className="flex justify-center items-center mx-auto mt-12 font-bold">
            Versão 1.0
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  logo: {
    width: 70,
    height: 60,

    marginLeft: 16,
    marginRight: 10,
  },
  operador: {
    width: 350,
    height: 300,
  }
});
