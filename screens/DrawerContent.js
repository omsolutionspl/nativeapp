import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';
import { Constants, Permissions, Notifications } from 'expo';
import { DrawerItems, SafeAreaView } from 'react-navigation';

export default class DrawerContent extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/images/icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
        <View style={{ marginTop: Constants.statusBarHeight }}>
            <Image
                source={require('../assets/images/app/mbm-logo-350.png')}
                style={{ width: 210, height: 60, marginLeft: 12 }}
            />
          <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItems {...this.props} />
            </SafeAreaView>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
