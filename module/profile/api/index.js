import getData from "../../../utils/local.js";

export async function getProfile(id) {
	const users = await getData("users");
	const user = users.find(user => user.id === id);
	return user
}


export default getProfile;