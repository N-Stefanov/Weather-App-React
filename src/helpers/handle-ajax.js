import axios from "axios";

const handleAjax = (url, callbackError, callbackSuccess, type) => {
	axios
		.get(url)
		.then((response) => {
			callbackSuccess(response);
		})
		.catch((error) => callbackError(error));
};

export default handleAjax;
