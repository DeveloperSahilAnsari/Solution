Title
System Reqruiement Specification for Timesheet management system.

Team
Student,Faculty,Director

Objective (Purpose):

The timesheet management system is intended to  store complete information
about the users, their  work description and working hours. It will enable company to monitor their working hours and pay accordingly.

Scope

This System allows employees to update their timesheet based on their availablity.
Senior staff will be able to review the timesheet and approve it otherwise reject it.


Definitions:
HRS: Hours

Functional Requirements:

Registered users will be able to add their work description in timesheet.
Senior Staff will be able to approve or reject time sheet of their juniors.

Users will be able to update their timesheet which have been already added to the system.

User will be able to track their timesheet status.

System will raise an alert if the total weekly hours is not matching with the expected work hours.

System will generate an email which will remind user to fill the timesheet on time.

System will present dashboard for faculty,Student, Admin as well as Director. 

Dashboard will provide information of the previous timesheet in the form of tables. 


________________________________________________________________________________________________-
_________________________________________________________________________________________________


Non Functional Requirement:

Security 
• Registered Admin, Faculty and students will allowed to fill their time sheets. 
• Each stakeholder will be able to access system through authentication process. Who are you? 
• System will provide access to the content, sheets , operations using Role based security (Authorization) (Permissions based on Role) 

Reliability

• The system will backup updated data on regular basis (time interval may be of days, week, monthly) to keep system updated. 
• Continous updates are matained , continous Adminstration is done to keep system operational.

Availability

* uptime: 24* 7 available 99.999%

4.Maintainability:
* A database software will be used to maintain System data Persistence. 

5.Portablility:

System will provide portable User Interface ( HTML, CSS, JS) through users will be able to access Time Sheet portal.

Accessibility:
only registered user will be able to fill Time Sheets after authentication. 
Seniors can reject or approve Data in sheets after verifications. 
Seniors will be able to view daily, weekly, monthly, annual sheets customized dashboard.

Modularity:
 
 System will contain Dashboard, Login Page, Calander,TimeSheet Description Window,previous TimeSheets modules.

Scalability:
System will be able  to  provide  consistent user exeprience.

Safety:

TimeSheet portal will be secure from malicious attack, fishing.
Bussiness data will be backed up periodically to ensure safty of data using increamental back up strategy.
Role based security will be applied for Application data and operations accessibility.
