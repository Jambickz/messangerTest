import { getMessagesByDialodId } from "../api/index.js"
import { qe } from "../../../utils/dom.js"
import { messageInfoTemplate, messageContainerTemplate, messageTemplate } from "../template/index.js"

// Последние сообщение диалога
export async function lastMessage(dialog) {
	const currentUserMessages = await getMessagesByDialodId(dialog.id)
	currentUserMessages.sort((a, b) => a.createdAt - b.createdAt)
	return currentUserMessages.length === 0 ? '' : currentUserMessages[currentUserMessages.length - 1].text // Повеока на пустоту
}

// проверка на наличие нового сообщения
export async function newMessages(dialogId, lastMessageId) {
	const messages = await getMessagesByDialodId(dialogId)
	const newMessages = messages.filter(m => m.id > lastMessageId)
	return newMessages
}

// Создания блока сообщения
export async function whoseMessage(user, message, lastMessageId) {
	const messagesList = qe('.messages');
	const messageInfo = await messageInfoTemplate(message)
	const classname = message.fromId === user.id ? 'message__from' : 'message__to';
	let container = messagesList.lastChild;
	if (!container || !container.classList.contains(classname)) {
		container = await messageContainerTemplate(classname);
		messagesList.append(container);
	}
	if (container.classList.contains(classname) && container.querySelector(".message__info")) container.querySelector(".message__info").remove();
	const lastMessage = container.lastChild;
	if (lastMessage) {
		let dataMid = lastMessage.dataset.mid
		container.append(messageInfo);
		if (+dataMid !== lastMessageId) {
			const messageRow = await messageTemplate(message);
			container.append(messageRow);
			container.append(messageInfo)
			return;
		}
		else return
	}
	const messageRow = await messageTemplate(message);
	container.append(messageRow);
	container.append(messageInfo)

};

export default lastMessage;