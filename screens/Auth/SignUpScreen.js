import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native'

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Authentication',
  };

  render() {
    return (
        <View style={styles.container}>

          <Image
              source={require('../../assets/images/app/mbm-logo-350.png')}
              style={{ width: 280, height: 80 }}
          />

          <View>
            <Text style={{fontWeight: 'bold'}}>
              I am bold
              <Text style={{color: 'red'}}>
                and red
              </Text>
            </Text>
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>
              I am bold
              <Text style={{color: 'red'}}>
                and red
              </Text>
            </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
