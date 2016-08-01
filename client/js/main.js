import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const Showcase = window.initialData.showcase

ReactDOM.render(<App showcase={Showcase} />, document.querySelector('#main'));
