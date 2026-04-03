import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../config/constants';

type Lead = {
  id?: string;
  customerName?: string;
  mobile?: string;
  model?: string;
  source?: string;
  status?: string;
};

export default function LeadCard({lead}: {lead: Lead}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{lead.customerName || 'Customer'}</Text>
      <Text style={styles.meta}>Mobile: {lead.mobile || '-'}</Text>
      <Text style={styles.meta}>Model: {lead.model || '-'}</Text>
      <Text style={styles.meta}>Source: {lead.source || '-'}</Text>
      <Text style={styles.meta}>Status: {lead.status || '-'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: COLORS.text,
  },
  meta: {
    color: COLORS.subText,
    marginBottom: 2,
  },
});