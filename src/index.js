import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import mockApi from './api/mockApi.js';

// mocks call to load data (action)
let data = mockApi.getData();
// mocks logged-in user
let user = {
	id: 0,
	firstName: 'John',
	lastName: 'Doe',
	email: 'john@example.com',
	phone: 1234567890,
	city: 'New York, NY'
};

ReactDOM.render(
	<App data={data} user={user} />,
	document.getElementById('app')
);
