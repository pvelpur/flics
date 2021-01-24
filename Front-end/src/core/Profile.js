import React from 'react'
import {useSelector} from 'react-redux'


function Profile(){
    const user = useSelector(state => state.auth.currentUser)
    return (
        <div className='container'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src={process.env.PUBLIC_URL+"/profile1.png"} className="img-thumbnail rounded-circle" alt="Profile Pic" width="150" height="150"/>
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h4 className="card-title">{user.username}</h4>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;