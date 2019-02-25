import getTheme, { defaultThemeVariables, dimensionRelativeToIphone, textComponents, viewComponents } from "@shoutem/ui/theme";
import { createSharedStyle, changeColorAlpha } from '@shoutem/theme'
import { Colors, Fonts } from './index'
import { merge } from 'lodash';
import { Constants } from 'expo';

import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


const defaultTheme = getTheme();

const DEFAULT_COLORS = {
  color: "#797979",
  buttonTextColor: '#ffffff',
  topNavBar: "#333", //Colors.topNavBarColor,
  actionButtonColor: "#d9d9d9",
  actionButtonsBg: "#333", // Colors.topNavBarColor
}

const BTN_HEIGHT = 40;
const BTN_HEIGHT_SMALL = 30;

export default () => {
  return merge(defaultTheme, {

    'mbm.modal.DetailModal': {
      'shoutem.ui.View': {
        flex: 1,
      },
    },

    ...createSharedStyle(['mbm.common.ProfileBlock', 'mbm.common.OpportunityBlock'], {
      'shoutem.ui.View': {

        'shoutem.ui.ImageBackground': {
          flex:2, // height of the image background
          padding: 20,
          alignItems: 'flex-start',
          // backgroundColor: 'orange'
        },

        '*.content-section': {
          flex: 5,
          position: 'relative',
        },

        flex:1
      },
    }),

    'mbm.DashboardScreen': {
      'mbm.common.ButtonsGroup': {
        'shoutem.ui.View': {
          flex:1,
          backgroundColor: Colors.darkBlue,
          margin:0,
          padding:0,

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

    'mbm.ChatScreen': {

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
                  fontSize:12,
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
            paddingBottom: 0,
            color: Colors.white,
            fontFamily: "FontAwesome"
          }
        },
      },
    },
    'mbm.Authentication': {
      // Code here
    },
    'mbm.grid.Listing': {

    },
    'mbm.grid.GridRow': {
      'shoutem.ui.View': {
        'shoutem.ui.Row': {
          'shoutem.ui.View': {

            'shoutem.ui.View.details': {
              'shoutem.ui.View': {
                'shoutem.ui.Text': {
                  fontFamily: Fonts.primaryRegular,
                  fontSize: 14,
                  color: Colors.defaultText,
                  textAlign: 'right',
                }
              }
            },

            'shoutem.ui.Caption': {
              fontFamily: Fonts.primarySemiBold,
              fontSize: 13,
              color: Colors.secondary,
            },

            'shoutem.ui.Title': {
              fontFamily: Fonts.primaryBold,
              fontSize: 16,
              padding:0,
              margin:0,
              color: Colors.defaultText
            },

            'shoutem.ui.Subtitle': {
              fontFamily: Fonts.primaryRegular,
              fontSize: 14,
              color: Colors.lightGray
            },

            // TODO: move to component
            'shoutem.ui.View.badge': {
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }
          },

          paddingVertical: 16,
          paddingHorizontal: 10,
          // backgroundColor: 'green'
        }
      },
    },

    'mbm.common.AttributeRow': {
      'shoutem.ui.Row': {
        'shoutem.ui.View': {

          marginTop:0,
          marginBottom: 3,

          ...createSharedStyle([...textComponents], {
            fontSize: 16,
            fontFamily: Fonts.primaryRegular,
            color: Colors.defaultText
          }),

          'shoutem.ui.Heading': {
            fontSize: 16,
            fontFamily: Fonts.primaryBold,
            color: Colors.headingTextColor
          },

          'shoutem.ui.Title': {
            fontSize: 20,
            marginHorizontal: 0,
            paddingHorizontal: 0,
            fontFamily: Fonts.primaryRegular,
            color: Colors.defaultText
          },
        },


        paddingVertical:0,
        paddingBottom:15
      },
    },
    'mbm.common.Anchor': {
      ...createSharedStyle([...textComponents], {
        fontSize:13,
        color: Colors.primary,
        fontFamily: Fonts.primarySemiBold,
      })
    },
    'mbm.common.QuickInfo': {
      'shoutem.ui.View': {

        ...createSharedStyle([...textComponents], {
          fontSize:12,
          color: Colors.white,
          fontFamily: Fonts.primaryRegular,
        }, {
          'shoutem.ui.Subtitle' : {
            fontSize:responsiveFontSize(2.5),
            fontFamily: Fonts.primaryBold
          },
          'shoutem.ui.Caption' : {
            fontSize:responsiveFontSize(1.75),
            fontFamily: Fonts.primaryBold
          }
        }),
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        // backgroundColor:'red'
      },
    },

    ...createSharedStyle(['mbm.common.OpportunityHeader', 'mbm.common.ProfileHeader'], {
      'shoutem.ui.View': {
        'shoutem.ui.View.content': {

          'shoutem.ui.Title':{
            color: Colors.white,
            fontFamily: Fonts.primaryBold,
            fontSize: 24, // hp('4%'),
            letterSpacing: 0.04,
            marginBottom: 8,
            padding:0,
          },
          'shoutem.ui.View': {
            'shoutem.ui.Subtitle':{
              color: Colors.white,
              fontFamily: Fonts.primaryLight,
              fontSize: 14, // hp('3%'),
              marginBottom: 3,
            },
            'shoutem.ui.Caption': {
              color: Colors.white,
              fontFamily: Fonts.primaryRegular,
              fontSize: 16, // hp('2%'),
            }
          },

          flex: 3,
          paddingRight: 10,
          // backgroundColor:'red'
        },
        'shoutem.ui.View.avatar': {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop:16,
          // backgroundColor:'green',

          '*.medium-avatar': {
            width: dimensionRelativeToIphone(80),
            height: dimensionRelativeToIphone(80),
            borderRadius: 40,
            borderWidth: 3,
            borderColor: Colors.topNavBarColor
          },
        },

        flex: 1,
        flexDirection: 'row',
        marginTop: 14
      }
    }),

    'mbm.common.StyledButton': {

    },

    'mbm.common.Badge': {
      'shoutem.ui.View': {
        'shoutem.ui.Text': {
          fontSize: 13,
          color: '#fff',
        },

        backgroundColor: DEFAULT_COLORS.color,
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 6,

        '.success': {
            'shoutem.ui.Text': {
              color: Colors.white
            },
          backgroundColor: Colors.green,
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

    'mbm.common.ContactBlock': {
      'shoutem.ui.View': {
        'shoutem.ui.View': {
          'shoutem.ui.Caption': {

          },
          'shoutem.ui.Heading': {
            fontFamily: Fonts.primarySemiBold,
            fontSize:20,
            color: Colors.defaultText
          }
        }
      },

      icon: {
        paddingRight: 6,
        color: Colors.primary,
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

      '.light' : {
        'shoutem.ui.Text': {
          color: Colors.white,
        },
        borderColor: Colors.orange,
        backgroundColor: Colors.orange,
      },

      // Vertically stacked icon and text
      '.stacked': {
        paddingRight:12, // Little fix for missing some pixels
      },

      '.bottom': {
        height:54,
        paddingBottom:6,
        paddingTop:6,
        borderTopColor: Colors.tabNavigationBorder,
        borderTopWidth: 0.5,
        'shoutem.ui.Text': {
          color: Colors.grey,
          fontSize:12,
        },
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
      '.image-overlay': {
        backgroundColor: changeColorAlpha("#000", 0.4),
      },
    }
  });
}