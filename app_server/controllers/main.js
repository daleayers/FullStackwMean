var fs = require('fs');

var homepage = JSON.parse(fs.readFileSync('./data/homepage.json','utf8')); // Expensive; not best practice
var sidebar = JSON.parse(fs.readFileSync('./data/sidebar.json','utf8'));
/* GET Homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways', homepage, sidebar });
   };
  module.exports = {
    index
   };
   