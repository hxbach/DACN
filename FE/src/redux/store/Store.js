import { createStore } from "redux";
import reducers from "../reducers/Reducers";
import reducers2 from "../reducers/Reducers2";
import addAddressReducers from "../reducers/AddressReducers"
import { combineReducers } from "redux";

const routeReducer = combineReducers({reducers, reducers2, addAddressReducers})

export const store = createStore(routeReducer)

export default store