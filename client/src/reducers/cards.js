import { FETCH_ALL, FETCH_POST } from '../constants/actionTypes';

export default (state = {  cards: [] }, action) => {
  switch (action.type) {
    
    case FETCH_ALL: 
      
      return action.payload
    
    case FETCH_POST:
      //console.log(state)
      return { ...state, cards: action.payload.cards };
    default:
      return state;
  }
};

