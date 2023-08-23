import {createStore} from "redux";
import equationReducer from "./reducers";

const store = createStore(equationReducer);

export default store;