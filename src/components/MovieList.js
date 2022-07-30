import React from "react";

class MovieList extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={`https://www.themoviedb.org/t/p/original/gTlZAMmuMjN2Ia0M4pxU2C0ZWxq.jpg`} className="card-img-top" alt="sample movie" />
                        <div className="card-body">
                            <h5 className="card-title">Sample movie</h5>
                            <p className="card-text">Sample movie Description</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span class="badge bg-secondary">9.0</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default MovieList;