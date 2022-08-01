import React from "react";

class SearchBar extends React.Component {
    render(){
        return(
            <form>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Search a movie" />

                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;