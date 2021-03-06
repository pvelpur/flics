import React, { useState } from "react"
import { Link } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [favMovie, setFavMovie] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleChange = inputName => event => {
        setError("")
        setSuccess(false)
        if(inputName === 'name'){
            setUsername(event.target.value)
        }
        else if(inputName === 'email'){
            setEmail(event.target.value)
        }
        else if(inputName === 'favMovie'){
            setFavMovie(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }

    const handleSubmit = event => {
        event.preventDefault() //stop default behavior of reloading page
        const user = {
            username,
            email,
            password,
            favMovie
        }
        //console.log(user)
        signup(user)
        .then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setUsername("")
                setPassword("")
                setError(data.message)
                setEmail("")
                setSuccess(true)
            }
        })
    }

    const signup = user => {
        return fetch('/api/signup', {
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
        <div>
            <div className="jumbotron">
                <h2>Flics</h2>
                <p className='lead'>Welcome to Flics!</p>
            </div>
        
            <div className="container">
                <h2 className="mt-5 mb-5">Signup</h2>

                {/* If error while creating User */}
                <div 
                    className={success ? "alert alert-primary" : "alert alert-danger"} 
                    style={{display: error ? "" : "none"}}
                >
                    {error}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className="text-muted">Username</label>
                        <input 
                            onChange={handleChange('name')} 
                            type="text" 
                            className="form-control" 
                            value={username}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label className="text-muted">Email</label>
                        <input 
                            onChange={handleChange('email')} 
                            type="email" 
                            className="form-control" 
                            value={email}
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
                    <div className='form-group'>
                        <label className="text-muted">Favorite Movie</label>
                        <input 
                            onChange={handleChange('favMovie')} 
                            type="text" 
                            className="form-control" 
                            value={favMovie}
                            required
                        />
                    </div>
                    <input type="submit" className="btn-primary"></input>
                    <br/>
                    <span>Already have an Account?</span> <Link to="/login">Login</Link>
                </form>
                

            </div>
        </div>
    )
}

export default Signup