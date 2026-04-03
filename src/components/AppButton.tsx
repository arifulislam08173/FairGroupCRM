import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import {COLORS, SHADOW, SIZES} from '../config/constants';

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  style?: ViewStyle;
};

export default function AppButton({
  title,
  onPress,
  loading = false,
  style,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.button, style]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 160,
    alignSelf: 'center',
    backgroundColor: COLORS.primaryDark,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: SIZES.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});