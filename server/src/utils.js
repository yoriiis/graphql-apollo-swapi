/**
 * Get id from SWAPI url category
 *
 * @param {String} url Url to analyze
 *
 * @return {String} Id of the url
 */
const getIdFromUrl = (url) => {
	const urlSplit = url.split('/');
	return urlSplit[urlSplit.length - 2];
};

/**
 * Create array of promises from urls list
 *
 * @param {String} key Category for the query
 * @param {Array} urls Array of urls
 * @param {Function} method Query function from the datasource
 *
 * @return {Promise<Array>} Array of promises
 */
const createPromisesFromUrls = ({ key, urls, method }) => {
	const promises = urls.map(async url => {
		return method({
			key,
			id: getIdFromUrl(url)
		});
	});
	return Promise.all(promises);
};

/**
 * Create request with filter parameters from any category
 *
 * @param {String} key Category for the query
 * @param {Object} context Context of the previous class
 * @param {Int} page Index of the page for the request pagination
 * @param {Int} limit Limit of results (zero is no limit)
 * @param {Int} offset Offset for the research (start index at the offset)
 *
 * @return {Promise<Object>} Result of the promise request
 */
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
