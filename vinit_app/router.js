var timesheet = require('./controllers/timesheet')
module.exports=function(app){
   
    app.route('/login')
    .get(timesheet.login);
};