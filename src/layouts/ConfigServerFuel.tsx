import { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import Modal from  "react-native-modal"

import backgroundImg from '../assets/background.png'
import EasymineLogo from '../assets/EasymineLogo.png'
import FuelLogo from '../assets/fuelLogo.png'
import SombraLogo from '../assets/sombra.png'

import { Button } from "../components/Button";
import { Version } from "../components/Version";

export function ConfigServerSupplyLayout({children, onSubmit, onBack}) {
  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => {
    setModalVisible(!modalVisible)
  }

  return(
    <ImageBackground source={backgroundImg} style={styles.image}>
      <View className="flex flex-row items-center justify-center mt-44">
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

      <View className="items-center justify-center">
        <Image source={FuelLogo} style={styles.fuelLogo} />
        <Image source={SombraLogo} style={styles.sombraLogo}/>

      </View>

      <View className="w-screen h-4/6 bg-[#EEEFFF99] mt-6 rounded-t-3xl px-3">
        <View className="flex">
          {children}
        </View>
        <View className="absolute gap-3 bottom-20 justify-between items-center">
          <View className="flex-row justify-between px-2 w-screen">
            <Button 
              className="bg-[#0E163A] rounded-3xl"
              onPress={onBack}
              title="Voltar"
            />
            <Button 
              className="bg-[#297FFF] rounded-3xl"
              onPress={showModal}
              title="Salvar"
            />
          </View>
          <Version className="mt-32"/>
        </View>

      </View>

        <View>
          <Modal 
            style={{ 
              flex: 1,
            }}
            isVisible={modalVisible}
            onBackdropPress={showModal}
          >
            <View className="bg-[#EEEFFF] rounded-xl h-1/3">
              <View className="mt-10 items-center justify-center">
                <Text className="text-3xl font-bold">Configurando local de abastecimento</Text>
                <Text className="text-xl mt-7">Deseja prosseguir utilizando o equipamento CMB-100</Text>
              </View>
              
              <View className="flex-row justify-between px-2 mt-16">
                <Button 
                  className="bg-[#0E163A] rounded-3xl"
                  onPress={showModal} 
                  title="Voltar"
                />
                <Button 
                  className="bg-[#297FFF] rounded-3xl"
                  onPress={showModal} 
                  title="OK"
                />
              </View>
            </View>
          </Modal>
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
  fuelLogo: {
    width: 61,
    height: 69,

  },
  sombraLogo: {
    width: 112,
    height: 19,
    zIndex: -1,
    marginTop: -10,

  }
})