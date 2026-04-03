import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SHADOW, SIZES} from '../config/constants';

export default function SectionCard({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.card}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.cardRadius,
    padding: 16,
    marginBottom: 16,
    ...SHADOW,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },
});