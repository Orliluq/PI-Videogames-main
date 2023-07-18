import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import { createRoot } from 'react-dom';

// Attach event listeners before rendering
document.addEventListener('DOMContentLoaded', () => {
  // Identify the element to mount the application to
  const appElement = document.querySelector('#app');
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
});

// Attach event listeners before rendering
window.onload = () => {
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};