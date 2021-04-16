import React, { Component } from "react";

import { random } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      selectedColorIndex: "",
      quotes: [],
      selectedQuoteIndex: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/jjdelc/1868136/raw/c9160b1e60bd8c10c03dbd1a61b704a8e977c46b/crayola.json"
    )
      .then((data) => data.json())
      .then((colors) =>
        this.setState(
          { colors },
          this.generateRandomColorIndex
        )
      );

    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) =>
        this.setState(
          { quotes },
          this.generateRandomQuoteIndex
        )
      );
  }

  generateRandomColorIndex = () => {
    this.setState({
      selectedColorIndex: this.generateRandomIndex(),
    });
  };

  generateRandomQuoteIndex = () => {
    this.setState({
      selectedQuoteIndex: this.generateNewIndex(),
    });
  };

  get selectedColor() {
    if (!this.state.colors.length) {
      return null;
    }
    return this.state.colors[
      this.state.selectedColorIndex
    ];
  }

  get selectedQuote() {
    if (!this.state.quotes.length) {
      return null;
    }
    return this.state.quotes[
      this.state.selectedQuoteIndex
    ];
  }

  generateRandomIndex = () => {
    if (!this.state.colors.length) {
      return;
    }
    return random(
      0,
      this.state.colors.length - 1
    );
  };

  generateNewIndex = () => {
    if (!this.state.quotes.length) {
      return;
    }
    return random(
      0,
      this.state.quotes.length - 1
    );
  };

  handleClick = () => {
    this.generateRandomColorIndex();
    this.generateRandomQuoteIndex();
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.selectedColor
            ? `${this.selectedColor.hex}`
            : "blue",
          height: "100vh",
          transition: "background-color 1s ease",
        }}>
        <div
          className='card'
          style={{
            width: "18rem",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
          }}>
          <div className='card-body'>
            {this.selectedQuote
              ? `"${this.selectedQuote.quote}" -- ${this.selectedQuote.author}`
              : ""}
            <div>
              <button onClick={this.handleClick}>
                Next Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
