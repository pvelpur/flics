import React from 'react'


function Mygroups(){
    return (
        <div className='container'>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Silicon Valley Boys
                <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                JPMC Sucks
                <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                East Coast Best Coast
                <span className="badge badge-primary badge-pill">1</span>
            </li>
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
                            <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Group Name" aria-label="Groupname"/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder= "Description" id="description" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Group</button>
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
                            <div class="form-group">
                                <textarea class="form-control" placeholder= "Description" id="description" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="rating">Rating (between 1 and 10):</label>
                                <input type="number" id="rating" name="rating" min="1" max="10"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mygroups;