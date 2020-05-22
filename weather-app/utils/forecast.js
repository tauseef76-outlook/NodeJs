const request = require("request");

const forecast = (location, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9eaf1e889ec28ed3730371fe6ddb0d27&query=${location}`;

    request({url, json: true}, (err, data) => {
        if(err){
            callback(err);
        }else{
            callback(undefined , {
                place: data.body.location.name,
                country: data.body.location.country,
                temp: data.body.current.temperature
            })
        }
    })
}

module.exports = forecast;