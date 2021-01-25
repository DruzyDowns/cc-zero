import React, { Component } from "react";
import Gif from "./Gif";

const Header = ({ clearSearch, hasResults }) => (
  <div className="header grid">
    {" "}
    {hasResults ? (
      <button>
        <img
          onClick={clearSearch}
          src={require("./images/close-icon.svg")}
          className="block mx-auto"
        />
      </button>
    ) : (
      <h1 className="title">
        Cleveland Museum of Art — open access API Explorer
      </h1>
    )}
  </div>
);

const UserHint = ({ loading, hintText }) => (
  <div className="user-hint">
    {loading ? (
      <img src={require("./images/loader.svg")} className="block mx-auto" />
    ) : (
      hintText
    )}
  </div>
);

const randomChoice = (arr) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      hintText: "",
      gifs: [],
    };
  }

  searchGiphy = async (searchTerm) => {
    this.setState({
      loading: true,
    });
    try {
      const response = await fetch(
        `https://openaccess-api.clevelandart.org/api/artworks/?cc0&q=${searchTerm}&limit=50`
      );
      const { data } = await response.json();

      if (!data.length) {
        throw `Nothing found for ${searchTerm}, please try another search`;
      }

      const rando = randomChoice(data);
      //console.log(data[0].images.original.mp4);

      //const gif = rando.images.original.mp4
      this.setState((prevState, props) => ({
        ...prevState,
        gifs: [...prevState.gifs, rando],
        hintText: `Press enter for more ${searchTerm}`,
        loading: false,
      }));
    } catch (error) {
      this.setState((prevState, props) => ({
        ...prevState,
        loading: false,
        hintText: error,
      }));
    }
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: value,
      hintText: value.length > 2 ? `Press enter to search for ${value}` : "",
    }));
  };

  handleKeyPress = (event) => {
    const { value } = event.target;
    if (value.length > 2 && event.key === "Enter") {
      //alert(`Search for ${value}`);
      this.searchGiphy(value);
    }
  };

  clearSearch = () => {
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: "",
      hintText: "",
      gifs: [],
    }));
    //document.querySelector("input").focus();
    this.textInput.focus();
  };

  render() {
    const { searchTerm, gifs } = this.state;
    const hasResults = gifs.length;
    return (
      <div className="page">
        <Header clearSearch={this.clearSearch} hasResults={hasResults} />
        <div className="search grid">
          {}
          {}

          {this.state.gifs.map((gif) => (
            <Gif {...gif} />
          ))}

          <input
            ref={(input) => {
              this.textInput = input;
            }}
            className="input grid-item"
            placeholder="Type something!"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={searchTerm}
          />
        </div>
        <UserHint {...this.state} />
      </div>
    );
  }
}

export default App;
