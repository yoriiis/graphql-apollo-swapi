const gql = require('graphql-tag');

const Vehicles = gql`{
    getAllVehicles(limit: 2, offset: 2, page: 1) {
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
        vehicle_class
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

    Vehicles(id: 14) {
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
        vehicle_class
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

module.exports = Vehicles;
