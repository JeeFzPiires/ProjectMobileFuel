import { TouchableOpacity, Text } from "react-native";
import { StyledComponent } from "nativewind";

type ButtonProps = {
  title: string;
  className: string;
  onPress: ()=>void;
}

export function Button(props: ButtonProps) {
  return(
      <StyledComponent component={TouchableOpacity} {...props}>
        <TouchableOpacity className="h-14 w-60 border-2 border-white rounded-full items-center justify-center" 
          {...props}>
          <Text className="text-white font-bold text-lg">
            {props.title}
          </Text>
        </TouchableOpacity>
      </StyledComponent>
  )
}