import React, { useState } from  'react';
    
const UserForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        const newUser = {firstname, lastname, email, password};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
        return "Thank you for submitting the form!";
    } else {
        return "Welcome, please submit the form";
    }
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                {firstname.length<3 && firstname.length !==0? <p>First Name must be at least 3 characters</p> : ""}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                {lastname.length<3 && lastname.length !==0? <p>Last Name must be at least 3 characters</p> : ""}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {email.length<10 && email.length !==0? <p>Email must be at least 10 characters</p> : ""}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                {password.length<5 && password.length !==0? <p>Password must be at least 5 characters</p> : ""}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                {password !== confirmpassword && password.length!==0 && confirmpassword.length !== 0?<p>Confirm Password must match Password</p>:""}
            </div>
            <div>
                {
                    <input type="submit" value="Create User" />
                }
            </div>
        </form>
        <hr/>
        <div>
                <h3>Your Form Data</h3>
                <p>First Name : {firstname}</p>
                <p>Last Name : {lastname}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {confirmpassword}</p>
        </div>
        </div>
    );
};
    
export default UserForm;
