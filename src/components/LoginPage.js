const Login=()=>{
    return(
        <div>
        <form>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" className="form-control" name="uname" id="uname" 
    //value={empob.empid}
    placeholder="Enter username"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="ename">Password</label>
    <input type="text" className="form-control" name="pass" id="pass"
     //value={empob.ename}
     placeholder="Enter password"/>

  </div>
  
  <button type="button" class="btn btn-primary" >Login</button>
</form>
    </div>
            
)
  }
  export default Login;