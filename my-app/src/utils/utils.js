import { WIN_PATTERNS } from '../constans';
export const checkWin = (field) => {
	for (const pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;
		if (field[a].name && field[a].name === field[b].name && field[a].name === field[c].name) {
			field[a].style_win = true;
			field[b].style_win = true;
			field[c].style_win = true;
			return true;
		}
	}
	return false;
};

export const checkDraw = (field) => {
	return field.every((cell) => cell.name !== '');
};

// Инициализация поля
export const initializeField = () => {
	return [
		{ id: '0', name: '', style_win: false },
		{ id: '1', name: '', style_win: false },
		{ id: '2', name: '', style_win: false },
		{ id: '3', name: '', style_win: false },
		{ id: '4', name: '', style_win: false },
		{ id: '5', name: '', style_win: false },
		{ id: '6', name: '', style_win: false },
		{ id: '7', name: '', style_win: false },
		{ id: '8', name: '', style_win: false },
	];
};
