
import { userTemplate } from "./module/profile/helpers/index.js"
import { getDialogWrapById } from "./module/dialogs/helpers/index.js"
import { dialogInfoTemplate } from "./module/dialog/template/index.js"
import { renderMessages } from "./module/dialog/index.js"
import { dialogsRender } from "./module/dialogs/index.js"
import { messagesContainer, headerContainer } from "./config/elem.js"
import getProfile from "./module/profile/api/index.js"

let currentDialog = null


async function render() {
	const searchParams = new URLSearchParams(window.location.search);
	const userId = +searchParams.get('userId');
	const user = await getProfile(userId)
	userTemplate(user)

	async function onDialogChange(dialogId) {
		if (currentDialog === dialogId) return
		if (currentDialog) getDialogWrapById(currentDialog)?.classList.remove('active')
		getDialogWrapById(dialogId)?.classList.add('active')
		headerContainer.innerHTML = ''
		messagesContainer.innerHTML = ''
		const dialogHeader = await dialogInfoTemplate(user, dialogId)
		headerContainer.append(dialogHeader)
		renderMessages(user, dialogId)
		currentDialog = dialogId
	}

	dialogsRender(user, onDialogChange)
}

render()