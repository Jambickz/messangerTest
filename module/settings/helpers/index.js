import getData from "../../../utils/local.js"
import { whoseMessage } from "../../dialog/helpers/index.js"
import { addToStorage } from "../../../utils/local.js"
import messagesContainer from "../../../config/elem.js"

export async function sendMessage({ fromId, dialogId, text }) {
	const data = await getData("messages")
	const lastId = await data.length + 1 ?? 1
	const date = new Date()
	const message = { id: lastId, fromId: fromId.id, dialogId, text, createdAt: `${date}` }
	whoseMessage(fromId, message)
	console.log(message)
	addToStorage("messages", message)
	messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
}

export default sendMessage