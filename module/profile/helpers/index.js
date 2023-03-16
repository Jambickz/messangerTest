import { userContainer } from "../../../config/elem.js";

export const userTemplate = (user) => {
	userContainer.innerHTML += `
	<img class="owner-foto" src="/${user.avatar}" alt="PHOTO">
	`
}

export default userTemplate;