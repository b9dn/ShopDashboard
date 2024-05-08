import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";
const Store = createStore(Reducer, initialState);
export default Store;
