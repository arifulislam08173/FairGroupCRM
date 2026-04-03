import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import SectionCard from '../components/SectionCard';

const formList = [
  {
    id: '1',
    customerName: 'Dr. Md. Rasheduzzaman',
    phone: '01829441407',
    interest: 'Hot',
  },
  {
    id: '2',
    customerName: 'Khalid Hasan',
    phone: '01700000000',
    interest: 'Warm',
  },
];

export default function DSIFormListScreen() {
  const {signOut} = useAuth();

  return (
    <AppScreen title="DSI/PSF Form List" onLogout={signOut} scroll={false}>
      <FlatList
        data={formList}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SectionCard>
            <Text style={styles.title}>{item.customerName}</Text>
            <Text style={styles.text}>Phone: {item.phone}</Text>
            <Text style={styles.text}>Interest: {item.interest}</Text>
          </SectionCard>
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
});