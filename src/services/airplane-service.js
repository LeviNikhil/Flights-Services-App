const {AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log("Inside Service")
        const airplane = await airplaneRepository.create(data);
        console.log('Airplane created');
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane
};