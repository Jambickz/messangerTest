
import ce from "../../../utils/dom.js"
import getProfile from "../../profile/api/index.js"
import formatDate from "../../../utils/time.js"
import { getDialogsForId } from "../../dialogs/api/index.js"
import infoUser from "../../profile/index.js"

//создания блока from или to
export const messageContainerTemplate = className => {
	return ce('div', { className: `messages-block ${className}` })
}

//создания блока message
export const messageTemplate = message => {
	let content = '';
	if (message.attachments && message.attachments.length > 0) {
		content = `<div class="message__attachments"><img class="message__image" src="./${message.attachments[0]}" alt=""></div>`;
	}
	if (message.text && message.text.trim().length > 0) {
		content += `<div class="message__text">${message.text}</div>`;
	}
	return ce('div', {
		className: `message`,
		data: { mid: message.id },
		content
	});
}
// информация о юзере
export async function messageInfoTemplate(message) {
	const user = await getProfile(message.fromId)
	return ce('div', {
		className: `message__info`, content: `
		<div class="message__photo"><img src="./${user.avatar}" alt="PHOTO"></div>
		<div class="message__name">${user.username}</div>
		<div class="message__time">${formatDate(message.createdAt)}</div>`
	})
}

export async function dialogInfoTemplate(user, dialogId) {
	const dialog = await getDialogsForId(dialogId)
	return ce('div', {
		className: `header__container`,
		content: `
		<div class="header__info">
			<div class="header__status"></div>
			<div class="header__photo"><img src="./${await infoUser(user.id, dialog, "avatar")}" alt="PHOTO"></div>
			<div class="header__name">${await infoUser(user.id, dialog, "username")}</div>
			<div class="header__status-text">Online</div>
		</div>
		<div class="header__buttons">
			<button class="header__button"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect width="24" height="24" fill="#272a37" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z"
						fill="#757889" />
				</svg></button>
			<button class="header__button"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect width="24" height="24" fill="#272a37" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z"
						fill="#757889" />
				</svg></button></button>
			<button class="header__button"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect width="24" height="24" fill="#272a37" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z"
						fill="#757889" />
				</svg></button></button>
			<button class="header__button"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect width="24" height="24" fill="#272a37" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z"
						fill="#757889" />
				</svg></button></button>
			<button class="header__button"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect width="24" height="24" fill="#272a37" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z"
						fill="#757889" />
				</svg></button></button>
		</div>

` })
}

export default messageContainerTemplate;
