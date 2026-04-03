import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {COLORS, SIZES} from '../config/constants';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  multiline?: boolean;
}

export default function AppInput({
  label,
  error,
  multiline = false,
  style,
  ...props
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.inputBox, error ? styles.inputError : null]}>
        {label ? <Text style={styles.label}>{label} :</Text> : null}
        <TextInput
          placeholderTextColor="#9CA3AF"
          style={[styles.input, multiline ? styles.multilineInput : null, style]}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          {...props}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: COLORS.background,
    borderWidth: SIZES.borderWidth,
    borderColor: COLORS.border,
    borderRadius: SIZES.inputRadius,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 8,
  },
  inputError: {
    borderColor: COLORS.danger,
  },
  label: {
    color: COLORS.labelBlue,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
  input: {
    color: COLORS.text,
    fontSize: 16,
    paddingVertical: 0,
    minHeight: 28,
  },
  multilineInput: {
    minHeight: 90,
  },
  errorText: {
    marginTop: 4,
    marginLeft: 6,
    fontSize: 12,
    color: COLORS.danger,
  },
});