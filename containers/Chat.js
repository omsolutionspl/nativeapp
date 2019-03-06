import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose';

import ChatScreen from '../screens/Chat/ChatScreen';

import {
  loadMessagesList,
  getMessages,
  isLoadingMessages,
} from '../reducers/Features/Chat';

export default compose(
    connect(
        state => {
          return {
            messagesList: getMessages(state),
            messagesListLoading: isLoadingMessages(state),
          }
        },
        (dispatch, ownProps) => {
          return {
            loadMessagesList: () => dispatch(loadMessagesList()),
          }
        },
    ),
    lifecycle({
      componentDidMount() {
        this.props.loadMessagesList();
      }
    }),
    withState('searchText', 'setSearchText', ''),
)(ChatScreen);
