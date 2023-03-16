import getDialogs from "../api/index.js"
import { qeAll } from "../../../utils/dom.js"
import { dialogsContainer } from "../../../config/elem.js"
import lastMessage from "../../dialog/helpers/index.js"


export async function updateDialogsLatesMessage(user) {
	const userDialogs = await getDialogs(user.id)
	const dialogs = qeAll('.dialog')
	for (const d of userDialogs) {
		for (const dialog of dialogs) {
			let id = dialog.dataset.id
			if (+d.id === +id) {
				const preview = dialog.querySelector('.dialog__preview');
				const message = await lastMessage(d)
				if (preview) preview.innerHTML = message
			}
		}
	}
}



export const getDialogWrapById = id => dialogsContainer.querySelector(`.dialog[data-id="${id}"]`)


export default updateDialogsLatesMessage;