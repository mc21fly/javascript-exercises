function add () {
	return arguments[0] + arguments[1];	
}

function subtract () {
	return arguments[0] - arguments[1];
}

function sum () {
	let array = arguments[0];
	let suma = 0;

	for (let i = 0; i < array.length; i++) {
		suma += array[i];
	}

	return suma;
}

function multiply () {
	let array = arguments[0];
	let suma = array[0];

	for (let i = 1; i < array.length; i++) {
		suma *= array[i];
	}

	return suma;
}

function power() {
	return Math.pow(arguments[0], arguments[1]);
}

function factorial(num) {
	if (num == 0 || num == 1) {
		return 1;
	}
	else {
		return num * factorial(num-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}