import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import { Button } from '@shoutem/ui/components/Button'
import { Button as RNButton } from '../../components/'
import { Image } from '@shoutem/ui/components/Image'
import { Row } from '@shoutem/ui/components/Row'
import { AuthSession } from 'expo';
import Layout from '../../constants/Layout'

import { connectStyle } from '@shoutem/theme';
import appStyles from '../../constants/styles';

const FB_APP_ID = '11';

/**
 * https://docs.expo.io/versions/latest/sdk/auth-session/
 * https://goshakkk.name/auth-in-react-native-apps/
 * https://github.com/oblador/react-native-keychain
 */
class Authentication extends React.Component {
  static navigationOptions = {
    title: 'Authentication',
  };

  state = {
    logging: false,
    result: null,
  };

  _handlePressAsync = async () => {

    this.setState({logging : true})
    await setTimeout(function() {
      this.setState({logging : false})
      this.props.navigation.navigate('App');
      // TODO: Redux actions
    }.bind(this), 1000);

    /*
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
      `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
      `&client_id=${FB_APP_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    this.setState({ result });
    */
  };

  render() {

    const { style } = this.props

    return (
        <View style={style.container}>

          <View styleName="horizontal" style={{marginLeft: -10}}>
            <Image
                // styleName={"small"}
                source={require('../../assets/images/app/mbm-logo-350.png')}
                style={{ width: 320, height: 90 }}
            />
          </View>

          <View styleName="vertical">
            <Text style={style.header_big}>
              Welcome back!
            </Text>
            <Text style={style.header_small}>
              sign in to continue
            </Text>
          </View>

          <View>
            <View style={style.inputsRow}>
              <TextInput
                  style={style.inputs}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  placeholder={'username'}
              />

              <TextInput
                  style={style.inputs}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  placeholder={'password'}
                  secureTextEntry={true}
              />
            </View>
          </View>

          <View style={{marginTop:22}}>
            <RNButton
                primary
                rounded
                loading={this.state.logging}
                style={{ marginTop:4 }}
                caption={this.state.logging ? "Logging..." : "Sign In"}
                onPress={this._handlePressAsync}
            />

            <RNButton
                primary
                bordered
                rounded
                style={{ marginTop:4 }}
                caption={"Sign In with OpenID"}
                onPress={this._handlePressAsync}
            />

          </View>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    //flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: (Layout.window.width/100)*7, // 7% 42
    paddingRight: (Layout.window.width/100)*7 // 7% 42
  },
  header_big: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: appStyles.default.fontFamily
  },
  header_small: {
    fontWeight: 'normal',
    fontSize: 20,
    color: appStyles.mutedText.color,
    paddingLeft: 2,
    fontFamily: appStyles.default.fontFamily
  },
  inputsRow: {
    marginTop:50,
    paddingRight:10
  },
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding:5,
    marginTop:10
  }
};

// connect the component to the themes
export default connectStyle('mbm.Authentication', styles)(Authentication);

