import React from 'react'

export default function Login() {
    return (
        <div>
            <form className='form' id='login'>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name='username' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
