// Функция возвращает true если символ найден в строке и false если нет
function isSymbolPresentInString(str, symbol) {
	for (const strSymb of str) {
		if (strSymb === symbol) {
			return true;
		}
	}
	return false;
}
console.log(isSymbolPresentInString("Hello World!", "W"));

// Функция возвращает индекс первого найденного символа в строке, или -1 если символ не найден
function getSymbolIndex(str, symbol) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === symbol) {
			return i;
		}
	}
	return -1;
}
console.log(getSymbolIndex("Hello World!", "W"));
console.log(getSymbolIndex("Hello World!", "b"));

// Функция копирует свойства из объекта origin в объект target и возвращает его
function copy(target, origin) {
	for (const key in origin) {
		target[key] = origin[key];
	}
	return target;
}
const user = {
	name: "John",
	age: 18,
	"isAdmin": false
};
const admin = copy({}, user);

// Функция сравнивает два объекта
function compare(obj1, obj2) {
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}
	const arrKeys1 = Object.keys(obj1);
	const arrKeys2 = Object.keys(obj2);
	const arrValue1 = Object.values(obj1);
	const arrValue2 = Object.values(obj2);

	for (let i = 0; i < arrKeys1.length; i++) {
		if (arrKeys1[i] !== arrKeys2[i] || arrValue1[i] !== arrValue2[i]) {
			return false;
		}
	}

	return true;
}
// admin.name = "Joe";
console.log(compare(user, admin));

// Функция анализирует строку и возвращает данные о том, сколько раз встретилась та или иная буква
function analizeString(str) {
	const result = {};
	for (let i = 0; i < str.length; i++) {
		let count = (result[str[i]] !== undefined) ? result[str[i]] : 0;
		result[str[i]] = count + 1;
	}
	return result;
}

const result = analizeString("aabbccaabbccaabbccaabbccaabbcc");
const result2 = analizeString("asdffdsasdffdsaasdf");
console.log(result);
console.log(result2);
