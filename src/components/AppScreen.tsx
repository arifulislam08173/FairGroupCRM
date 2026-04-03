import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../config/constants';

type Props = {
  title: string;
  onLogout?: () => void;
  children: React.ReactNode;
  scroll?: boolean;
};

export default function AppScreen({
  title,
  onLogout,
  children,
  scroll = true,
}: Props) {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const body = scroll ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}>
      {children}
    </ScrollView>
  ) : (
    <View style={styles.nonScrollContent}>{children}</View>
  );

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
            {title}
          </Text>

            <TouchableOpacity
             style={styles.iconBtn}
             hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
             onPress={onLogout}
             disabled={!onLogout}>
            <Ionicons name="log-out-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={styles.body}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {body}
        </KeyboardAvoidingView>
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
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 28,
  },
  nonScrollContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 12,
  },
});