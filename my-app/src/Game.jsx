import { useState } from 'react';
import { store } from './store';
import { initializeField } from './utils';
import { GameLayout } from './components/GameLayout';

export const Game = () => {
	const [state, setState] = useState(store.getState());
	store.subscribe(() => {
		setState(store.getState());
	});
	const handleRestartClick = () => {
		const field = initializeField();
		console.log(field);
		store.dispatch({ type: 'setRestartGame', payload: { field } });
	};
	return (
		<div>
			<GameLayout state={state} handleRestartClick={handleRestartClick} />
		</div>
	);
};
