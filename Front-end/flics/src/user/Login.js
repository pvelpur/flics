import React, { useState } from "react"

function Login() {

    const [email_or_username, setName] = useState('')
    const [password, setPassword] = useState('')
    //const [error, setError] = useState('')

    const handleChange = inputName => event => {
        
        if(inputName === 'name'){
            setName(event.target.value)
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
        fetch('http://localhost:8080/login', {
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
            <h2 className="mt-5 mb-5">Login</h2>

            <form>
                <div className='form-group'>
                    <label className="text-muted">Username/Email</label>
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
                <button onClick={handleSubmit} className="btn btn-raised btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Login