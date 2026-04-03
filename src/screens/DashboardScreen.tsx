import React, {useContext, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SHADOW} from '../config/constants';
import {IMAGES} from '../config/assets';

type DashboardItem = {
  title: string;
  value: string | number;
  fullWidth?: boolean;
};

export default function DashboardScreen() {
  const navigation = useNavigation<any>();
  const {user, signOut} = useAuth();
  const insets = useSafeAreaInsets();

  const dashboardData: DashboardItem[] = useMemo(
    () => [
      {title: 'TOTAL LEAD', value: 51680, fullWidth: true},
      {title: 'TOTAL ACTIVE LEAD', value: 40651, fullWidth: true},
      {title: 'TOTAL PENDING LEAD', value: 0, fullWidth: true},
      {title: 'TOTAL ENQUIRY', value: 7665},
      {title: 'TOTAL FOLLOW-UP\n( SHOWROOM VISIT )', value: 10094},
      {title: 'TOTAL FOLLOW-UP\n( PHYSICAL MEETING )', value: 6944},
      {title: 'TOTAL FOLLOW-UP\n( PHONE CALL )', value: 14334},
      {title: 'TOTAL CANCEL', value: 3545},
      {title: 'TOTAL DEMONSTRATION', value: 91},
      {title: 'TOTAL TEST-DRIVE', value: 592},
      {title: 'TOTAL NEGOTIATION', value: 333},
      {title: 'TOTAL BOOKED', value: 212},
      {title: 'TOTAL INVOICED', value: 1617},
      {title: 'TOTAL LOST', value: 5867},
      {title: 'TOTAL NO-ANSWER', value: 386},
    ],
    [],
  );

  const employeeCode = 'M70397';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.header, {paddingTop: Math.max(insets.top, 12)}]}>
          <TouchableOpacity
            style={styles.iconBtn}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Ionicons name="menu-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>

          <Text numberOfLines={1} style={styles.headerTitle}>
            Dashboard For {employeeCode}
          </Text>

          <TouchableOpacity
            style={styles.iconBtn}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={signOut}>
            <Ionicons name="log-out-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* <View style={styles.logoWrap}>
            <Image source={IMAGES.logo} style={styles.logo} resizeMode="contain" />
          </View> */}

          {dashboardData.map((item, index) => (
            <View
              key={`${item.title}-${index}`}
              style={[
                styles.card,
                item.fullWidth ? styles.fullCard : styles.halfCard,
              ]}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardValue}>{item.value}</Text>
            </View>
          ))}

          <View style={styles.footer}>
            <Text style={styles.footerText}>Version 2.0.7</Text>
            <Text style={styles.footerText}>Developed By Fair Group,</Text>
            <Text style={styles.footerText}>IT Software Team</Text>
          </View>
        </ScrollView>
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
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  logoWrap: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 14,
  },
  logo: {
    width: 130,
    height: 54,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 30,
    minHeight: 104,
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW,
  },
  fullCard: {
    width: '100%',
  },
  halfCard: {
    width: '48%',
  },
  cardTitle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: 6,
  },
  cardValue: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
  },
  footer: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 10,
    paddingRight: 4,
    paddingBottom: 10,
  },
  footerText: {
    color: '#8A8A8A',
    fontSize: 14,
    lineHeight: 22,
  },
});