let range = (start, end, step) => {
	let rangeArr = [];
	if (start === undefined || end === undefined || step === undefined) {
		return (rangeArr = []);
	} else if (end < start) {
		return (rangeArr = []);
	} else if (step < 0) {
		return (rangeArr = []);
	} else {
		for (let i = start; i <= end; i += step) {
			rangeArr.push(i);
		}
	}
	return rangeArr;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
