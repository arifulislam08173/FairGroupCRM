import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import SearchByNumberScreen from '../screens/SearchByNumberScreen';
import SearchByDateScreen from '../screens/SearchByDateScreen';
import PendingLeadScreen from '../screens/PendingLeadScreen';
import NewLeadScreen from '../screens/NewLeadScreen';
import ProductLeadScreen from '../screens/ProductLeadScreen';
import NewLeadTransactionScreen from '../screens/NewLeadTransactionScreen';
import PictureLeadScreen from '../screens/PictureLeadScreen';
import TestDriveScreen from '../screens/TestDriveScreen';
import DSIFormScreen from '../screens/DSIFormScreen';
import DSIFormListScreen from '../screens/DSIFormListScreen';
import {useAuth} from '../context/AuthContext';
import {COLORS} from '../config/constants';
import {IMAGES} from '../config/assets';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const {user} = useAuth();

  const employeeCode = 'M70397';

  const employeeName = 'S. M. Khalid Hasan';

  return (
    <SafeAreaView style={styles.drawerSafe}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerScroll}>
        <View style={styles.header}>
          <Image
            source={IMAGES.avatar}
            style={styles.avatar}
            resizeMode="contain"
          />
          <Text style={styles.name}>{employeeName}</Text>
          <Text style={styles.code}>{employeeCode}</Text>
        </View>

        <View style={styles.menuWrap}>
          <DrawerItem
            label="DashBoard"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('Dashboard')}
          />

          <DrawerItem
            label="New Lead"
            labelStyle={styles.drawerLabel}
            style={[styles.drawerItem, styles.activeItem]}
            icon={({color, size}) => (
              <Ionicons name="briefcase-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('NewLead')}
          />

          <DrawerItem
            label="Product Page"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('ProductLead')}
          />

          <DrawerItem
            label="Picture Page"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="camera-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('PictureLead')}
          />

          <DrawerItem
            label="New Lead Transaction"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="card-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('NewLeadTransaction')}
          />

          <DrawerItem
            label="Test-Drive Page"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="car-sport-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('TestDrive')}
          />

          <DrawerItem
            label="Pending Lead"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('PendingLead')}
          />

          <DrawerItem
            label="Search Lead With Number"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="search-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('SearchByNumber')}
          />

          <DrawerItem
            label="Search Lead Date Wise"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('SearchByDate')}
          />

          {/* <DrawerItem
            label="DSI/PSF Form"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="reader-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('DSIForm')}
          />

          <DrawerItem
            label="DSI/PSF Form List"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="list-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('DSIFormList')}
          /> */}

          <DrawerItem
            label="Profile"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="person-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('Profile')}
          />

          <DrawerItem
            label="Change Password"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            icon={({color, size}) => (
              <Ionicons name="lock-closed-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('ChangePassword')}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        overlayColor: 'rgba(0,0,0,0.18)',
        drawerStyle: {
          width: '73%',
          backgroundColor: '#ECECF2',
          borderTopRightRadius: 34,
          borderBottomRightRadius: 34,
        },
        sceneStyle: {
          backgroundColor: COLORS.background,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="NewLead" component={NewLeadScreen} />
      <Drawer.Screen name="ProductLead" component={ProductLeadScreen} />
      <Drawer.Screen
        name="NewLeadTransaction"
        component={NewLeadTransactionScreen}
      />
      <Drawer.Screen name="PictureLead" component={PictureLeadScreen} />
      <Drawer.Screen name="TestDrive" component={TestDriveScreen} />
      <Drawer.Screen name="PendingLead" component={PendingLeadScreen} />
      <Drawer.Screen name="SearchByNumber" component={SearchByNumberScreen} />
      <Drawer.Screen name="SearchByDate" component={SearchByDateScreen} />
      <Drawer.Screen name="DSIForm" component={DSIFormScreen} />
      <Drawer.Screen name="DSIFormList" component={DSIFormListScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerSafe: {
    flex: 1,
    backgroundColor: '#ECECF2',
  },
  drawerScroll: {
    flexGrow: 1,
    paddingTop: 0,
  },
  header: {
    backgroundColor: COLORS.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 34,
    paddingBottom: 24,
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    marginBottom: 12,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  code: {
    color: '#fff',
    fontSize: 15,
    marginTop: 4,
    textAlign: 'center',
  },
  menuWrap: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  drawerItem: {
    borderRadius: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 2,
  },
  activeItem: {
    backgroundColor: '#D8D8D8',
  },
  drawerLabel: {
    color: '#1A1A1A',
    fontSize: 16,
    marginLeft: -10,
  },
});