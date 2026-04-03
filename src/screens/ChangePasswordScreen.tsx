import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default function ChangePasswordScreen() {
  const {signOut} = useAuth();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Alert.alert('Validation', 'Please fill all password fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Validation', 'New password and confirm password do not match');
      return;
    }

    Alert.alert('Success', 'Password change request submitted');
  };

  return (
    <AppScreen title="Change Password" onLogout={signOut}>
      <AppInput
        label="Old Password"
        value={oldPassword}
        onChangeText={setOldPassword}
        secureTextEntry
      />

      <AppInput
        label="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <AppInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <AppButton
        title="Update Password"
        onPress={handleSubmit}
        style={{marginTop: 24}}
      />
    </AppScreen>
  );
}