import React from 'react';
// import { Icon } from 'expo';
import { Button } from '@shoutem/ui/components/Button'
import Colors from '../../constants/Colors';

import { Icon } from '@shoutem/ui/components/Icon'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
export default class GoBackBtn extends React.Component {
  render() {
    return (
        <View style={{
          flex:1,
          flexDirection: 'row',
          position:'absolute',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          zIndex: 2222
        }}>
          <Button styleName="clear" style={{
            flex:1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            backgroundColor: "transparent",
            zIndex: 2333
          }} onPress={() => this.props.navigation.goBack()}>
            <Icon style={{color:"#fff", marginTop:20}} name="close" />
          </Button>
        </View>
    );
  }
}