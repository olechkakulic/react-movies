// основная часть сайта
import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
// сюда положим наш ключик
const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component {
  state = {
    movies: [
      // вот это все можно не писать, оно само заполнится!!!
    ],
    loading: true,
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok!");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      })
      .catch((error) => {
        console.error("there is a problem", error);
      });
  }
  //   делаем эту функцию чтобы из нижнего компонента такого, как Search смочь повлиять на род. компонент main
  handleSearch = (filmName, type) => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName}&type=${type}&`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok!");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      })
      .catch((error) => {
        console.error("there is a problem", error);
      });
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search handleSearch={this.handleSearch} />
        {!loading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}
export { Main };
