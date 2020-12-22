import React from 'react'
import {signout as signoutAction} from '../actions'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Dashboard() {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const signout = (next) => {
        dispatch(signoutAction())
        next() //redirect the user
        return fetch("http://localhost:8080/signout", {
            method: "GET"
        })
        .then((res) => {
            console.log('signout', res)
            return res.json()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            This is the Dashboard <br />
            Todo: Only allow entry if logged in!
            <br />
            <button type="button" className="btn btn-warning" onClick={()=>signout(()=> history.push('/login'))}>Click ME!!!</button>
        </div>
    )
}

export default Dashboard;