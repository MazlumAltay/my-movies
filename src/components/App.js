import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [
      {
        name: "Yüzüklerin Efendisi: Yüzük Kardeşliği",
        rating: "8.0",
        overview:
          "İyiyle kötü arasındaki mücadelenin epik bir anlatımı olan filmde, muazzam bir sorumluluğu üstlenmek zorunda kalan ve barışçı bir Hobbit olan Frodo Baggins'in destansı serüveni işleniyor. Frodo'nun yapması gereken, Kıyamet'in Çatlakları olarak anılan diyara dalarak epik bir mücadeleye girişmek ve bu yüzüğü ebediyen ortadan kaldırmaktır. ",
        imageURL:
          "https://www.themoviedb.org/t/p/original/e2QqbLA7BnuYKdYkmFeuVKZlurP.jpg",
        id: 4,
      },
      {
        name: "Yüzüklerin Efendisi: İki Kule",
        rating: "8.6",
        overview:
          "Yüzük Kardeşliği üyelerinin her birinin, kardeşlik bozulduktan sonra başlarına gelenler anlatılıyor. Kahramanlarımız, gruplar halinde Orta Dünya'nın en tehlikeli yerlerinde maceralar yaşayacaklar, yeni kavimler ve çoktan unutulmuş medeniyetlerle tanışacaklar.",
        imageURL:
          "https://www.themoviedb.org/t/p/original/aNsy5lnvDbfDi3rU0Cd731p2aoA.jpg",
        id: 5,
      },
      {
        name: "Yüzüklerin Efendisi: Kralın Dönüşü",
        rating: "8.9",
        overview:
          "Kıyamet günü ortamını yaşayan Orta Dünya'da, Yüzük Savaşı'nın son ve en büyük mücadelesine hoşgeldiniz. Bir yanda güvenilmez Gollum'un rehberlik ettiği yüzük taşıyıcısı Frodo ve yoldaşı Sam, Mordor'a ulaşıp Tek Yüzük'ü yokedebilecekleri tek yere götürmeye çalışıyorlar.",
        imageURL:
          "https://www.themoviedb.org/t/p/original/5WOdbuci0Z2H40NGIUhhC2vc8hI.jpg",
        id: 6,
      },
      {
        name: "The Matrix 3",
        rating: "8.1",
        overview:
          "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
        id: 7,
      },
      {
        name: "The Matrix Reloaded",
        rating: "6.9",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
        overview:
          "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.",
        id: 8,
      },
      {
        name: "Saw 3D",
        rating: "7.5",
        overview:
          "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
        id: 11,
      },
      {
        name: "Blitz 007",
        rating: "6.3",
        overview:
          "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
        id: 12,
      },
      {
        name: "Hostage",
        rating: "6.3",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
        overview:
          "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
        id: 13,
      },
    ],

    searchQuery: "",
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    // this.setState({
    //   movies: newMovieList,
    // });

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    //console.log(event.target.value);
    this.setState({searchQuery: event.target.value})
  };

  render() {

    let filteredMovies =  this.state.movies.filter(
      (movie) =>{
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList
          movies={filteredMovies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;
