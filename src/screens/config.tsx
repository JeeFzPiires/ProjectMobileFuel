import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Input } from "../components/Input";
import { ConfigServerSupplyLayout } from "../layouts/ConfigServerFuel";


export function ConfigPage() {
  return(
    <ConfigServerSupplyLayout
      onBack={()=>{console.log('Back')}}
      onSubmit={()=>{console.log('Submit')}}
    >
      <View>
        <Text className="mt-6 ml-5 text-lg font-bold text-[#111827]">
            Configurar servidor
        </Text>
        <Text className="mt-12 ml-5 text-lg font-bold text-[#111827]">
            IP:
        </Text>
        <Input />
      </View>
    </ConfigServerSupplyLayout>
  )
}