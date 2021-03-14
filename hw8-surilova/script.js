function copyAll(param) {
	if (Array.isArray(param)) {
		const newArr = [];
		for (let i = 0; i < param.length; i++) {
			if (Array.isArray(param[i]) || typeof param[i] === "object" && param[i] !== null) {
				newArr.push(copyAll(param[i]));
				continue;
			}
			newArr.push(param[i]);
		}
		return newArr;
	}

	if (typeof param === "object" && param !== null) {
		const result = {};
		for (const key in param) {
			if (Array.isArray(param[key]) || typeof param[key] === "object" && param[key] !== null) {
				result[key] = copyAll(param[key]);
				continue;
			}
			result[key] = param[key];
		}
		return result;
	}
}

const company = {
	sales: {
		online: {
			odessa: [
				{ name: "Jane", salary: 1000 },
				{ name: "Jane", salary: 1000 },
			],
			kyev: [
				{ name: "Jane", salary: 1000 },
				{ name: "Jane", salary: 1000 },
			],
		},
		offline: [
			{ name: "Jane", salary: 1000 },
			{ name: "Jane", salary: 1000 },
		],
	},
	development: {
		sites: [
			{ name: "Peter", salary: 2000 },
			{ name: "Alex", salary: 1800 },

		],
		online: [
			{
				odessa: [
					{ name: "Jane", salary: 1000 },
					{ name: "Jane", salary: 1000 },
				],
				kyev: [
					{ name: "Jane", salary: 1000 },
					{ name: "Jane", salary: 1000 },
				],
			},
		],
		internals: [{ name: "Jack", salary: 1300 }],
	},
};

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, { a: 1 }]]];
const arr2 = copyAll(arr);

const company2 = copyAll(company);
// Тесты
// Переназначает в новом объекте company2 значания
company2.sales.online.odessa[0].name = "Chris";
company2.sales.online.odessa[0].salary = 2000;
// Выводы в консоль и проверка что в изначальном объекте company значения не изменились
console.log(company2.sales.online.odessa[0].name);
console.log(company.sales.online.odessa[0].name);
console.log(company2.sales.online.odessa[0].salary);
console.log(company.sales.online.odessa[0].salary);
console.log(company);
console.log(company2);



// Функция с замыканием, котороя со второго вызова суммирует аргументы
function sumWithClosures() {
	let startNum = 0;
	return function sum(num) {
		return startNum += num;
	};
}
const sum = sumWithClosures();

console.log(sum(5));
console.log(sum(10));
console.log(sum(15));