import React from 'react';
import AppInput from './AppInput';
import AppPicker from './AppPicker';
import FormRow, {FormCol} from './FormRow';

type Props = {
  customerName: string;
  setCustomerName: (v: string) => void;
  phoneNumber: string;
  setPhoneNumber: (v: string) => void;
  companyName: string;
  setCompanyName: (v: string) => void;
  address: string;
  setAddress: (v: string) => void;
  district: string;
  setDistrict: (v: string) => void;
  leadType: string;
  setLeadType: (v: string) => void;
};

export default function LeadBasicFields({
  customerName,
  setCustomerName,
  phoneNumber,
  setPhoneNumber,
  companyName,
  setCompanyName,
  address,
  setAddress,
  district,
  setDistrict,
  leadType,
  setLeadType,
}: Props) {
  return (
    <>
      <AppInput
        label="Customer Name"
        value={customerName}
        onChangeText={setCustomerName}
      />

      <FormRow>
        <FormCol>
          <AppInput
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </FormCol>

        <FormCol>
          <AppPicker
            label="Lead Type"
            selectedValue={leadType}
            onValueChange={setLeadType}
            items={[
              {label: 'Select Lead Type', value: ''},
              {label: 'CASH', value: 'CASH'},
              {label: 'LOAN', value: 'LOAN'},
            ]}
          />
        </FormCol>
      </FormRow>

      <AppInput
        label="Company Name"
        value={companyName}
        onChangeText={setCompanyName}
      />

      <AppInput
        label="Customer Address"
        value={address}
        onChangeText={setAddress}
        multiline
      />

      <AppInput
        label="District"
        value={district}
        onChangeText={setDistrict}
      />
    </>
  );
}