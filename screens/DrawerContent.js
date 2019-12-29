import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Button } from 'react-native';
import { Constants, Notifications } from 'expo';
import { DrawerItems, SafeAreaView } from 'react-navigation';

export default class DrawerContent extends React.Component {
  static navigationOptions = { };

  render() {
    return (
        <View style={{ marginTop: 0 }}>
          <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItems {...this.props} />

              <Button title={`Auth`} onPress={() => this.props.navigation.navigate('Authentication')} />
            </SafeAreaView>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});
