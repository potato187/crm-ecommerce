export const uuid = () => {
	let uuid = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		uuid += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return uuid;
};

export const typeOf = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

export const createWrapperAndAppendToBody = (wrapperId) => {
	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute('id', wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
};

export const getFileName = (fullPath = '') => (fullPath.trim().length ? fullPath.replace(/^.*[\\\/]/, '') : '');

export const isValidExtension = (file = {}, extension = []) => {
	if (!Object.entries(file).length || !file.type) return false;
	return extension.includes(file.type);
};

export const getToday = () => {
	const today = new Date();
	const yyyy = today.getFullYear();
	let mm = today.getMonth() + 1;
	let dd = today.getDate();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;
	return dd + '_' + mm + '_' + yyyy;
};

export const getRandomArbitrary = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

export const toggleAttribute = (element, nameAttribute, value1, value2) => {
	if (!element || !element.hasAttributes(nameAttribute)) return false;
	const currentValue = element.getAttribute(nameAttribute);
	element.setAttribute(nameAttribute, currentValue === value1 ? value2 : value1);
};
