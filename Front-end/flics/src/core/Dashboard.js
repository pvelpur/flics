import React, { useState } from 'react'
import {signout as signoutAction} from '../actions'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Mygroups from './Mygroups'
import Mylist from './Mylist'
import Profile from './Profile'

function Dashboard() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [activeToggle,setActiveToggle] = useState('Mygroups')
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
            <Profile/>
            <div className='mx-auto' style={{width: "600px"}}>
                <div className="btn-group">
                    <div className="row mx-auto">
                        <div className="col" >
                        <button type="button" className={activeToggle === 'Mygroups'? "btn btn-outline-success":"btn btn-outline-dark"} onClick={()=>setActiveToggle('Mygroups')}>My Groups</button>
                        </div>
                        <div className="col">
                        <button type="button" className={activeToggle === 'Mylist'? "btn btn-outline-success":"btn btn-outline-dark"} onClick={()=>setActiveToggle('Mylist')}>My List</button>
                        </div>
                    </div>
                </div>
                <div>
                    {activeToggle === 'Mygroups'?<Mygroups />: <Mylist />}               
                </div>
                <button type="button" className="btn btn-warning" onClick={()=>signout(()=> history.push('/login'))}>Sign Out!!!</button>            
            </div>
        </div>
    )
}

export default Dashboard;