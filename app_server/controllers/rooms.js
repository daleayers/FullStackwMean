var fs = require('fs');

var options = JSON.parse(fs.readFileSync('./data/options.json','utf8')); // Expensive; not best practice


/* GET travel view */
const rooms = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways", options });
   };

   module.exports = {
    rooms
   };
   