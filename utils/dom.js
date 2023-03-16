export const ce = (tag, params) => {
	const { className = '', onclick, content = '', data = {} } = params || {};
	const container = document.createElement(tag);
	container.className = className;
	container.onclick = onclick;
	container.innerHTML = content;
	if (data)
		Object.entries(data).forEach(([k, v]) => container.dataset[k] = v)
	return container;
};

export const qe = (selector, parent) => (parent ?? document).querySelector(selector)
export const qeAll = (selector, parent) => (parent ?? document).querySelectorAll(selector)

export default ce;