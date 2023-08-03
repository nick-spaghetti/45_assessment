function addCommas(string) {
	// Separate the integer and decimal parts (if any)
	const [integerPart, decimalPart] = string.split(".");

	// Iterate over the integer part in reverse and add commas
	let formattedIntegerPart = "";
	let count = 0;
	for (let i = integerPart.length - 1; i >= 0; i--) {
		count++;
		formattedIntegerPart = integerPart[i] + formattedIntegerPart;
		if (count === 3 && i !== 0) {
			formattedIntegerPart = "," + formattedIntegerPart;
			count = 0;
		}
	}

	// Combine the integer and decimal parts (if any)
	let formattedNumber = decimalPart
		? formattedIntegerPart + "." + decimalPart
		: formattedIntegerPart;

	return formattedNumber;
}

module.exports = addCommas;
