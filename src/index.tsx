import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./services/store";
import './index.css';

// Safely handle the case where `el` might be null
const el = document.getElementById('root');
if (el) {
  const root = ReactDOM.createRoot(el);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App /> 
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
