import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import AppInput from '../components/AppInput';
import AppDateInput from '../components/AppDateInput';
import AppButton from '../components/AppButton';
import FormRow, {FormCol} from '../components/FormRow';

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function TestDriveScreen() {
  const {signOut} = useAuth();

  const [driverName, setDriverName] = useState('');
  const [location, setLocation] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [driveDate, setDriveDate] = useState('');
  const [showDate, setShowDate] = useState(false);

  return (
    <AppScreen title="Test-Drive Page" onLogout={signOut}>
      <AppInput
        label="Driver Name"
        value={driverName}
        onChangeText={setDriverName}
      />

      <FormRow>
        <FormCol>
          <AppInput
            label="Location"
            value={location}
            onChangeText={setLocation}
          />
        </FormCol>

        <FormCol>
          <AppInput
            label="Vehicle Name"
            value={vehicleName}
            onChangeText={setVehicleName}
          />
        </FormCol>
      </FormRow>

      <AppDateInput
        label="Test Drive Date"
        value={driveDate}
        onPress={() => setShowDate(true)}
      />

      <AppButton
        title="Save Test Drive"
        onPress={() => Alert.alert('Saved', 'Test drive saved')}
        style={{marginTop: 24}}
      />

      {showDate ? (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(_, selectedDate) => {
            setShowDate(false);
            if (selectedDate) {
              setDriveDate(formatDate(selectedDate));
            }
          }}
        />
      ) : null}
    </AppScreen>
  );
}