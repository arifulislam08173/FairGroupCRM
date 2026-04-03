import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import SectionCard from '../components/SectionCard';

const pendingLeads = [
  {
    id: '1',
    name: 'Dr. Md. Rasheduzzaman',
    leadNo: '128967',
    phone: '01829441407',
    step: 'ENQUIRY',
  },
  {
    id: '2',
    name: 'Khalid Hasan',
    leadNo: '128969',
    phone: '01700000000',
    step: 'FOLLOW-UP',
  },
];

export default function PendingLeadScreen() {
  const {signOut} = useAuth();

  return (
    <AppScreen title="Pending Lead" onLogout={signOut} scroll={false}>
      <FlatList
        data={pendingLeads}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SectionCard>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>Lead No: {item.leadNo}</Text>
            <Text style={styles.text}>Phone: {item.phone}</Text>
            <Text style={styles.text}>Step: {item.step}</Text>
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