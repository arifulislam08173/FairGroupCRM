import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import AppInput from '../components/AppInput';
import AppPicker from '../components/AppPicker';
import AppButton from '../components/AppButton';
import LeadBasicFields from '../components/LeadBasicFields';

export default function DSIFormScreen() {
  const {signOut} = useAuth();

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [leadType, setLeadType] = useState('');
  const [occupation, setOccupation] = useState('');
  const [interestLevel, setInterestLevel] = useState('');
  const [remarks, setRemarks] = useState('');

  return (
    <AppScreen title="DSI/PSF Form" onLogout={signOut}>
      <LeadBasicFields
        customerName={customerName}
        setCustomerName={setCustomerName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        companyName={companyName}
        setCompanyName={setCompanyName}
        address={address}
        setAddress={setAddress}
        district={district}
        setDistrict={setDistrict}
        leadType={leadType}
        setLeadType={setLeadType}
      />

      <AppInput
        label="Occupation"
        value={occupation}
        onChangeText={setOccupation}
      />

      <AppPicker
        label="Interest Level"
        selectedValue={interestLevel}
        onValueChange={setInterestLevel}
        items={[
          {label: 'Select Interest Level', value: ''},
          {label: 'Hot', value: 'Hot'},
          {label: 'Warm', value: 'Warm'},
          {label: 'Cold', value: 'Cold'},
        ]}
      />

      <AppInput
        label="Remarks"
        value={remarks}
        onChangeText={setRemarks}
        multiline
      />

      <AppButton
        title="Submit Form"
        onPress={() => Alert.alert('Submitted', 'DSI/PSF form submitted')}
        style={{marginTop: 24}}
      />
    </AppScreen>
  );
}