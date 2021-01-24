import React, { useState, useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {loadGroups} from '../reducers/groupReducer'
import {addGroup} from '../actions'

function Mygroups(){
    const [groupname,setGroupName] = useState('')
    const [description,setDescription] = useState('')
    const authToken = useSelector(state => state.auth.authToken)
    const groups = useSelector(state => state.groups)
    const [successModal,setSuccess] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    //const groups = [{id:"1",name:"Silicon Valley Boys",description:"We make the dough"},{id:"2",name:"Anime Enthusiasts",description:"For people who want good anime recommendations"}]
    const items = !groups.error ? groups.map((item) =>
        <li key={item._id} className="list-group-item justify-content-between">
            <div className="card-body">
                <h5 className="card-title"><a href={`group/${item._id}`}> {item.name} </a></h5>
                {item.description}
            </div>
        </li>
    ) : []

    useEffect(()=>{    
        const getGroups = async () => {
            setIsLoading(true)
            await dispatch(loadGroups())
            setIsLoading(false)
        };
        getGroups()
    }, [dispatch])

    const handleChange = inputName => event => {
        setSuccess(false)
        if(inputName === 'groupname'){
            setGroupName(event.target.value)
        }
        else {
            setDescription(event.target.value)
        }
    }

    const handleSubmit = event => {
        event.preventDefault() //stop default behavior of reloading page
        const groupinfo = {
            name:groupname,
            description:description
        }
        createGroup(groupinfo)
        .then(data => {
            if(data.errors){
                console.log("Database error")
            }
            else{
                const group = {
                        name: data.group.name, 
                        description: data.group.description, 
                        usernames: data.group.usernames, 
                        _id: data.group._id
                    }
                dispatch(addGroup(group))
                setSuccess(true)
            }
        })
        .catch(err => console.log("Database error", err))
    }

    
    const createGroup = groupinfo => {
        return fetch('http://localhost:8080/group', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken
            },
            body: JSON.stringify(groupinfo)
        })
        .then((res) => {
            return res.json()
        })
        .catch(err => console.log(err))
    } 

    if(loading) {
        return (<div>Loading...</div>)
    }

    return (
        <div className='container'>
            <div className="card" style={{marginBottom: "50px"}}>
                <ul className="list-group">
                    {items}  
                </ul>
            </div>
            {/* Create group modal */}
            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" href="#creategroup">
                Create Group
            </button>
            <div className="modal fade" id="creategroup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Create Group</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        
                        {successModal ?
                            <div className="text-center">
                                Successfully created group!
                            </div>
                        : ""
                        }
                            <div className="input-group mb-3">
                            <input  onChange={handleChange("groupname")} value={groupname} type="text" className="form-control" placeholder="Group Name" aria-label="Groupname"/>
                            </div>
                            <div className="form-group">
                                <textarea onChange={handleChange("description")} value={description} className="form-control" placeholder= "Description" id="description" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=> {setGroupName('');setDescription('');setSuccess(false) }} data-dismiss="modal">Close</button>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary" >Create Group</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Mygroups;