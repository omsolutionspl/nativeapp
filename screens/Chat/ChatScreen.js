import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Fonts, Colors } from '../../constants';
import {
  TextInput,
} from '../../components';
import {
  Text,
  Caption,
  Title,
} from '@shoutem/ui/components/Text';

import {connectStyle} from "@shoutem/theme/index";

//onPress={() => this.props.navigate({ routeName: 'Messages', params: { ...item } })}
class ChatScreen extends React.Component {

   _renderItem = ({ item }) => {

     const { props: { navigation } } = this

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate({ routeName: 'Messages', params: {
            title: item.userName,
            ...item,
          }
        })}
      >
        <View style={styles.messageItem}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              defaultSource={require('../../assets/images/default-avatar.png')}
              source={item.userAvatar ? { uri: item.userAvatar } : require('../../assets/images/default-avatar.png')}
            />
            { item.online && (
              <View style={styles.onlineBadge} />
            )}
          </View>
          <View style={{ flex: 1, paddingLeft: 15 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Title color={Colors.darkGray}>{item.userName}</Title>
              <Caption color={Colors.lightGray}>{item.time}</Caption>
            </View>
            <View styleName="vertical v-start" style={{ alignSelf: 'stretch' }}>
            <Caption color={Colors.lightGray} numberOfLines={1}>{item.lastMessage}</Caption>
            </View>
          </View>
        </View>
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
      <View style={styles.container}>
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
          style={{ backgroundColor: Colors.white }}
          refreshing={props.messagesListLoading}
          onRefresh={props.loadMessagesList}
          ListEmptyComponent={this._renderNoItemsComponent.bind(this)}
          data={filteredMessages}
          keyExtractor={item => item.id}
          renderItem={this._renderItem.bind(this)}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  empty: {
    textAlign:'center',
    color:Colors.defaultText
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  avatarContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  onlineBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3CD4A4',
    position: 'absolute',
    right: 0,
    bottom: -5
  },
  messageItem: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },
}

// connect the component to the theme
export default connectStyle('mbm.ChatScreen', styles)(ChatScreen);
