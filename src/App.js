import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import authReducer from "./store/reducers/auth";
import thunk from "redux-thunk";

import StartingScreen from "./pages/StartingPage";

function App() {
  const rootReducer = combineReducers({
    authReducer: authReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <StartingScreen />
    </Provider>
  );
}

export default App;
