const addCommas = require("./addCommas");

describe("#addCommas", () => {
	test("it is a function", () => {
		expect(typeof addCommas).toBe("function");
	});
	test("adds commas", () => {
		const string1 = "1234567";
		const string2 = "98765432.10";
		const string3 = "123456789";
		expect(addCommas(string1)).toEqual("1,234,567");
		expect(addCommas(string2)).toEqual("98,765,432.10");
		expect(addCommas(string3)).toEqual("123,456,789");
	});
});
