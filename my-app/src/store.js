import { createStore } from 'redux';
import { gameReducer } from './reducer';

// Создаем Redux store
export const store = createStore(gameReducer);
