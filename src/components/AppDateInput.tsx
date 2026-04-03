import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../config/constants';

type Props = {
  label: string;
  value?: string;
  placeholder?: string;
  onPress: () => void;
  error?: string;
};

export default function AppDateInput({
  label,
  value,
  placeholder = 'Select Date',
  onPress,
  error,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.85}
        style={[styles.inputBox, error ? styles.inputError : null]}
        onPress={onPress}>
        <Text style={styles.label}>{label} :</Text>

        <View style={styles.row}>
          <Text style={[styles.valueText, !value ? styles.placeholderText : null]}>
            {value || placeholder}
          </Text>
          <Ionicons name="calendar-outline" size={22} color={COLORS.labelBlue} />
        </View>
      </TouchableOpacity>

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
    paddingBottom: 12,
  },
  inputError: {
    borderColor: COLORS.danger,
  },
  label: {
    color: COLORS.labelBlue,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  row: {
    minHeight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueText: {
    fontSize: 16,
    color: COLORS.text,
  },
  placeholderText: {
    color: '#9CA3AF',
  },
  errorText: {
    marginTop: 4,
    marginLeft: 6,
    fontSize: 12,
    color: COLORS.danger,
  },
});