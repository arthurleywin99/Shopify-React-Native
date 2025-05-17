import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { type NoneToVoidFunction } from '@/core/types'
import NunitoSansText from './NunitoSansText'
import { Colors } from '@/config/constants'
import { ArrowRightIcon } from '@/assets/icons'

type Props = {
  type?: 'primary' | 'secondary' | 'warning' | 'error'
  title: string
  suffixIcon?: boolean | React.ReactNode
  onPress?: NoneToVoidFunction
  onLongPress?: NoneToVoidFunction
}

const Button = ({
  type = 'primary',
  title,
  suffixIcon,
  onPress,
  onLongPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary'
          ? styles.primaryButton
          : type === 'secondary'
          ? styles.secondaryButton
          : type === 'warning'
          ? styles.warningButton
          : styles.errorButton,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <NunitoSansText
        style={[
          type === 'secondary' ? styles.secondaryText : styles.primaryText,
        ]}>
        {title}
      </NunitoSansText>
      {typeof suffixIcon === 'boolean' && suffixIcon && <ArrowRightIcon />}
      {typeof suffixIcon === 'object' && suffixIcon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.btnBgPrimary,
    paddingVertical: 16,
  },
  secondaryButton: {
    color: Colors.textSecondary,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  warningButton: {
    backgroundColor: Colors.btnBgWarning,
    paddingVertical: 16,
  },
  errorButton: {
    backgroundColor: Colors.btnBgError,
    paddingVertical: 16,
  },
  primaryText: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: 300,
  },
  secondaryText: {
    color: Colors.textSecondary,
    fontSize: 16,
    fontWeight: 300,
  },
})

export default Button
