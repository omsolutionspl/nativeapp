import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import { Button } from '@shoutem/ui/components/Button'
import { Image } from '@shoutem/ui/components/Image'
import { AuthSession } from 'expo';

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

          <View styleName="horizontal" style={{paddingLeft: 34}}>
            <Image
                // styleName={"small"}
                source={require('../../assets/images/app/mbm-logo-350.png')}
                style={{ width: 320, height: 90 }}
            />
          </View>

          <View styleName="vertical" style={style.padding}>
            <Text style={style.header_big}>
              Welcome back!
            </Text>
            <Text style={style.header_small}>
              sign in to continue
            </Text>
          </View>

          <View style={style.padding}>
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
          <View style={{paddingLeft:30}}>
            <View styleName="vertical h-start" style={{marginTop:24}}>
              <Button

                  disabled={this.state.logging}
                  styleName={this.state.logging ? `muted ` : ``}
                  onPress={this._handlePressAsync}>

                <Text style={style.buttonText}>{this.state.logging ? "Logging..." : "Sign In"}</Text>
              </Button>
              <Button
                  disabled={this.state.logging}
                  styleName={this.state.logging ? `muted ` : ``}
                  onPress={this._handlePressAsync}>

                <Text style={style.buttonText}>{"Sign In with OpenID"}</Text>
              </Button>
            </View>
          </View>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  padding: {
    paddingLeft: 42
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
    paddingRight:60,
    marginTop:50
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

