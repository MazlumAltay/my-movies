import React from "react";

class SearchBar extends React.Component {

    state = {
        serachQuery: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
            onChange={(event) => this.setState({serachQuery: event.target.value})}
              type="text"
              className="form-control"
              placeholder="Search a movie"
              value={this.state.serachQuery}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
