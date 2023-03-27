import { useState } from "react";
import { View, Text } from "react-native";

const [modalVisible, setModalVisible] = useState(false)

export function ModalConfig() {
  const showModal = () => {
    setModalVisible(true)
  }

  return(
    <View>
      <View className="bg-[#EEEFFF99]">
        <Text>Configurando local de abastecimento</Text>
      </View>
    </View>
  )
}