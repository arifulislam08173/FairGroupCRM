import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import LeadDetailsModal from '../components/LeadDetailsModal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../config/constants';

export default function NewLeadScreen() {
  const navigation = useNavigation<any>();
  const {user, signOut} = useAuth();
  const insets = useSafeAreaInsets();

  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const employeeCode ='M70397';

  const handleMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleLogout = () => {
    if (signOut) {
      signOut();
    }
  };

  const handleSearchLead = () => {
    setModalVisible(true);
  };

  const leadData = {
    leadNo: '128967',
    customerName: 'Dr. Md. Rasheduzzaman',
    customerNumber: '01829441407',
    customerAddress: 'Dhaka',
    companyName: 'nil',
    leadCreateDate: '2026-03-04',
    leadCreateTime: '22:07:29',
    nextFollowUpDate: 'null',
    leadType: 'CASH',
    leadProspectType: 'IN-PROGRESS',
    stepType: 'ENQUIRY',
    createdBy: 'Sheik Noora Alam ( M03227 )',
    products: 'Stargazer',
    lastTransactionDate: 'null',
    lastTransactionRemarks: '',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.header, {paddingTop: Math.max(insets.top, 12)}]}>
          <TouchableOpacity
            style={styles.iconBtn}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={handleMenu}>
            <Ionicons name="menu-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>

          <Text numberOfLines={1} style={styles.headerTitle}>
            New Lead Create For {employeeCode}
          </Text>

          <TouchableOpacity
            style={styles.iconBtn}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={styles.body}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.formArea}>
            <AppInput
              label="Company Name"
              value={companyName}
              onChangeText={setCompanyName}
              placeholder=""
            />

            <Text style={styles.orText}>OR</Text>

            <AppInput
              label="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholder=""
            />

            <AppButton
              title="Search Lead"
              onPress={handleSearchLead}
              style={styles.searchBtn}
            />
          </View>
        </KeyboardAvoidingView>

        <LeadDetailsModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          data={leadData}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    minHeight: 70,
    backgroundColor: COLORS.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  iconBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '400',
    marginHorizontal: 12,
  },
  body: {
    flex: 1,
  },
  formArea: {
    paddingHorizontal: 10,
    paddingTop: 12,
  },
  orText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: '#9C9C9C',
    marginTop: 6,
    marginBottom: 6,
  },
  searchBtn: {
    marginTop: 28,
  },
});