// Аналитический способ

const Solution = (x, y) => {
	if (y > x) {
		throw new Error('Жуков не может быть больше чем камней')
	}

	// очередь для хранения свободных участков, изначально это вся длина линии
	const spaces = [];
	spaces.push(x);
	
	// переменные для хранения свободных мест слева и справа от последнего камня
	let left, right;

	// цикл, в котором происходит разбитие свободного участка напополам; количество итераций = количество жуков
	while (y) {
		// уменьшаем жуков на каждой итерации
		y--;

		// берем первый, самый большой участок; уменьшаем на 1, поскольку одно место займет жук
		const place = spaces.shift() - 1;
		
		// округляем левую и правую части, в случае если они оказались дробными
		left = Math.floor(place/2);
		right = Math.ceil(place/2);

		// добавляем новые участки в очередь, по убыванинию размера (сначала большой, потом маленький)
		// какой-то из правых участков может оказаться больше, чем последний в очереди, поэтому нужно отсортировать участки по длине
		// поскольку участки добавляются парами(по два на каждой итерации), мы можем отсортировать их, сравнивая с последним элементом в массиве
		if (spaces[spaces.length - 1] < right) {
			spaces.splice(spaces.length - 1, 0, right);
		} else {
			spaces.push(right);
		}
		spaces.push(left);
	}

	return [left, right];
}

// если будет использоваться как модуль, то вот экспорт. намеренно не использую es6 modules
module.exports = Solution;

// тесты
console.log(Solution(8, 1)) // [3, 4]
console.log(Solution(8, 2)) // [1, 2]
console.log(Solution(8, 3)) // [1, 1]
console.log(Solution(24, 7)) // [2, 2]
console.log(Solution(9, 5)) // [0, 1]
console.log(Solution(24, 8)) // [1, 1]