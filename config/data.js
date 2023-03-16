import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

const firebaseConfig = {
	apiKey: "AIzaSyC-6FEXe47NDZVx7xPVwsWiLYns2SwixyM",
	authDomain: "test-7c9d1.firebaseapp.com",
	databaseURL: "https://test-7c9d1-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "test-7c9d1",
	storageBucket: "test-7c9d1.appspot.com",
	messagingSenderId: "1020122013057",
	appId: "1:1020122013057:web:bdcc6f5070c5a68f051c80"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase();

export default db;