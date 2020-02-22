const gql = require('graphql-tag');

const Films = gql`{
    getAllFilms {
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
