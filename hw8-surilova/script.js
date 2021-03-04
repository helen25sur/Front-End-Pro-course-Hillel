function copyAll(param) {
	// Вспомогательная функция для копирования массивов
	function copyArr(target, origin) {
		for (let i = 0; i < origin.length; i++) {
			if (Array.isArray(origin[i])) {
				target.push(copyArr([], origin[i]));
			} else if (typeof origin[i] === "object" && origin[i] !== null) {
				target.push(copyObj({}, origin[i]));
			} else {
				target.push(origin[i]);
			}
		}
		return target;
	}

	// Вспомогательная функция для копирования объектов
	function copyObj(target, origin) {
		for (const key in origin) {
			if (Array.isArray(origin[key])) {
				target[key] = copyArr([], origin[key]);
			} else if (typeof origin[key] === "object" && origin[key] !== null) {
				target[key] = copyObj({}, origin[key]);
			} else {
				target[key] = origin[key];
			}
		}
		return target;
	}

	// Основная функция, проверяющая тип аргумента функции и вызывающая вспомогательные
	if (Array.isArray(param)) {
		const newArr = copyArr([], param);
		return newArr;
	}
	if (typeof param === "object" && param !== null) {
		const newObj = copyObj({}, param);
		return newObj;
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

const company2 = copyAll(company);
// Тесты
// Переназначает в новом объекте company2 значания
company2.development.online[0].odessa[1].name = "Helen";
company2.development.online[0].odessa[1].salary = 1500;
// Выводы в консоль и проверка что в изначальном объекте company значения не изменились
console.log(company2.development.online[0].odessa[1].name);
console.log(company.development.online[0].odessa[1].name);
console.log(company2.development.online[0].odessa[1].salary);
console.log(company.development.online[0].odessa[1].salary);
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