import React, {Component} from "react";
import {
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
//import { Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Text } from '@shoutem/ui/components/Text'
import { ListView } from '@shoutem/ui/components/ListView'
import { connectStyle } from '@shoutem/theme';
import CompanyBlock from '../components/CompanyBlock'

class CompaniesScreen extends Component {
  static navigationOptions = {
    title: 'COMPANIES',
  };

  _renderRow(company, index, mode) {
    return <CompanyBlock

        item={company}

        styleName={"card"}
        //parallax={true}
        //parallaxProps={parallaxProps}

    />
  }

  _renderHeader()
  {
    const { onTabSwitch, currentTab, navigation } = this.props

    return <View>


      {/*
     <ButtonsGroup styleName={"tabs"} buttons={[
        {
          label: "Opportunities",
          active: currentTab === FILTER_OPPORTUNITIES,
          //icon:  "md-analytics", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
          onPress: () => onTabSwitch(FILTER_OPPORTUNITIES)
        },
        {
          label: "Forecasts",
          active: currentTab === FILTER_FORECASTS,
          // icon: "md-people",
          onPress: () => onTabSwitch(FILTER_FORECASTS)
        }

      ]} />
      */}

    </View>
  }

  render() {

    const { style, companies } = this.props

    console.log('render Comapnycreen', companies);

    return (

        <View styleName={"vertical"} style={{ flex:1 }}>

          <View style={{ flex:1 }}>
            <FlatList
                ref={(list) => this.flatList = list}
                style={{ paddingHorizontal: 6 }}
                autoHideHeader={true}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                keyExtractor={item => item.id}
                data={companies}
                renderItem={({ item, index }) => this._renderRow(item, index)}
            />
          </View>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

// connect the component to the theme
export default connectStyle('mbm.CompaniesScreen', styles)(CompaniesScreen);
