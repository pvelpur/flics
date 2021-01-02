import React, { useState} from "react"
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'

function GroupDetail(){
    const {id} = useParams();
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [rating,setRating] = useState(1)
    const [successModal,setSuccess] = useState(false)
    const authToken = useSelector(state => state.auth.authToken)
    const reviews = [{
        title:"game of thrones",
        description : "it sucks",
        rating : 2,
        author: "swagmoney1011"
    },
    {
        title:"arrow",
        description : "its soo good",
        rating : 9,
        author: "swagmoney1011"
    }]

    const items = reviews.map((item) =>

        <div class="card" style={{marginBottom:"50px"}}>
            <h5 class="card-header">{ item.title }
                <button class="btn btn-secondary btn-sm mt-1 mb-1">Add to My List</button>
                <span style={{float:"right"}}>
                    { item.rating } / 10
                </span>
            </h5>
            <div class="card-body">
                <p class="card-text">{ item.description }</p>
            </div>
            <div class="card-footer text-muted">
                { item.author }
                {/* <span style="float:right;">  
                {{ review.date_posted|date:"F d, Y" }}
                </span> */}
            </div>
        </div>
    )
        

    const handleChange = inputName => event => {
        setSuccess(false)
        if(inputName === 'title'){
            setTitle(event.target.value)
        }
        else if (inputName === 'description'){
            setDescription(event.target.value)
        }
        else{
            setRating(event.target.value)
        }
    }

    const handleSubmit = event => {
        event.preventDefault() //stop default behavior of reloading page
        const reviewinfo = {
            title:title,
            description:description,
            rating:rating,
        }
        createReview(reviewinfo)
        .then(data => {
            if(data.errors){
                console.log("Database error")
            }
            else{
                console.log("Success")
                setSuccess(true)
            }
        })
        .catch(err => console.log("Database error", err))
    }

    const createReview = reviewinfo => {
        return fetch('http://localhost:8080/review', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken
            },
            body: JSON.stringify(reviewinfo)
        })
        .then((res) => {
            return res.json()
        })
        .catch(err => console.log(err))
    } 

    return (
        <div className='container'>
            <h3>{id}</h3>
            {/* Create review modal */}
            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" href="#createreview">
                Create Review
            </button>
            <div style={{marginBottom: "50px"}}>
                <ul className="list-group">
                    {items}  
                </ul>
            </div>
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


                        {successModal ?
                            <div className="text-center">
                                Successfully created review!
                            </div>
                        : ""
                        }
                            <div className="input-group mb-3">
                            <input  onChange={handleChange("title")} value={title} type="text" className="form-control" placeholder="Title" aria-label="Title"/>
                            </div>
                            <div className="form-group">
                                <textarea onChange={handleChange("description")} value={description} className="form-control" placeholder= "Description" id="description" rows="4"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating (between 1 and 10):</label>
                                <input onChange={handleChange("rating")} value={rating} type="number" id="rating" name="rating" min="1" max="10"/>
                            </div>    
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=> {setTitle('');setDescription('');setRating(1);setSuccess(false) }} data-dismiss="modal">Close</button>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary" >Create Review</button>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GroupDetail;