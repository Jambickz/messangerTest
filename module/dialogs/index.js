import dialogsList from "./template/index.js"
import { dialogsContainer } from "../../config/elem.js"

export async function dialogsRender(user, onDialogChange) {
	console.log(user)
	const dialogsTemplate = await dialogsList(user)
	dialogsContainer.innerHTML += dialogsTemplate
	dialogsContainer.querySelectorAll('.dialog').forEach(d => {
		const id = +d.dataset.id
		d.onclick = () => onDialogChange(id)
	})
}

export default dialogsRender