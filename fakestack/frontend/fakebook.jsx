import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement('body');
    let store;
    if (window.currentUser) {
    const preloadedState = {session: {currentUser:window.currentUser,  errors: []}, currentUserProfile: window.currentUser};
    store = configureStore(preloadedState);
    delete window.curentUser;
  } else {
    store = configureStore();
  }
    window.store = store;
    window.__root_container = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, window.__root_container);

});
