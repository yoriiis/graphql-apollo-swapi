const gql = require('graphql-tag');

const Starships = gql`{
    getAllStarships(limit: 2, offset: 2, page: 1) {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
            name
        }
        films {
            title
        }
        created
        edited
        url
    }

    Starships(id: 12) {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
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

module.exports = Starships;
