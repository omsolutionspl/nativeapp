import React, {Component} from "react";
import {Platform, ScrollView, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
//import { Icon } from 'expo';
import { map } from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Text } from '@shoutem/ui/components/Text'
import { connectStyle } from '@shoutem/theme';

class ActionButtons extends Component {

  renderButton(button)
  {
    return <Button
        key={`dash_btn_${button.title}`}
        //icon={<Ionicons name={button.icon} size={12} color={button.color || "white"} />}
        buttonStyle={styles.button}
        title={button.title}
    />
  }

  renderGroup()
  {
    return map(this.props.buttons, (button) => this.renderButton(button))
  }

  render() {

    const { buttons, style } = this.props

    return (
        <SafeAreaView style={{flex: 1, flexDirection:'row', backgroundColor: '#fff'}}>
          <View styleName="horizontal flexible">
            {buttons.map(button =>
                <Button
                  onPress={button.onPress}
                  key={`btn_${button.label}`}
                  style={style.button}
                  styleName="stacked full-width">
                  <Ionicons
                  name={'md-people'}
                  size={20}
                  style={style.icon}
                  />
                  <Text style={style.buttonText}>{button.label}</Text>
               </Button>
            )}
          </View>
        </SafeAreaView>
    );
  }

}


const styles = {
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#000",
  },

  buttonText: {
    fontFamily:"sans-pro",
    color:"#fff"
  },

  icon: {
    color:"#fff",
    marginRight: 4,
    marginTop:1
  },

  'ui.shoutem.Button' : {
    backgroundColor: "#000",
  },

  'mbm.dashboard.ActionButtons': {
    backgroundColor: "#000",
    fontFamily: 'sans-pro',
    fontSize: 30
  }
};


// connect the component to the theme
export default connectStyle('mbm.dashboard.ActionButtons', styles)(ActionButtons);
