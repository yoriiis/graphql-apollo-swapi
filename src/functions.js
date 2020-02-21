const getIdFromUrl = (url) => {
	const urlSplit = url.split('/');
	return urlSplit[urlSplit.length - 2];
};

const createPromisesFromUrls = ({ urls, method }) => {
	const promises = urls.map(async film => {
		return method(getIdFromUrl(film));
	});
	return Promise.all(promises);
};

const requestFilterByLimitOffsetPage = ({ key, context, page, limit, offset }) => {
	let url = '';
	if (page) {
		url = `${key}?page=${page}`;
	} else {
		url = key;
	}
	return context.get(url).then(response => {
		const datas = response.results;

		const totalCount = datas.length;
		let results;

		if (limit === null) {
			results = datas.slice(offset);
		} else {
			results = datas.slice(offset, (offset + limit));
		}

		return {
			results,
			totalCount
		};
	});
};

module.exports = {
	getIdFromUrl,
	createPromisesFromUrls,
	requestFilterByLimitOffsetPage
};
