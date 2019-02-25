import React, {Component} from 'react';
import { Text } from '@shoutem/ui/components/Text'
import { connectStyle } from '@shoutem/theme';

class AgendaScreen extends Component {

  render() {

    return <Text style={{fontWeight: 'bold'}}>
      AgendaScreen
    </Text>;
  }
}


const styles = {

};

// connect the component to the theme
export default connectStyle('mbm.ScheduleScreen', styles)(AgendaScreen);
