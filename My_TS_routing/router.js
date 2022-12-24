var timesheet=require('./controllers/timesheet');
module.exports=function(app){

app.route('/hello')
.get(timesheet.hello);

};