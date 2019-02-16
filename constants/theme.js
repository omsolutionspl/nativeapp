import getTheme, { defaultThemeVariables, textComponents, viewComponents } from "@shoutem/ui/theme";
import { createSharedStyle } from '@shoutem/theme'
import Colors from './Colors'
import { merge } from 'lodash';
import { Constants } from 'expo';

const defaultTheme = getTheme();

const DEFAULT_COLORS = {
  color: "#797979",
  buttonTextColor: '#ffffff',
  topNavBar: "#333", //Colors.topNavBarColor,
  actionButtonColor: "#d9d9d9",
  actionButtonsBg: "#333", // Colors.topNavBarColor
}

export default () => {
  return merge(defaultTheme, {
    'mbm.DashboardScreen': {
      'mbm.common.ButtonsGroup': {
        'shoutem.ui.View': {
          backgroundColor: Colors.darkBlue,
          'shoutem.ui.View': {
            'shoutem.ui.Button': {
              // backgroundColor:'green', // debug
              marginTop:0,
              'shoutem.ui.Text': {
                color: Colors.white,
                fontSize:12,
                fontFamily: "FontAwesome"
              },
            }
          }
        },

        icon: {
          fontSize:30,
          color: Colors.white,
        },
      }
    },

    'mbm.dashboard.FeaturedContent': {
      'shoutem.ui.View': {
        'shoutem.ui.View': {
          'shoutem.ui.Heading': {
            fontSize: 15,
            padding: 10,
            color: Colors.headingTextColor,
            fontFamily: "FontAwesome"
          }
        }
      }
    },
    'mbm.common.ButtonsGroup': {
      'shoutem.ui.View': {
        '.tabs': {
          'shoutem.ui.View': {
            'shoutem.ui.Button': {
              '.tabs': {
                height: 44,
                borderWidth:0,
                paddingTop:2,
                margin:0,
                backgroundColor: Colors.topNavBarColor,
                borderBottomColor: Colors.tabIconDefault,
                borderBottomWidth: 1,
                'shoutem.ui.Text': {
                  color: Colors.tabIconDefault,
                  fontSize:14,
                },
              },

              '.active': {
                backgroundColor:Colors.darkBlue,
                borderBottomColor: Colors.darkBlue,
                'shoutem.ui.Text': {
                  color: Colors.white,
                },
              }
            }
          }
        },

        'shoutem.ui.View': {
          'shoutem.ui.Heading': {
            fontSize: 15,
            padding: 10,
            color: Colors.white,
            fontFamily: "FontAwesome"
          }
        },
      },
    },
    'mbm.modal.OpportunityDetailScreen': {
      container: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingTop: Constants.statusBarHeight,
      }
    },
    'mbm.Authentication': {
      // Code here
    },
    'mbm.common.Badge': {
      'shoutem.ui.View': {

        'shoutem.ui.Text': {
          fontSize: 13,
          color: '#fff',

          '.center' : {
            //textAlign: 'center'
          },
        },

        backgroundColor: DEFAULT_COLORS.color,
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 6,

        '.success': {
          backgroundColor: "#81c868",
          color: '#fff'
        },

        '.box': {
          borderRadius:0,
          'shoutem.ui.Text': {

          }
        },

        '.danger' : {
          backgroundColor: 'red'
        }
      }
    },

    'shoutem.ui.Button': {
      'shoutem.ui.Text': {
        color: Colors.darkBlue,
        fontFamily: "FontAwesome",
        fontSize:14,
      },

      '.filled' : {
        'shoutem.ui.Text': {
          color: Colors.white,
        },
        backgroundColor: Colors.darkBlue,
      },

      // Vertically stacked icon and text
      '.stacked': {
        paddingRight:12, // Little fix for missing some pixels
      },

      '.rounded' : {
        borderRadius: 20,
      },

      marginTop:4,
      backgroundColor: "none",
      borderWidth: 1,
      borderColor: Colors.darkBlue,
    },

    'shoutem.ui.Title': {
      fontSize: 18,
      padding: 12,
      fontFamily: "FontAwesome",
      color: DEFAULT_COLORS.color
    },

    'shoutem.ui.Overlay': {

      ...createSharedStyle(viewComponents, {
        ...createSharedStyle([...textComponents, 'shoutem.ui.Icon'], {
          textAlign: 'left',
        }),
      }),
    }
  });
}