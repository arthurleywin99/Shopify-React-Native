import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  TouchableOpacity,
  Text,
  Modal,
  useColorScheme,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Colors, countryCodes } from '@/config/constants'
import { Picker } from '@react-native-picker/picker'
import { ArrowDownIcon } from '@/assets/icons'
import {
  Control,
  FieldPath,
  FieldPathValue,
  Path,
  useController,
} from 'react-hook-form'
import NunitoSansText from './NunitoSansText'

type ControlledTextInputProps<T extends Record<string, any>> =
  TextInputProps & {
    containerStyle?: StyleProp<ViewStyle>
    placeholder?: string
    name: Path<T>
    control: Control<T>
    defaultValue?: FieldPathValue<T, FieldPath<T>>
    error?: string
  }

const defaultSelected = countryCodes[191]

const PhoneInput = <T extends Record<string, any>>({
  style,
  containerStyle,
  name,
  control,
  defaultValue = { code: defaultSelected.value, number: '' } as any,
  placeholder,
  error,
  ...rest
}: ControlledTextInputProps<T>) => {
  const {
    field: { value, onChange, onBlur },
  } = useController<T, FieldPath<T>>({
    control,
    defaultValue,
    name,
  })

  const colorScheme = useColorScheme()

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

  function handleCountryCodeDropdownChange(itemValue: string) {
    onChange({ ...value, code: itemValue.split(' ')[1] })
  }

  function handlePhoneNumberTextChange(text: string) {
    onChange({ ...value, number: text })
  }

  return (
    <>
      <View style={[styles.flexRow, styles.relative, containerStyle]}>
        <View>
          <TouchableOpacity style={styles.flex} onPress={handleToggleDropdown}>
            <View
              style={[
                styles.flex,
                styles.flexRow,
                styles.dropdown,
                error ? [styles.error, styles.selectError] : undefined,
              ]}>
              <Text>{value.code?.toString()}</Text>
              <ArrowDownIcon style={styles.dropdownArrowDown} />
            </View>
          </TouchableOpacity>
          <Modal visible={showDropdown} animationType="fade" transparent>
            <View style={[styles.pickerContainer, pickerContainerStyle]}>
              <TouchableOpacity onPress={handleToggleDropdown}>
                <Text style={[styles.selectButton, pickerItemStyle]}>
                  Select
                </Text>
              </TouchableOpacity>
              <Picker
                style={[pickerContainerStyle]}
                itemStyle={pickerItemStyle}
                selectedValue={value.code}
                onValueChange={handleCountryCodeDropdownChange}>
                {countryCodes.map(
                  ({ label, value }: { label: string; value: string }) => (
                    <Picker.Item key={value} label={label} value={value} />
                  ),
                )}
              </Picker>
            </View>
          </Modal>
        </View>
        <RNTextInput
          style={[
            styles.input,
            error ? [styles.error, styles.inputError] : undefined,
          ]}
          placeholder={placeholder}
          value={value.number}
          onChangeText={handlePhoneNumberTextChange}
          onBlur={onBlur}
          {...rest}
        />
      </View>
      {error && (
        <NunitoSansText style={styles.errorText}>{error}</NunitoSansText>
      )}
    </>
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
    fontSize: 16,
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
  errorText: {
    color: Colors.textError,
    marginHorizontal: 12,
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 500,
  },
  error: {
    borderColor: Colors.textError,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  inputError: {
    borderRightWidth: 1,
  },
  selectError: {
    borderLeftWidth: 1,
  },
})

export default PhoneInput
