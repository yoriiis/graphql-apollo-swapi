const getIdFromUrl = (url) => {
	const urlSplit = url.split('/');
	return urlSplit[urlSplit.length - 2];
};

const createPromisesFromUrls = ({ urls, method }) => {
	const promises = urls.map(async film => {
		return method(getIdFromUrl(film));
	});
	return Promise.all(promises);
}
;

module.exports = {
	getIdFromUrl,
	createPromisesFromUrls
};
