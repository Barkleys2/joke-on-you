import React from "react";
import "./App.css";
class App extends React.Component {

  componentDidMount() {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const {items } = this.state;

    return (
      <div className="App">
        {items.map((item) => (
          <ol>
            {item.category}, {item.type}, {item.setup}
            {item.joke}
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
