import { FETCH_ALL, FETCH_POST } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getCard = (id) => async (dispatch) => {
  try {
    

    const { data } = await api.fetchCard(id);

    dispatch({ type: FETCH_POST, payload: { card: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getCards = () => async (dispatch) => {
  try {
    
    const { data } = await api.fetchCards();
    //console.log(data,"actions-cards")
    dispatch({ type: FETCH_ALL, payload:data  });
    
  } catch (error) {
    console.log(error);
  }
};