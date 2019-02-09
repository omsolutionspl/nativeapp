import getTheme, { defaultThemeVariables } from "@shoutem/ui/theme";
import Colors from './Colors'
import { merge } from 'lodash';

const defaultTheme = getTheme();

const DEFAULT_COLORS = {
  color: "#797979",
  topNavBar: "#333", //Colors.topNavBarColor,
  actionButtonColor: "#d9d9d9",
  actionButtonsBg: "#333"//Colors.topNavBarColor
}

const DEFAULT_HEADER_TEXT = {
  fontSize: 14,
  fontFamily: "Rubik-Medium",
  padding: 12,
};

export default () => {
  return merge(defaultTheme, {
    'mbm.dashboard.FeaturedContent': {
      headerText: DEFAULT_HEADER_TEXT,

    },
    'mbm.dashboard.ActionButtons': {
      headerText: { ...DEFAULT_HEADER_TEXT, color: DEFAULT_COLORS.actionButtonColor},

      container: {
        // flex:1,
        // padding:10,
        backgroundColor: DEFAULT_COLORS.actionButtonsBg,
        // shadowColor: "#000000",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //   height: 1,
        //   width: 1
        // }
      },
      icon: {
        color: DEFAULT_COLORS.actionButtonColor,
      },
      buttonText: {

        fontFamily: "Rubik-Regular",
        color: DEFAULT_COLORS.actionButtonColor
      },
      buttonsContainer: {
        //height: 40,
        // height:40,
        // paddingLeft:10,
        // paddingRight: 10
      }
    },
    'shoutem.ui.Title': {
      fontSize: 18,
      padding: 12,
      fontFamily: "Rubik-Medium",
      color: DEFAULT_COLORS.color
    }
  });
}