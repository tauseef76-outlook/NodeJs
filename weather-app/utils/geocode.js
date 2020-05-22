// for location

const request = require("request");


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiMTk5M3RheiIsImEiOiJjazk1aWtpaHQwNnh1M2dyMTZ0cmVkOGplIn0.Ml8S1lNPzJRt51HlHPcYOA&limit=1`;
    request(
        {url ,json: true}, (err, res) => {
            if (err){
                callback(err);
            }else{
                callback(undefined, {
                    latitude: res.body.features[0].center[0],
                    longitude: res.body.features[0].center[1],
                    place: res.body.features[0].place_name
                })
            }
        }
    );
}

module.exports = geocode;