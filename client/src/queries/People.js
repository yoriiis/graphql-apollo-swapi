const gql = require('graphql-tag');

const People = gql`{
    getAllPeople {
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
            name
        }
        films {
            title
        }
        species {
            name
        }
        starships {
            name
        }
        created
		edited
        url
    }

    People(id: 1) {
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
            name
        }
        films {
            title
        }
        species {
            name
        }
        starships {
            name
        }
        created
		edited
        url
    }
}`;

module.exports = People;
