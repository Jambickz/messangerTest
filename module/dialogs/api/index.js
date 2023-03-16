import getData from "../../../utils/local.js";

export async function getDialogs(id) {
	const dialogs = await getData("dialogs");
	const data = dialogs.filter(dialog =>
		dialog.userFirstId === id || dialog.userSecondId === id
	);
	return data;
}

export async function getDialogsForId(dialogId) {
	const dialogs = await getData("dialogs");
	const dialog = dialogs.find(dialog => dialog.id === dialogId);
	return dialog ? { ...dialog } : null;
}

export default getDialogs;