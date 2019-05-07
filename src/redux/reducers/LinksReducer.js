import types from '../actions/ActionTypes'

const initialState = {
  links: []
}

const LinksReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_LINK:
      return {
        ...state,
        links: [
          ...state.links,
          {
            url: action.url
          }
        ]
      }
    default:
      return state;
  }
}

export default LinksReducers;
