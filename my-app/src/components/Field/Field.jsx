import { FieldLayout } from './FieldLayout';
import { useState } from 'react';
import { store } from '../../store';

export const Field = () => {
	const [state, setState] = useState(store.getState());
	store.subscribe(() => {
		setState(store.getState());
	});
	const handleBtnClick = (id) => {
		store.dispatch({
			type: 'HANDLE_BTN_CLICK',
			payload: { id },
		});
	};
	return <FieldLayout field={state.field} btnClick={handleBtnClick} />;
};
