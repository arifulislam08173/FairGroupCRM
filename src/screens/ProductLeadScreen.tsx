import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import AppInput from '../components/AppInput';
import AppPicker from '../components/AppPicker';
import AppButton from '../components/AppButton';
import FormRow, {FormCol} from '../components/FormRow';

export default function ProductLeadScreen() {
  const {signOut} = useAuth();
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [color, setColor] = useState('');

  return (
    <AppScreen title="Product Page" onLogout={signOut}>
      <FormRow>
        <FormCol>
          <AppPicker
            label="Brand"
            selectedValue={brand}
            onValueChange={setBrand}
            items={[
              {label: 'Select Brand', value: ''},
              {label: 'FAW', value: 'FAW'},
              {label: 'JMC', value: 'JMC'},
            ]}
          />
        </FormCol>
        <FormCol>
          <AppPicker
            label="Model"
            selectedValue={model}
            onValueChange={setModel}
            items={[
              {label: 'Select Model', value: ''},
              {label: 'Truck', value: 'Truck'},
              {label: 'Pickup', value: 'Pickup'},
            ]}
          />
        </FormCol>
      </FormRow>

      <AppInput
        label="Product Name"
        value={product}
        onChangeText={setProduct}
      />

      <FormRow>
        <FormCol>
          <AppInput
            label="Quantity"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </FormCol>
        <FormCol>
          <AppInput
            label="Color"
            value={color}
            onChangeText={setColor}
          />
        </FormCol>
      </FormRow>

      <AppButton
        title="Save Product"
        onPress={() => Alert.alert('Saved', 'Product info saved')}
        style={{marginTop: 24}}
      />
    </AppScreen>
  );
}