import styles from './GameLayout.module.css';
import { Information } from './Information/Information';
import { Field } from './Field/Field';
import { useState } from 'react';
import { store } from '../store';

export const GameLayout = () => {
	const [state, setState] = useState(store.getState());
	store.subscribe(() => {
		setState(store.getState());
	});
	const handleRestartClick = () => {
		store.dispatch({ type: 'HANDLE_RESTART_CLICK' });
	};
	return (
		<div className={styles.conteiner}>
			<button className={state.isGameEnded || state.isDraw ? `${styles.btn} ${styles.btnAn}` : styles.btn} onClick={() => handleRestartClick()}>
				Начать заново
			</button>
			<Information />
			<Field />
		</div>
	);
};
