import React, { useState } from "react"

function Signup() {

    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [favMovie, setFavMovie] = useState('')
    //const [error, setError] = useState('')

    const handleChange = inputName => event => {
        
        if(inputName === 'name'){
            setName(event.target.value)
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
        fetch('http://localhost:8080/signup', {
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
            <h2 className="mt-5 mb-5">Signup</h2>

            <form>
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
                <button onClick={handleSubmit} className="btn btn-raised btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Signup