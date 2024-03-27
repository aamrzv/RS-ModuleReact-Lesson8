const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Горизонтальные линии
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Вертикальные линии
	[0, 4, 8],
	[2, 4, 6], // Диагональные линии
];
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
