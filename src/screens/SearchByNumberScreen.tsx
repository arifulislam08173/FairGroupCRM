import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import SectionCard from '../components/SectionCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../config/constants';

type LeadItem = {
  id: string;
  leadNo: string;
  customerName: string;
  phone: string;
  status: string;
};

export default function SearchByNumberScreen() {
  const navigation = useNavigation<any>();
  const {user, signOut} = useAuth();
  const insets = useSafeAreaInsets();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [results, setResults] = useState<LeadItem[]>([]);

  const employeeCode = 'M70397';

  const handleMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleLogout = () => {
    if (signOut) {
      signOut();
    }
  };

  const handleSearch = () => {
    setResults([
      {
        id: '1',
        leadNo: '128967',
        customerName: 'Dr. Md. Rasheduzzaman',
        phone: '01829441407',
        status: 'IN-PROGRESS',
      },
      {
        id: '2',
        leadNo: '128968',
        customerName: 'S. M. Khalid Hasan',
        phone: '01700000000',
        status: 'ENQUIRY',
      },
    ]);
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
            Search Lead With Number
          </Text>

          <TouchableOpacity
            style={styles.iconBtn}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <AppInput
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <AppButton
            title="Search Lead"
            onPress={handleSearch}
            style={styles.searchBtn}
          />

          <FlatList
            data={results}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <SectionCard>
                <Text style={styles.itemTitle}>{item.customerName}</Text>
                <Text style={styles.itemText}>Lead No: {item.leadNo}</Text>
                <Text style={styles.itemText}>Phone: {item.phone}</Text>
                <Text style={styles.itemText}>Status: {item.status}</Text>
              </SectionCard>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No lead searched yet.</Text>
            }
          />
        </View>
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
    paddingHorizontal: 10,
    paddingTop: 12,
  },
  searchBtn: {
    marginTop: 16,
    marginBottom: 18,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#8A8A8A',
    fontSize: 15,
  },
});