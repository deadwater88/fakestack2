import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

console.log("js loaded");

document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser) {
    const preloadedState = {session: {currentUser:window.currentUser,  errors: []}, currentUserProfile: window.currentUser};
    store = configureStore(preloadedState);
    delete window.curentUser;
  } else {
    store = configureStore();
  }
      window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
