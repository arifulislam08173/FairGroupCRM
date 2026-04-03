import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import AppInput from '../components/AppInput';
import AppPicker from '../components/AppPicker';
import AppDateInput from '../components/AppDateInput';
import AppButton from '../components/AppButton';
import FormRow, {FormCol} from '../components/FormRow';

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function NewLeadTransactionScreen() {
  const {signOut} = useAuth();

  const [stepType, setStepType] = useState('');
  const [prospectType, setProspectType] = useState('');
  const [nextDate, setNextDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const [showDate, setShowDate] = useState(false);

  return (
    <AppScreen title="New Lead Transaction" onLogout={signOut}>
      <FormRow>
        <FormCol>
          <AppPicker
            label="Step Type"
            selectedValue={stepType}
            onValueChange={setStepType}
            items={[
              {label: 'Select Step Type', value: ''},
              {label: 'ENQUIRY', value: 'ENQUIRY'},
              {label: 'FOLLOW-UP', value: 'FOLLOW-UP'},
              {label: 'NEGOTIATION', value: 'NEGOTIATION'},
              {label: 'BOOKED', value: 'BOOKED'},
            ]}
          />
        </FormCol>

        <FormCol>
          <AppPicker
            label="Prospect Type"
            selectedValue={prospectType}
            onValueChange={setProspectType}
            items={[
              {label: 'Select Prospect Type', value: ''},
              {label: 'HOT', value: 'HOT'},
              {label: 'WARM', value: 'WARM'},
              {label: 'COLD', value: 'COLD'},
            ]}
          />
        </FormCol>
      </FormRow>

      <AppDateInput
        label="Next Follow Up Date"
        value={nextDate}
        onPress={() => setShowDate(true)}
      />

      <AppInput
        label="Remarks"
        value={remarks}
        onChangeText={setRemarks}
        multiline
      />

      <AppButton
        title="Save Transaction"
        onPress={() => Alert.alert('Saved', 'Transaction saved')}
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
              setNextDate(formatDate(selectedDate));
            }
          }}
        />
      ) : null}
    </AppScreen>
  );
}