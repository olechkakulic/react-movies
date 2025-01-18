// данный класс будет иметь поиск - ну то есть как минимум, то  что ввел пользователь
// здесь как бы работа с формами - управляемый компонент то есть
// поэтому мы используем именно класс, а не функцию!!!!
import React from "react";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      //   значение для радиобокса
      typeFilm: "",
    };
  }
  //   прикольная штучка, чтобы по нажатию на кнопку энтер управлять именно
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.handleSearch(this.state.search, this.state.typeFilm);
    }
  };
  render() {
    const { handleSearch } = this.props;
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            {/* тип инпута поменяем на search */}
            <input
              id="email_inline"
              type="search"
              className="validate"
              placeholder="search"
              onChange={(event) => {
                this.setState({ search: event.target.value });
              }}
              //   сохраняем как бы то что пользователь вводит в состояние
              value={this.state.search}
              onKeyDown={this.handleKey}
            />
            
            <p>
              <label>
                <input
                  name="typeFilm"
                  type="radio"
                  checked={this.state.typeFilm === ""}
                  value=""
                  onChange={(event) => {
                    this.setState({ typeFilm: event.target.value });
                  }}
                />
                <span>All</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="typeFilm"
                  type="radio"
                  checked={this.state.typeFilm === "movie"}
                  value="movie"
                  onChange={(event) => {
                    this.setState({ typeFilm: event.target.value });
                  }}
                />
                <span>movie</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="typeFilm"
                  type="radio"
                  value="series"
                  checked={this.state.typeFilm === "series"}
                  onChange={(event) => {
                    this.setState({ typeFilm: event.target.value });
                  }}
                />
                <span>series</span>
              </label>
            </p>
            <button
              className="btn button-search"
              onClick={() =>
                handleSearch(this.state.search, this.state.typeFilm)
              }
            >
              search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export { Search };
