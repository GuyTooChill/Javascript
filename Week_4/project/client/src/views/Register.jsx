import React from 'react'

export default function Register() {
    return (
        <div>
            <h1>This is register</h1>
            <form className='form' id='register'>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name='username' />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name='password' />
                </div>
                <div>
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input type="text" name='confirm_password' />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
