import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  TouchableOpacity,
  Text,
  Modal,
  useColorScheme,
} from 'react-native'
import { Colors, countryCodes } from '@/config/constants'
import { Picker } from '@react-native-picker/picker'
import { ItemValue } from '@react-native-picker/picker/typings/Picker'
import { ArrowDownIcon } from '@/assets/icons'

type Props = {
  placeholder?: string
}

const PhoneInput = ({ placeholder }: Props) => {
  const colorScheme = useColorScheme()

  const [selectedValue, setSelectedValue] = useState<ItemValue>(
    countryCodes[0].value,
  )
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const pickerContainerStyle =
    colorScheme === 'light'
      ? styles.pickerContainerLight
      : styles.pickerContainerDark

  const pickerItemStyle =
    colorScheme === 'light' ? styles.pickerItemLight : styles.pickerItemDark

  function handleToggleDropdown() {
    setShowDropdown(prev => !prev)
  }

  return (
    <View style={[styles.flexRow, styles.relative]}>
      <View>
        <TouchableOpacity style={styles.flex} onPress={handleToggleDropdown}>
          <View style={[styles.flex, styles.flexRow, styles.dropdown]}>
            <Text>{selectedValue?.toString()}</Text>
            <ArrowDownIcon style={styles.dropdownArrowDown} />
          </View>
        </TouchableOpacity>
        <Modal visible={showDropdown} animationType="fade" transparent>
          <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={handleToggleDropdown}>
              <Text style={[styles.selectButton, pickerItemStyle]}>Select</Text>
            </TouchableOpacity>
            <Picker
              style={[pickerContainerStyle]}
              itemStyle={pickerItemStyle}
              selectedValue={selectedValue}
              onValueChange={itemValue => setSelectedValue(itemValue)}>
              {countryCodes.map(
                ({ label, value }: { label: string; value: string }) => (
                  <Picker.Item key={value} label={label} value={value} />
                ),
              )}
            </Picker>
          </View>
        </Modal>
      </View>
      <RNTextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  relative: {
    position: 'relative',
  },
  flexRow: {
    flexDirection: 'row',
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.inputBackground,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    paddingHorizontal: 20,
  },
  dropdownArrowDown: {
    borderRightWidth: 1,
    borderRightColor: Colors.textSecondary,
    paddingRight: 32,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.inputBackground,
    color: Colors.textSecondary,
    tintColor: Colors.inputTintColor,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopEndRadius: 60,
    borderBottomEndRadius: 60,
    fontSize: 14,
    fontWeight: '500',
  },
  pickerContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.textSecondary,
    paddingVertical: 10,
  },
  selectButton: {
    fontWeight: '600',
    textAlign: 'right',
    marginRight: 20,
  },
  pickerContainerLight: {
    backgroundColor: Colors.inputTintColor,
  },
  pickerContainerDark: {
    backgroundColor: Colors.textSecondary,
  },
  pickerItemLight: {
    color: Colors.textSecondary,
  },
  pickerItemDark: {
    color: Colors.textPrimary,
  },
})

export default PhoneInput
