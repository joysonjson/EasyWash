import { Dimensions } from 'react-native';

const widthOfScreen = Dimensions.get('window').width;
const heightOfScreen = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
