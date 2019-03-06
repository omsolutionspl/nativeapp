import React from 'react';
import { Button } from '@shoutem/ui/components/Button'
import { Icon } from 'expo';
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";
import { SearchBar } from 'react-native-elements';

class FilterBar extends React.Component {
  render() {
    const { style, styleName } = this.props

    let search = ''

    return <View styleName={styleName}>
      <SearchBar
          style={{margin:10}}
          lightTheme={true}
          inputStyle={{fontSize:13}}
          containerStyle={{ backgroundColor: 'red' }}
          placeholder="Type Here..."
          onChangeText={(e) => console.log(e)}
          showLoading={true}
          value={search}
      />

      <View styleName={'horizontal space-between'} style={{padding: 10, borderBottomWidth:0.5, borderColor: "gray"}}>
          <View><Text>Found (2324) itemsaaaa</Text></View>
          <View styleName={'horizontal h-end'}>
            <Icon.Ionicons
                size={24}
                name={"md-star-outline"}
                style={{ color: 'black' }}
            />
            <Icon.Ionicons
                size={24}
                name={"md-options"}
                style={{ color: 'black' }}
            />
            <Text>C</Text>
          </View>
      </View>
    </View>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.FiltersBar', styles)(FilterBar);
