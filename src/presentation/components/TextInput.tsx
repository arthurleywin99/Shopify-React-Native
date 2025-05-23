import React from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'
import { Colors } from '@/config/constants'
import {
  Control,
  FieldPath,
  FieldPathValue,
  Path,
  useController,
} from 'react-hook-form'
import NunitoSansText from './NunitoSansText'

type ControlledTextInputProps<T extends Record<string, string>> =
  RNTextInputProps & {
    name: Path<T>
    control: Control<T>
    error?: string
    defaultValue?: FieldPathValue<T, FieldPath<T>>
  }

const TextInput = <T extends Record<string, any>>({
  style,
  name,
  control,
  error,
  defaultValue,
  ...rest
}: ControlledTextInputProps<T>) => {
  const {
    field: { value, onChange, onBlur },
  } = useController<T, FieldPath<T>>({
    control,
    defaultValue,
    name,
  })

  return (
    <>
      <RNTextInput
        {...rest}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={[styles.container, style]}
      />
      {error && (
        <NunitoSansText style={styles.errorText}>{error}</NunitoSansText>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inputBackground,
    color: Colors.textSecondary,
    tintColor: Colors.inputTintColor,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 60,
    fontSize: 14,
    fontWeight: '500',
  },
  errorText: {
    color: Colors.textError,
    marginHorizontal: 12,
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 500,
  },
})

export default TextInput
