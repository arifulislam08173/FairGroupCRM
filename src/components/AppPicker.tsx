import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {COLORS, SIZES} from '../config/constants';

interface Item {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: Item[];
  error?: string;
}

export default function AppPicker({
  label,
  selectedValue,
  onValueChange,
  items,
  error,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.pickerBox, error ? styles.pickerError : null]}>
        {label ? <Text style={styles.label}>{label} :</Text> : null}

        <Picker
          selectedValue={selectedValue}
          onValueChange={itemValue => onValueChange(String(itemValue))}
          style={styles.picker}>
          {items.map(item => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  pickerBox: {
    backgroundColor: COLORS.background,
    borderWidth: SIZES.borderWidth,
    borderColor: COLORS.border,
    borderRadius: SIZES.inputRadius,
    paddingLeft: 10,
    paddingTop: 10,
    overflow: 'hidden',
  },
  pickerError: {
    borderColor: COLORS.danger,
  },
  label: {
    color: COLORS.labelBlue,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
    paddingLeft: 4,
  },
  picker: {
    color: COLORS.text,
    marginLeft: -6,
  },
  errorText: {
    marginTop: 4,
    marginLeft: 6,
    fontSize: 12,
    color: COLORS.danger,
  },
});