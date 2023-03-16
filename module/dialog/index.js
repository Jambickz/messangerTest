import updateDialogsLatesMessage from "../dialogs/helpers/index.js"
import { newMessages } from "./helpers/index.js"
import { whoseMessage } from "./helpers/index.js"
import onSendHandler from "../settings/index.js"
import { sendButton, messagesContainer } from "../../config/elem.js"

export let intervalUpdate = null

export const renderMessages = (user, dialogId) => {
	clearInterval(intervalUpdate)
	let lastMessageId = -1
	async function fetchMessages() {
		updateDialogsLatesMessage(user)
		let messages = await newMessages(dialogId, lastMessageId)
		lastMessageId = messages[messages.length - 1].id
		messages.forEach(message => {
			whoseMessage(user, message, lastMessageId)
		})
		messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
	}
	fetchMessages()
	sendButton.onclick = () => onSendHandler(user, dialogId)
	intervalUpdate = setInterval(() => {
		fetchMessages()
	}, 1000)
}

export default renderMessages;