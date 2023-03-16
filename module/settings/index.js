import sendMessage from "./helpers/index.js"
import { messageField } from "../../config/elem.js"

export const onSendHandler = (user, dialogId) => {
	const text = messageField.value
	if (text === '') return
	messageField.value = ''
	const message = {
		fromId: user,
		dialogId: dialogId,
		text,
	}
	sendMessage(message)
}

export default onSendHandler