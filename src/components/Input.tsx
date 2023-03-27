import { TextInput, View } from "react-native";
import { StyledComponent } from "nativewind";

type InputProps = {
  className: string;
  placeholder: string;
  keyboardType: string;
}

export function Input({...props}) {
  return(
    <View>
      <TextInput
        className="w-full h-14 border-2 bg-[#1B1E2D] block placeholder:text-white border-white py-2 pl-9 pr-3 sm:text-sm mb-3 rounded-2xl px-4 {...props}"
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
      />
    </View>
  )
}