const initialState = {
  isLoading: false,
  categories: [],
  currentCategory: null
};

const FETCH = 'etherlist/categories/FETCH';
const RECEIVE = 'etherlist/categories/RECEIVE';
const SELECT = 'etherlist/categories/SELECT';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return Object.assign({}, state, {
        isLoading: true
      });
    case RECEIVE:
      return Object.assign({}, state, {
        isLoading: false,
        categories: action.categories
      });
    case SELECT:
      return Object.assign({}, state, {
        currentCategory: action.currentCategory
      });
    default:
      return state;
  }
}

export function fetch() {
  return {
    type: FETCH
  };
}

export function receive(categories) {
  return {
    type: RECEIVE,
    categories
  };
}

export function select(currentCategory) {
  return {
    type: SELECT,
    currentCategory
  };
}
