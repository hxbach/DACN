import { ADD_TO_CART, REMOVE_FROM_CART, RESET } from "../ActionTypes";
const initialState = []
const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
      break;
    case REMOVE_FROM_CART:
      const deletedArray1 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray1;
    case RESET:
      return initialState
    default:
      return state;
      
  }
};

export default reducers;
