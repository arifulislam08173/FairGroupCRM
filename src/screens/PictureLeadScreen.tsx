import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useAuth} from '../context/AuthContext';
import AppScreen from '../components/AppScreen';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {COLORS, SIZES} from '../config/constants';

export default function PictureLeadScreen() {
  const {signOut} = useAuth();
  const [imageUri, setImageUri] = useState('');
  const [caption, setCaption] = useState('');

  const handlePickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
      selectionLimit: 1,
    });

    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri || '');
    }
  };

  return (
    <AppScreen title="Picture Page" onLogout={signOut}>
      <TouchableOpacity style={styles.uploadBox} onPress={handlePickImage}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <View style={styles.placeholderWrap}>
            <Text style={styles.placeholderTitle}>Upload Lead Picture</Text>
            <Text style={styles.placeholderSub}>Tap to choose image</Text>
          </View>
        )}
      </TouchableOpacity>

      <AppInput
        label="Picture Remarks"
        value={caption}
        onChangeText={setCaption}
        multiline
      />

      <AppButton
        title="Save Picture"
        onPress={() => Alert.alert('Saved', 'Picture saved')}
        style={{marginTop: 24}}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  uploadBox: {
    minHeight: 250,
    backgroundColor: COLORS.background,
    borderWidth: SIZES.borderWidth,
    borderColor: COLORS.border,
    borderRadius: SIZES.inputRadius,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
  },
  placeholderWrap: {
    alignItems: 'center',
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.labelBlue,
    marginBottom: 8,
  },
  placeholderSub: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});