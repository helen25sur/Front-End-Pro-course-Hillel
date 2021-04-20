// Функция генерирует список любой вложенности из значениий переданного массива
function generateList(array) {
	const list = document.createElement('ul');
	for (const value of array) {
		const itemList = document.createElement('li');
		if (Array.isArray(value)) {
			itemList.append(generateList(value));
		} else {
			itemList.textContent = value;
		}
		list.appendChild(itemList);
	}
	return document.body.appendChild(list);
}

generateList(['item 1', 'item 2', ['subitem 1.1', 'subitem 1.2', 'subitem 1.3'], 'item 3',
	['subitem 2.1', 'subitem 2.2', 'subitem 2.3', ['subitem 1.1', 'subitem 1.2', 'subitem 1.3']]]);
