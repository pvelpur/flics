import React, { useState } from "react"
import {useSelector} from 'react-redux'

function Mygroups(){
    const [groupname,setGroupName] = useState('')
    const [description,setDescription] = useState('')
    const authToken = useSelector(state => state.auth.authToken)
    const [successModal,setSuccess] = useState(false)
    
    const groups = [{id:"1",name:"Silicon Valley Boys",description:"Bitchesss"},{id:"2",name:"JPMC Sucks",description:"Rohan B sucks"}]
    const items = groups.map((item) =>
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center"> 
        <a href={`group/${item.id}`}> {item.name} </a>
        <p>
            {item.description}
        </p>
        </li>
    )
    // const [groups, setGroups] = useState([])

    // useEffect(()=>{
    //     const fetchData = async()=>{            
    //         const response = await fetch('http://localhost:8080/groups', {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + authToken
    //         },
    //     })
    //     setGroups(response.json())
    //     }
    //     fetchData()       
    // },[])

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
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
    } 


    return (
        <div className='container'>
            <ul className="list-group">
            {items}
            </ul>
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
            {/* Create review modal */}
            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" href="#createreview">
                Create Review
            </button>
            <div className="modal fade" id="createreview" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Create Review</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Title" aria-label="Groupname"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder= "Description" id="description" rows="4"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating (between 1 and 10):</label>
                                <input type="number" id="rating" name="rating" min="1" max="10"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Create Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Mygroups;