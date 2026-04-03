import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '../config/constants';

type LeadDetails = {
  leadNo?: string;
  customerName?: string;
  customerNumber?: string;
  customerAddress?: string;
  companyName?: string;
  leadCreateDate?: string;
  leadCreateTime?: string;
  nextFollowUpDate?: string;
  leadType?: string;
  leadProspectType?: string;
  stepType?: string;
  createdBy?: string;
  products?: string;
  lastTransactionDate?: string;
  lastTransactionRemarks?: string;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  data: LeadDetails | null;
};

const Row = ({label, value}: {label: string; value?: string}) => (
  <View style={styles.row}>
    <View style={styles.leftCell}>
      <Text style={styles.leftText}>{label}</Text>
    </View>
    <View style={styles.rightCell}>
      <Text style={styles.rightText}>{value && value !== '' ? value : 'null'}</Text>
    </View>
  </View>
);

export default function LeadDetailsModal({visible, onClose, data}: Props) {
  if (!data) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.tableWrap}>
              <Row label="Lead No" value={data.leadNo} />
              <Row label="Customer Name" value={data.customerName} />
              <Row label="Customer Number" value={data.customerNumber} />
              <Row label="Customer Address" value={data.customerAddress} />
              <Row label="Company name" value={data.companyName} />
              <Row label="Lead Create Date" value={data.leadCreateDate} />
              <Row label="Time" value={data.leadCreateTime} />
              <Row label="Next Follow-up Date" value={data.nextFollowUpDate} />
              <Row label="Lead Type" value={data.leadType} />
              <Row label="Lead Prospect Type" value={data.leadProspectType} />
              <Row label="Step Type" value={data.stepType} />
              <Row label="Created By" value={data.createdBy} />
              <Row label="Products" value={data.products} />
              <Row label="Last Transaction Date" value={data.lastTransactionDate} />
              <Row
                label="Last Transaction - Remarks"
                value={data.lastTransactionRemarks}
              />
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Text style={styles.closeBtnText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.28)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  modalCard: {
    width: '100%',
    maxHeight: '85%',
    backgroundColor: '#F3F3F6',
    borderRadius: 34,
    padding: 22,
  },
  tableWrap: {
    borderWidth: 4,
    borderColor: '#4A8CF0',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#E9E9EE',
  },
  row: {
    flexDirection: 'row',
    minHeight: 54,
  },
  leftCell: {
    width: '50%',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#E9E9EE',
  },
  rightCell: {
    width: '50%',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#E9E9EE',
  },
  leftText: {
    fontSize: 15,
    color: '#1E1E1E',
    fontWeight: '500',
  },
  rightText: {
    fontSize: 15,
    color: '#1E1E1E',
    fontWeight: '500',
  },
  closeBtn: {
    marginTop: 18,
    alignSelf: 'center',
    backgroundColor: COLORS.primaryDark,
    borderRadius: 24,
    paddingHorizontal: 26,
    paddingVertical: 12,
  },
  closeBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});