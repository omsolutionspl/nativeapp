import React from 'react';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connectStyle} from "@shoutem/theme/index";
import { Fonts, Colors } from '../../constants';

import {
  Text,
  Caption,
  Title,
  Subtitle
} from '@shoutem/ui/components/Text';

import { Image } from '@shoutem/ui/components/Image'
import { View } from '@shoutem/ui/components/View'
import { Row } from '@shoutem/ui/components/Row'

//onPress={() => this.props.navigate({ routeName: 'Messages', params: { ...item } })}
class ChatScreen extends React.Component {

   _renderItem = ({ item }) => {

     const { props: { navigation } } = this

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate({ routeName: 'Messages', params: {
            title: `Chat with ${item.userName}`,
            ...item,
          }
        })}
      >

        <Row>
          <Image
              style={styles.avatar}
              styleName="small rounded-corners"
              source={item.userAvatar ? { uri: item.userAvatar } : require('../../assets/images/default-avatar.png')}
          />
          { item.online && (<View style={styles.onlineBadge} />)}
          <View styleName="vertical">
            <View styleName="horizontal space-between">
              <Subtitle>{item.userName}</Subtitle>
              <Caption>{item.time}</Caption>
            </View>
            <Caption numberOfLines={1}>
              {item.lastMessage}
            </Caption>
          </View>
        </Row>
      </TouchableOpacity>
    );
  }

  _renderNoItemsComponent = () => {
    return (
      <View>
        <Text style={this.props.style.empty}>No Items</Text>
      </View>
    );
  }

  render()
  {
    const { props, state } = this;

    //console.log(props.searchText, '@@', props.setSearchText);

    let filteredMessages = props.messagesList;
    // if (props.searchText) {
    //   filteredMessages = props.messagesList.filter(message => message.userName.indexOf(props.searchText) !== -1);
    // }

    return (
      <View>
        {/*
        <TextInput
          type="bordered"
          placeholder="Search"
          placeholderTextColor={Colors.lightGray}
          dark
          value={props.searchText}
          onChangeText={value => props.setSearchText(value)}
        />
        */}
        <FlatList
          refreshing={props.messagesListLoading}
          onRefresh={props.loadMessagesList}
          ListEmptyComponent={ ! props.messagesListLoading ? this._renderNoItemsComponent.bind(this) : null}
          data={filteredMessages}
          keyExtractor={item => `user_${item.id}`}
          renderItem={this._renderItem.bind(this)}
        />
      </View>
    );
  }
}

const styles = {
  empty: {
    textAlign:'center',
    color: Colors.defaultText
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  onlineBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3CD4A4',
    position: 'absolute',
    left: 20,
    bottom: 20
  },
}

// connect the component to the theme
export default connectStyle('mbm.ChatScreen', styles)(ChatScreen);
