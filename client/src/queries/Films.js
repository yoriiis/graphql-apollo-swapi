const gql = require('graphql-tag');

const Films = gql`{
    getAllFilms(limit: 2, offset: 2, page: 1) {
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        created
        edited
        url
    }

    Films(id: 1) {
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        created
        edited
        url
    }
}`;

module.exports = Films;
