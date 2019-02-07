import React from 'react';
import { ScrollView, View, StyleSheet, Image, TextInput } from 'react-native';
import { Text, Button } from 'react-native'
import { AuthSession } from 'expo';

import appStyles from '../../constants/styles';

const FB_APP_ID = '11';

/**
 * https://docs.expo.io/versions/latest/sdk/auth-session/
 * https://goshakkk.name/auth-in-react-native-apps/
 * https://github.com/oblador/react-native-keychain
 */
export default class Authentication extends React.Component {
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
    return (
        <View style={styles.container}>

          <View>
            <Image
                source={require('../../assets/images/app/mbm-logo-350.png')}
                style={{ width: 320, height: 90 }}
            />
          </View>

          <View style={{paddingLeft: 7}}>
            <Text style={styles.header_big}>
              Welcome back!
            </Text>
            <Text style={styles.header_small}>
              sign in to continue
            </Text>
          </View>

          <View style={styles.inputsRow}>
            <TextInput
                style={styles.inputs}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder={'username'}
            />

            <TextInput
                style={styles.inputs}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder={'password'}
                secureTextEntry={true}
            />
          </View>
          <View style={{paddingLeft: 0, marginTop:20, color: "red", alignItems: 'flex-start'}}>
            <Button style={{color: "red"}} title={this.state.logging ? "Logging..." : "Sign In"} disabled={this.state.logging} onPress={this._handlePressAsync} />
            <Button style={{color: "red"}} title="Sign In with OpenID" disabled={this.state.logging} onPress={this._handlePressAsync} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 40,
    backgroundColor: '#fff',
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
    paddingLeft: 7,
    paddingRight:60,
    marginTop:50
  },
  inputs: {
    height: 40, borderColor: 'gray',
    borderBottomWidth: 1,
    padding:5,
    marginTop:10
  }
});
