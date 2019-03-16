import { createSelector } from 'reselect'

const START_ITEMS_LOADING = 'CalendarState/START_ITEMS_LOADING';
const ITEMS_LOADED = 'CalendarState/ITEMS_LOADED';
const LOADING_FAILED = 'CalendarState/LOADING_FAILED';


const names = ['Max', 'Philip', 'Alex', 'Irina', 'Vovan'];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const labels = ['Urgent', 'Interview'];

const defaultState = {
  items: [],
  isLoading: false,
};

export default function agendaReducer(state = defaultState, action) {
  switch (action.type) {
    case START_ITEMS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ITEMS_LOADED:
      return Object.assign({}, state, {
        isLoading: true,
        items: action.items,
      });
    default:
      return state;
  }
}


function startItemsLoading() {
  return {
    type: START_ITEMS_LOADING,
  };
}

export function loadItems(day) {
  // Do items loading here
  return (dispatch, getState) => {

    if (getItems(getState()).length > 0) return;

    let items = {};

    for (let i = -15; i < 85; i++)
    {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = (new Date(time)).toISOString().split('T')[0];

      if (!items[strTime]) {
        items[strTime] = [];
        const numItems = randomNumber(0, 5);
        for (let j = 0; j < numItems; j++) {
          items[strTime].push({
            name: `Meeting with ${names[randomNumber(0, 4)]}`,
            time: `${randomNumber(0, 24)}:${randomNumber(0, 60)}`,
            labels: randomNumber(0, 1) ? [labels[randomNumber(0, 1)]] : [],
          });
        }
      }
    }

    const newItems = {};
    Object.keys(items).forEach((key) => { newItems[key] = items[key]; });

    dispatch(itemsLoaded(newItems));

  };
}

function itemsLoaded(items) {

  console.log(items);
  return {
    type: ITEMS_LOADED,
    items,
  };
}

function itemsLoadingFailed() {
  return {
    type: LOADING_FAILED,
  };
}

export const getItems = createSelector(
    (state) => state.app.agenda,
    state => state.items
)