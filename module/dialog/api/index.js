
import { getData } from "../../../utils/local.js";

export async function getMessagesByDialodId(dialogId) {
	const messages = await getData("messages");
	const message = messages.filter((message) => message.dialogId === dialogId)
	return message
}

export default getMessagesByDialodId;