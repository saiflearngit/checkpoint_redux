import { createStore, combineReducers } from "redux";
import filterReducer from "./Reducers/filterReducer";
import toDoReducer from "./Reducers/toDoReducer";
import rootReducer from "./Reducers";

// export default createStore(toDoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const rootReducer = combineReducers({toDo:toDoReducer});

// const rootReducer = combineReducers({toDoReducer,filterReducer});
export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
