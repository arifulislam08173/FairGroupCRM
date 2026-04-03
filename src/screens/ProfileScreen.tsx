import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import SectionCard from '../components/SectionCard';
import {IMAGES} from '../config/assets';
import {COLORS} from '../config/constants';

export default function ProfileScreen() {
  const {user, signOut} = useAuth();

  return (
    <AppScreen title="Profile" onLogout={signOut}>
      <View style={styles.topWrap}>
        <Image source={IMAGES.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user?.name || 'Demo User'}</Text>
        <Text style={styles.code}>
          {'M70397'}
        </Text>
      </View>

      <SectionCard title="Basic Information">
        <Text style={styles.info}>Employee Name: {user?.name || 'Demo User'}</Text>
        <Text style={styles.info}>
          Employee Code: {'M70397'}
        </Text>
        <Text style={styles.info}>Department: Sales</Text>
        <Text style={styles.info}>Designation: Executive</Text>
      </SectionCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topWrap: {
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },
  code: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  info: {
    fontSize: 15,
    color: '#222',
    marginBottom: 10,
  },
});