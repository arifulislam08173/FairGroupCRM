import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  token: 'auth_token',
  user: 'auth_user',
};

export const storage = {
  async setToken(token: string) {
    await AsyncStorage.setItem(KEYS.token, token);
  },

  async getToken() {
    return AsyncStorage.getItem(KEYS.token);
  },

  async removeToken() {
    await AsyncStorage.removeItem(KEYS.token);
  },

  async setUser(user: unknown) {
    await AsyncStorage.setItem(KEYS.user, JSON.stringify(user));
  },

  async getUser<T>() {
    const raw = await AsyncStorage.getItem(KEYS.user);
    return raw ? (JSON.parse(raw) as T) : null;
  },

  async clearAll() {
    await AsyncStorage.multiRemove([KEYS.token, KEYS.user]);
  },
};