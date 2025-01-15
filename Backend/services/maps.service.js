const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.OPENCAGE_API_KEY;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.results.length > 0) {
            const location = response.data.results[0].geometry;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}


// module.exports.getDistanceTime = async (origin, destination) => {
//     if (!origin || !destination) {
//         throw new Error('Origin and destination are required');
//     }

//     const apiKey = process.env.OPENCAGE_API_KEY;
//     const originUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(origin)}&key=${apiKey}`;
//     const destinationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(destination)}&key=${apiKey}`;

//     try {
//         console.log('[DEBUG] Fetching coordinates for origin and destination...');
//         console.log(`[DEBUG] Origin URL: ${originUrl}`);
//         console.log(`[DEBUG] Destination URL: ${destinationUrl}`);

//         // Fetch coordinates for origin and destination
//         const [originResponse, destinationResponse] = await Promise.all([
//             axios.get(originUrl),
//             axios.get(destinationUrl)
//         ]);

//         console.log('[DEBUG] Origin response:', JSON.stringify(originResponse.data, null, 2));
//         console.log('[DEBUG] Destination response:', JSON.stringify(destinationResponse.data, null, 2));

//         // Check if results exist for both origin and destination
//         if (
//             originResponse.data.results.length > 0 &&
//             destinationResponse.data.results.length > 0
//         ) {
//             const originCoordinates = originResponse.data.results[0].geometry;
//             const destinationCoordinates = destinationResponse.data.results[0].geometry;

//             console.log('[DEBUG] Origin coordinates:', originCoordinates);
//             console.log('[DEBUG] Destination coordinates:', destinationCoordinates);

//             // Return the coordinates
//             return {
//                 origin: originCoordinates,
//                 destination: destinationCoordinates
//             };
//         } else {
//             console.error('[ERROR] Missing results for origin or destination.');
//             throw new Error('Unable to fetch distance and time. Missing coordinates.');
//         }
//     } catch (err) {
//         console.error('[ERROR] Failed to fetch distance and time:', err.message);
//         throw new Error('Unable to fetch distance and time data. Please try again later.');
//     }
// };

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.OPENCAGE_API_KEY;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(origin)}&key=${apiKey}`;

    try {
        const originResponse = await axios.get(url);
        const destinationResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(destination)}&key=${apiKey}`);

        if (originResponse.data.results.length > 0 && destinationResponse.data.results.length > 0) {
            const originCoordinates = originResponse.data.results[0].geometry;
            const destinationCoordinates = destinationResponse.data.results[0].geometry;

            // Here you would calculate the distance/time between coordinates manually or use another API
            return {
                origin: originCoordinates,
                destination: destinationCoordinates
            };
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.OPENCAGE_API_KEY;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.results.length > 0) {
            return response.data.results.map(result => result.formatted);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[ltd, lng], radius / 6371]
            }
        }
    });

    return captains;
}


// const axios = require('axios');
// const captainModel = require('../models/captain.model');

// module.exports.getAddressCoordinate = async (address) => {
//     const apiKey = process.env.GOOGLE_MAPS_API;
//     // const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(input)}&key=${apiKey}`;


//     try {
//         const response = await axios.get(url);
//         if (response.data.status === 'OK') {
//             const location = response.data.results[ 0 ].geometry.location;
//             return {
//                 ltd: location.lat,
//                 lng: location.lng
//             };
//         } else {
//             throw new Error('Unable to fetch coordinates');
//         }
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

// module.exports.getDistanceTime = async (origin, destination) => {
//     if (!origin || !destination) {
//         throw new Error('Origin and destination are required');
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API;

//     const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

//     try {


//         const response = await axios.get(url);
//         if (response.data.status === 'OK') {

//             if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
//                 throw new Error('No routes found');
//             }

//             return response.data.rows[ 0 ].elements[ 0 ];
//         } else {
//             throw new Error('Unable to fetch distance and time');
//         }

//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// }

// module.exports.getAutoCompleteSuggestions = async (input) => {
//     if (!input) {
//         throw new Error('query is required');
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API;
//     const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

//     try {
//         const response = await axios.get(url);
//         if (response.data.status === 'OK') {
//             return response.data.predictions.map(prediction => prediction.description).filter(value => value);
//         } else {
//             throw new Error('Unable to fetch suggestions');
//         }
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// }

// module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

//     // radius in km


//     const captains = await captainModel.find({
//         location: {
//             $geoWithin: {
//                 $centerSphere: [ [ ltd, lng ], radius / 6371 ]
//             }
//         }
//     });

//     return captains;


// }