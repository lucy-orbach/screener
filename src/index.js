import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import mockApi from './api/mockApi.js';

// mocks call to load data (action)
let data = mockApi.getData();

ReactDOM.render(
	<App data = {data} />,
	document.getElementById('app')
);
