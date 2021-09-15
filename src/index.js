import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { store } from "./redux/store";
import { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
