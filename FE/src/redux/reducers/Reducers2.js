import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, RESET } from "../ActionTypes";
const initialState =[]
const reducers2 = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_WISHLIST:
            return [...state, action.payload];
            break;
        case REMOVE_FROM_WISHLIST:
            const deletedArray2 = state.filter((item, index) => {
                return index !== action.payload;
            });
            return deletedArray2;
        case RESET:
            return initialState
        default:
            return state;
    }
};

export default reducers2;
