var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8')); // Expensive; not best practice


/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: "Travlr Getaways", trips });
   };

   module.exports = {
    travel
   };
   