import React from "react";
import SearchBar from './SearchBar'
import MovieList from './MovieList'

class App extends React.Component{

    state={
        movies : []
    }
    render(){
        return(
            <div className="container">
                <dic className="row">
                    <div className="col-lg-12">
                        <SearchBar/>
                    </div>

                </dic>
                <MovieList/>
            </div>
        )
    }
}

export default App;