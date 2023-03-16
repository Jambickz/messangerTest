import { ref, set, child, get, update, remove, onValue, push } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { db } from "../config/data.js";
// Получения из ls

export function getData(name) {
	const dbRef = ref(db);
	return get(child(dbRef, `${name}/`)).then((snapshot) => {
		if (snapshot.exists()) {
			const data = snapshot.val();
			return Object.values(data);
		}
	}).catch((error) => {
		console.error(error);
	});
}

// Добавление нового обьекта в ls

export async function addToStorage(name, item) {
	const reference = ref(db, `${name}/`);
	push(reference, item)
}

export default getData;