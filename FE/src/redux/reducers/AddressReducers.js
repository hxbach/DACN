import { ADD_ADDRESS, REMOVE_ADDRESS, RESET } from "../ActionTypes";
const initialState = []
const addAddressReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return [...state, action.payload];
            break;
        case REMOVE_ADDRESS:
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

export default addAddressReducers;
