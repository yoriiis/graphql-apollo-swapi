const gql = require('graphql-tag');

const Species = gql`{
    getAllSpecies {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
            name
        }
        language
        people {
            name
        }
        films {
            title
        }
        created
        edited
        url
    }

    Species(id: 1) {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
            name
        }
        language
        people {
            name
        }
        films {
            title
        }
        created
        edited
        url
    }
}`;

module.exports = Species;
