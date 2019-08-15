import Dimensions from 'Dimensions';
import { Platform } from 'react-native';
const tintColor = '#2f95dc';

export default {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
};


export const diff = (Platform.OS === 'ios') ? 20 : 0;
export const myHeight = Dimensions.get('window').height;
export const myWidth = Dimensions.get('window').width;

export const PRIMARY = '#ab9bcc';
export const SECONDARY = 'grey';
export const BASIC = 'white';