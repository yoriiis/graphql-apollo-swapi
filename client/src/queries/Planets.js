const gql = require('graphql-tag');

const Planets = gql`{
    getAllPlanets {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
            name
        }
        films {
            title
        }
        created
        edited
        url
    }

    Planets(id: 1) {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
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

module.exports = Planets;
