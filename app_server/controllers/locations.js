var quoteFunc = require('../../quoteDisplayModule.js');

/* GET 'home' page */
module.exports.homelist = function(req, res){
 res.render('locations-list',{ title: 'Home Page!',quote:quoteFunc.quoteDisplay()
            });
};
    
    
/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
    res.render(
        'location-info', 
        { title: 'Location info' ,
        allNews: [{
                content:'Two people suffer critical injuries after crash'
               },{
               content:'Traffic lights being installed after fatal crash'
               },{
                   content:'Mayoral candidates focus on Guelph south end growth'
               }]
                                }); 
};  
