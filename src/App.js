import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../this.state.';
import RepositoriesList from './RepositoriesList';

export default function App() {
	return (
		<Provider store={store}>
			<div>
				<h1>Search For a Pachage</h1>
				<RepositoriesList />
			</div>
		</Provider>
	);
}
