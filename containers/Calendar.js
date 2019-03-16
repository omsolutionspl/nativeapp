import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import { loadItems, getItems } from '../reducers/Features/Agenda';

import CalendarScreen from '../screens/AgendaScreen';

export default compose(
    connect(
        state => ({
          items: getItems(state),
        }),
        dispatch => ({
          loadItems: items => dispatch(loadItems(items)),
        }),
    ),
)(CalendarScreen);
