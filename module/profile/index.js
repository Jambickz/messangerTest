import getProfile from "./api/index.js";

export async function infoUser(userId, dialog, item) {
	const profileFirst = await getProfile(dialog.userFirstId)
	const profileSecond = await getProfile(dialog.userSecondId)
	return dialog.userFirstId === +userId ? profileSecond[item] : profileFirst[item]
}

export default infoUser;