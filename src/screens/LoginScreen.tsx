import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {useAuth} from '../context/AuthContext';
import {COLORS} from '../config/constants';
import {IMAGES} from '../config/assets';

export default function LoginScreen() {
  const {signIn} = useAuth();

  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!employeeId || !password) {
      Alert.alert('Validation', 'Please enter employee id and password');
      return;
    }

    await signIn({
      token: 'demo-token',
      user: {
        id: employeeId,
        // employeeCode: employeeId,
        name: 'Demo User',
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.bannerWrap}>
            <Image
              source={IMAGES.loginBanner}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>

          <View style={styles.logoWrap}>
            <Image
              source={IMAGES.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.subTitle}>Login to continue CRM access</Text>

          <View style={styles.formCard}>
            <AppInput
              label="Employee ID"
              value={employeeId}
              onChangeText={setEmployeeId}
            />

            <AppInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <AppButton
              title="Login"
              onPress={handleLogin}
              style={styles.loginBtn}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 28,
    justifyContent: 'center',
  },
  bannerWrap: {
    alignItems: 'center',
    marginBottom: 8,
  },
  banner: {
    width: '100%',
    height: 170,
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 150,
    height: 64,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginTop: 8,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#666',
    marginTop: 6,
    marginBottom: 18,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
  },
  loginBtn: {
    marginTop: 18,
  },
});