import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function FormRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View style={styles.row}>{children}</View>;
}

export function FormCol({
  children,
  flex = 1,
}: {
  children: React.ReactNode;
  flex?: number;
}) {
  return <View style={[styles.col, {flex}]}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    columnGap: 10,
  },
  col: {
    flex: 1,
  },
});