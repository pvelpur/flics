import React from 'react'
import { useParams } from 'react-router-dom';


function GroupDetail(){
    const {id} = useParams();
    return (
        <div className='container'>
            <h3>{id}</h3>
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
export default GroupDetail;