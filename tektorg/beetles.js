// export default 
const Solution = (x, y) => {
	if (y > x) {
		throw new Error('Жуков не может быть больше чем камней')
	}

	for (let i = 1; i <= y; i++) {}
}

console.log(Solution(6, 6))