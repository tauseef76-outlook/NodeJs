
const weather = require("./utils/forecast");

weather("japan", (err,data) => {
    console.log("data", data);
    console.log("error", err);
});