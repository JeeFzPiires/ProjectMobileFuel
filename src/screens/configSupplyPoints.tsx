import { View, Text } from "react-native";
import { Input } from "../components/Input";
import { ConfigServerSupplyLayout } from "../layouts/ConfigServerFuel";

import SelectDropdown from 'react-native-select-dropdown'
import { SelectDropDown } from "../components/Select";
import { ModalConfig } from "../components/ModalConfig";

export function ConfigSupply() {
  return(
    <ConfigServerSupplyLayout
      onBack={()=>{console.log('Back')}}
      onSubmit={()=>{console.log('Submit')}}
    >
      <View className="flex flex-row items-center mt-8">
        <Text className="text-2xl font-bold justify-center items-center mx-auto">Selecione o local de abastecimento</Text>
      </View>

      <View className="mt-8">
        <SelectDropDown />
      </View>
      
      
      {/* <View className="mt-4">
        <SelectDropDown />
      </View> */}
    </ConfigServerSupplyLayout>
  )
}