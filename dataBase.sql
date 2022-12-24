//creating Admin table
 create table admin(
     id int primary key,
     adminName varchar(30),
     password varchar(20));


 
//creating Faculty table
create table faculty(
     id int primary key,
     fName varchar(30),
     password varchar(20));



//creating Student table
 create table student(
     id int primary key,
     sName varchar(30),
     password varchar(20));


//creating timesheet table
create table timesheet(
     id int primary key,
     designation varchar(20),
     presentDate date,
     status varchar(12),
     approvedBy varchar(12));

