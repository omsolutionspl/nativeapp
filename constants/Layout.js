import { Dimensions, Platform } from 'react-native';
import Constants from 'expo';

const width = Dimensions.get('window').width;
const height = Platform.OS === "ios"
    ? Dimensions.get("window").height
    : Dimensions.get("window").height // require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");



export function isIphoneX() {
  const dim = Dimensions.get('window');

  return (
      // This has to be iOS
      Platform.OS === 'ios' &&

      // Check either, iPhone X or XR
      (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

export function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}

const IPHONE_X_NOTCH_PADDING = 30;
const IPHONE_X_HOME_INDICATOR_PADDING = 34;
const IPHONE_X_LONG_SIDE = 812;
const NAVIGATION_HEADER_HEIGHT = isIphoneX() ? 104 : (Platform.OS === 'ios' ? 80 : 84); // 64;
const STATUS_BAR_HEIGHT = 15; // Constants.statusBarHeight;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  NAVIGATION_HEADER_HEIGHT,
  IPHONE_X_LONG_SIDE,
  IPHONE_X_HOME_INDICATOR_PADDING,
  IPHONE_X_NOTCH_PADDING,
  STATUS_BAR_HEIGHT,
  isIphoneX: isIphoneX()
};
