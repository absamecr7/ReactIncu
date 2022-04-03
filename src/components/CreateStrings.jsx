import axios from "axios";
import { Component } from "react";

class CreateStrings extends Component {
  constructor() {
    super();
    this.state = {
      str: "",
    };
  }

  InputChange = async () => {
    await this.setState({
      str: document.getElementById("stringToAdd").value,
    });
  };

  handleClick = async () => {
    // if (this.state.str.length == 0) alert("Please enter a valid string!");
    // else alert("Last string : " + this.state.str);

    const request = {
      newWord: this.state.str,
    };

    try {
      const result = await axios.post(
        "https://incubate-server.herokuapp.com/createString",
        request
      );
      if (result.data.inserted === true) {
        alert(`String ${this.state.str} inserted sucessfully!`);
      }
    } catch (err) {}
  };

  render() {
    return (
      <div className="create-strings">
        <form className="create-strings-form">
          Enter a string:{" "}
          <input
            style={{
              height: "25px",
              fontSize: "2vmin",
              border: "1px solid #0494fc",
              color: "#0494fc",
            }}
            type="text"
            id="stringToAdd"
            name="stringToAdd"
            onChange={this.InputChange}
          />
        </form>
        <div className="ButtonCSS" onClick={this.handleClick}>
          Add
        </div>
      </div>
    );
  }
}

export default CreateStrings;
