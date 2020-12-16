import React, { useState } from "react"
import { Link } from 'react-router-dom';

function Login() {

    const [email_or_username, setEorUN] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    //const [redirectUser, setRedirect] = useState(false)

    const handleChange = inputName => event => {
        setError("")
        if(inputName === 'name'){
            setEorUN(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }

    const handleSubmit = event => {
        event.preventDefault() //stop default behavior of reloading page
        const user = {
            email_or_username,
            password
        }
        //console.log(user)
        login(user)
        .then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                //authenticate
                //redirect
            }
        })
    }

    const login = user => {
        return fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
    } 

    return (
        <div className="container">
            <h2 className="mt-5 mb-5">Signin</h2>

            {/* If error while signing in User */}
            <div 
                className={"alert alert-danger"} 
                style={{display: error ? "" : "none"}}
            >
                {error}
            </div>

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className="text-muted">Username or Email</label>
                    <input 
                        onChange={handleChange('name')} 
                        type="text" 
                        className="form-control" 
                        value={email_or_username}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className="text-muted">Password</label>
                    <input 
                        onChange={handleChange('password')} 
                        type="password" 
                        className="form-control" 
                        value={password}
                        required
                    />
                </div>
                <input type="submit"></input>
                <br /><br />
                <Link to="/signup">Register Now</Link>
            </form>
            

        </div>
    )
}

export default Login