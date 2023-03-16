import getDialogs from "../api/index.js"
import infoUser from "../../profile/index.js"
import lastMessage from "../../dialog/helpers/index.js"

export async function dialogsList(user) {
	const dialogs = await getDialogs(user.id);
	const dialogItems = await Promise.all(dialogs.map(async (d) => {
		const avatar = await infoUser(user.id, d, "avatar");
		console.log(avatar)
		const username = await infoUser(user.id, d, "username");
		const preview = await lastMessage(d);
		return `
		 <div class="dialog" data-id="${d.id}">
			<div class="dialog__status"></div>
			<div class="dialog__photo"><img src="/${avatar}" alt="PHOTO"></div>
			<div class="dialog__name">${username}</div>
			<div class="dialog__preview">${preview}</div>
		 </div>
	  `;
	}));
	return dialogItems.join("");
}



export default dialogsList;