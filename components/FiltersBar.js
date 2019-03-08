import React from 'react';
import { Button } from '@shoutem/ui/components/Button'
import { Icon } from 'expo';
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";
import { SearchBar } from 'react-native-elements';
import {ROOT_NAV_NAME} from "../constants/Navigation";
import {Colors} from "../constants";
import NavigationBar from '../components/Helpers/NavigationBar'

class FilterBar extends React.Component {
  render() {
    const { style, styleName, navigation } = this.props

    let search = 'hey'

    return <View styleName={styleName}>

      <NavigationBar
          styleName={"filters"}

          leftComponent={<Icon.Ionicons
              name={'md-arrow-back'}
              size={26}
              style={{ marginLeft: 16, marginTop: 2 }}
              onPress={() => navigation.goBack()}
              color={Colors.defaultText}
          />}

          centerComponent={<SearchBar
              lightTheme={true}
              inputStyle={{
                fontSize:14,
                backgroundColor: Colors.topNavSearchBackgroundColor
              }}
              containerStyle={{
                backgroundColor: 'transparent',
                borderTopColor: Colors.topNavBarColor,
                borderBottomColor: Colors.topNavBarColor
              }}
              inputContainerStyle={{ backgroundColor: Colors.topNavSearchBackgroundColor }}
              leftIconContainerStyle={{ backgroundColor: Colors.topNavSearchBackgroundColor }}
              rightIconContainerStyle={{ backgroundColor: Colors.topNavSearchBackgroundColor }}
              placeholder="What are you looking for?"
              onChangeText={(e) => console.log(e)}
              showLoading={false}
              value={search}
          />}

      />

      <View styleName={'horizontal space-between'} style={{
        padding: 10,
        borderBottomWidth:0.5,
        borderBottomColor: "gray"
      }}>
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
            <Text>C</Text>
          </View>
      </View>
    </View>
  }
}

const styles = {
  background: {
    backgroundColor: Colors.topNavSearchBackgroundColor
  }
}

// connect the component to the theme
export default connectStyle('mbm.common.FiltersBar', styles)(FilterBar);
