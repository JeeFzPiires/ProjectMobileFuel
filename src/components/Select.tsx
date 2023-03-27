import { View } from "react-native"
import SelectDropdown from "react-native-select-dropdown"

import IonIcon from 'react-native-vector-icons/Ionicons'

const data = ["CMB-100", "CB-98", "TP-4", "TP-10", "TMP-1", "POSTO 1", "POSTO 3", "POSTO 5", "POSTO 7"]

export function SelectDropDown() {
  return(
    <View className="mt-4">
      <SelectDropdown
          buttonStyle={{backgroundColor: '#1B1E2D', borderRadius: 16, borderColor: '#FEFEFE', borderWidth: 2, width: '100%', height: 56}}
          buttonTextStyle={{color: '#FEFEFE', fontWeight: "700"}}
          dropdownStyle={{backgroundColor: '#1B1E2D', height: '30%', borderRadius: 16}}
          rowTextStyle={{color: '#FEFEFE', fontWeight: "700"}}
          defaultButtonText={"-"}
          selectedRowStyle={{backgroundColor: '#1F306E'}}
          search={true}
          searchInputStyle={{backgroundColor: '#1B1E2D'}}
          searchInputTxtColor={'#FEFEFE'}
          searchPlaceHolder={'Digite a Tag do equipamento'}
          renderSearchInputLeftIcon={ isOpened => {
            return <IonIcon name={isOpened ? 'search' : 'search'} size={24} color="#32C0F4"/>
          }}
          renderDropdownIcon={isOpened => {
            return <IonIcon name={isOpened ? 'chevron-up' : 'chevron-down'} size={24} color="#32C0F4"/>
          }}

          data={data}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
      />
    </View>
  )
}