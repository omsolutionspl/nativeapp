import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';

import MessagesScreen from '../screens/Chat/messages/MessagesScreen';
import { loadMessages, sendMessage } from '../reducers/Features/Chat';

export default compose(
    connect(
        state => ({
          messages: state.app.chat.messages,
        }),
        dispatch => ({
          loadMessages: userId => dispatch(loadMessages(userId)),
          sendMessage: (userId, message) => dispatch(sendMessage(userId, message)),
        }),
    ),
)(MessagesScreen);
