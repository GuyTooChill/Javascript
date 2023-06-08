import React, { useState } from  'react';
    
const UserForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
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
                <input type="text" value={firstname} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <hr/>
        <div>
                <h3>Your Form Data</h3>
                <p>First Name : {firstname}</p>
                <p>Last Name : {lastname}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
        </div>
        </div>
    );
};
    
export default UserForm;
