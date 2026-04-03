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
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAuth} from '../context/AuthContext';
import AppDateInput from '../components/AppDateInput';
import AppButton from '../components/AppButton';
import SectionCard from '../components/SectionCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../config/constants';

type LeadItem = {
  id: string;
  leadNo: string;
  customerName: string;
  createdDate: string;
  status: string;
};

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function SearchByDateScreen() {
  const navigation = useNavigation<any>();
  const {signOut} = useAuth();
  const insets = useSafeAreaInsets();

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [results, setResults] = useState<LeadItem[]>([]);
  const [showFromDate, setShowFromDate] = useState(false);
  const [showToDate, setShowToDate] = useState(false);

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
        createdDate: '2026-03-04',
        status: 'IN-PROGRESS',
      },
      {
        id: '2',
        leadNo: '128969',
        customerName: 'Khalid Hasan',
        createdDate: '2026-03-05',
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
            Search Lead Date Wise
          </Text>

          <TouchableOpacity
            style={styles.iconBtn}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <AppDateInput
            label="From Date"
            value={fromDate}
            onPress={() => setShowFromDate(true)}
          />

          <AppDateInput
            label="To Date"
            value={toDate}
            onPress={() => setShowToDate(true)}
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
                <Text style={styles.itemText}>
                  Created Date: {item.createdDate}
                </Text>
                <Text style={styles.itemText}>Status: {item.status}</Text>
              </SectionCard>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No lead searched yet.</Text>
            }
          />
        </View>

        {showFromDate ? (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={(_, selectedDate) => {
              setShowFromDate(false);
              if (selectedDate) {
                setFromDate(formatDate(selectedDate));
              }
            }}
          />
        ) : null}

        {showToDate ? (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={(_, selectedDate) => {
              setShowToDate(false);
              if (selectedDate) {
                setToDate(formatDate(selectedDate));
              }
            }}
          />
        ) : null}
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