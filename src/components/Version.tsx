import { View, Text } from "react-native";

export function Version({...props}) {
  return(
    <View className="items-end  mt-12">
      <Text className="flex justify-center items-center mx-auto font-bold" {...props}>
        Versão 1.0
      </Text>
    </View>
  )
}