import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register()
{
    const [fullName,setFullName]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [dateOfBirth,setDateOfBirth]=useState("")
    const [gender,setGender]=useState("")
    
    async function signUp(){
        let items={fullName,username,password,email,mobile,dateOfBirth,gender}
        console.warn(items)

        let result = await fetch("http://localhost:8097/api/auth/signup",{
            method:'POST',
            body:JSON.stringify(items),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        }) 
        result=await result.json()
       alert("User Registered Successfully");
        
    }
   
    return(
     <div className="register">
        <div  className="form-content-right">
         
            <form className="form">
                <h1>Please fill your Details below</h1>
                <div className="form-inputs">
                  <label htmlFor="fullName" className="form-label">Full Name:
                      <input type="text" 
                             name="fullName" 
                             value={fullName}
                             onChange={(e) => setFullName(e.target.value)} 
                             className="form-input" 
                             placeholder='Enter your name'/>
                             
                  </label>
                </div>
                <div className="form-inputs">
                  <label htmlFor="username" className="form-label">Username:
                      <input id="username"
                             type="text"        
                             name="username" 
                             value={username} 
                             onChange={(e) => setUsername(e.target.value)} 
                             className="form-input" 
                             placeholder='Enter your username'/>
                           
                  </label>
                </div>
                <div className="form-inputs">
                  <label htmlFor="password" className="form-label">Password:
                      <input id="password"
                             type="password" 
                             name="password" 
                             value={password}
                             onChange={(e) => setPassword(e.target.value)} 
                             className="form-input" 
                             placeholder='Enter your password'/>
                             
                  </label>
                </div>
                <div className="form-inputs">
                  <label htmlFor="email" className="form-label">Email:
                      <input id="email"
                             type="email" 
                             name="email" 
                             value={email} 
                             onChange={(e) => setEmail(e.target.value)} 
                             className="form-input" 
                             placeholder='Enter your Email'/>
                             
                  </label>
                </div>
                <div className="form-inputs">
                  <label htmlFor="mobile" className="form-label">Contact No.:
                      <input id="mobile"
                             type="text" 
                             name="mobile" 
                             value={mobile} 
                             onChange={(e) => setMobile(e.target.value)} 
                             className="form-input" 
                             placeholder='Enter your phone number' />
                  </label>
                </div>
                <div className="form-inputs">
                  <label htmlFor="dateOfBirth" className="form-label">BirthDate:
                  <input id="date"
                         type="date" 
                         name="dateOfBirth"
                         value={dateOfBirth} 
                         onChange={(e) =>setDateOfBirth(e.target.value)} 
                         className="form-control" 
                         placeholder="dateOfBirth"/>
                  </label>
                </div>
                <div className="form-inputs">
                  <label htmlFor="gender" className="form-label">Gender
                      <input id="gender"
                             type="text" 
                             name="gender" 
                             value={gender}
                             onChange={(e) => setGender(e.target.value)} 
                             className="form-input" 
                             placeholder='Enter your gender'/>
                  </label>
                </div>
                <Button type="submit" onClick={signUp}  className="btn btn-primary">Sign Up</Button> <br />
            <span className="form-input-login">Already have an Account?Login <Link to={"/login"}>here</Link></span>
           </form>
            

          </div>
          </div>
       
    )
}

export default Register;