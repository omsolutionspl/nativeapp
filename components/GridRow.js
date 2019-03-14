import React from 'react';
import { Platform } from 'react-native';
import {
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Colors, Fonts, Layout } from '../constants';

import {connectStyle} from "@shoutem/theme/index";

import { View } from '@shoutem/ui/components/View'
import { Row } from '@shoutem/ui/components/Row'
import { Text, Title, Subtitle, Caption } from '@shoutem/ui/components/Text'
import { Image } from '@shoutem/ui/components/Image'
import { Divider } from '@shoutem/ui/components/Divider'
import Badge from '../components/Badge'
import { Icon } from '@shoutem/ui/components/Icon'


export const IMAGE_ROW = 'image_row';
export const ITEM_ROW = 'item_row';

class GridRow extends React.Component {

  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  getType() {
    return this.props.type || IMAGE_ROW;
  }

  onPress(e) {
    this.props.onPress(e); // Redux change
  }

  renderRowOne(rowData) {
    const cellViews = rowData.item.map(item => (
        <TouchableOpacity
            key={item.id}
            onPress={this.onPress}
        >
          <View style={styles.itemOneContainer}>
            <View style={styles.itemOneImageContainer}>
              <Image
                  style={styles.itemOneImage}
                  source={{ uri: item.image }}
              />
            </View>
            <View style={styles.itemOneContent}>
              <Text style={styles.itemOneTitle} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.itemOneSubTitle} styleName="collapsible" numberOfLines={3}>{item.subtitle}</Text>
              <Text style={styles.itemOnePrice} numberOfLines={1}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
    ));
    return (
        <View
            key={rowData.item[0].id}
            style={styles.itemOneRow}>
          {cellViews}
        </View>
    );
  }



  render() {
    const { style, styleName, item } = this.props

    if (this.getType() === ITEM_ROW && item.badge === 'NEW') {
      style.badge.backgroundColor = Colors.green
    }

    return <View styleName={styleName}>

      {this.getType() === IMAGE_ROW ?
        <TouchableOpacity
            key={item.id}
            style={style.itemTwoContainer}
            onPress={this.onPress}
        >
          <View style={style.itemTwoContent}>
            <Image
                style={style.itemTwoImage}
                source={{ uri: item.image }}
            />
            <View style={style.itemTwoOverlay} />
            <Text style={style.itemTwoTitle}>{item.title}</Text>
            <Text style={style.itemTwoSubTitle}>{item.subtitle}</Text>
            <Text style={style.itemTwoPrice}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      : null}

      {this.getType() === ITEM_ROW ?
      <TouchableOpacity
          key={item.id}
          activeOpacity={1}
          onPress={this.onPress}
      >
        <Row>
          {item.image ?
          <Image
              styleName="small rounded-corners top"
              source={{ uri: item.image }} />
          : null}

          <View styleName={"vertical"}>

            <Caption>{item.brand}</Caption>
            <Title>{item.title}</Title>
            <Subtitle numberOfLines={1}>{item.subtitle}</Subtitle>

            <View styleName={"details horizontal space-between v-start"}>

              <View styleName={"vertical"} style={{marginTop:-2}}>
                {item.badge && (
                  <Badge styleName={item.badge.type}>{item.badge.label}</Badge>
                )}
              </View>

              <View styleName={"vertical"}>
                <Text>{item.detailInfo}</Text>
                <Text styleName="multiline">{item.detailRow}</Text>
              </View>

            </View>

          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>

        <Divider styleName={"line"} style={{color:"#e3e3e3", backgroundColor: "#e3e3e3"}}/>

      </TouchableOpacity>
      : null}

    </View>
  }
}

const styles = { //
  itemOneContainer: {
    flex: 1,
    width: (Dimensions.get('window').width / 2 - 40),
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor:'green'
  },
  itemOneImage: {
    height: 200,
    width: (Dimensions.get('window').width / 2 - 40),
  },
  itemOneTitle: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 3,
    margin:3,
    backgroundColor: 'white',
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: Colors.white,
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.yellow,
    opacity: 0.2,
  },
};

// connect the component to the theme
export default connectStyle('mbm.grid.GridRow', styles)(GridRow);
