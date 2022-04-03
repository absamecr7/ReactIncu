import { Component } from "react";
import axios from "axios";

class DeleteStrings extends Component {
  constructor() {
    super();
    this.state = {
      str: "",
    };
  }

  InputChange = async () => {
    await this.setState({
      str: document.getElementById("stringToDelete").value,
    });
  };

  handleClick = async () => {
    const request = {
      toDelete: this.state.str,
    };

    console.log("To delete : " + request.toDelete);

    try {
      const result = await axios.post(
        "https://incubate-server.herokuapp.com/deleteString",
        request
      );
      console.log(request);
      if (result.data.deleted === true) {
        alert(`All instances of ${this.state.str} deleted sucessfully!`);
      }
    } catch (err) {}
  };

  render() {
    return (
      <div className="create-strings">
        <form className="create-strings-form">
          Enter the string:{" "}
          <input
            style={{
              height: "25px",
              fontSize: "2vmin",
              border: "1px solid #0494fc",
              color: "#0494fc",
            }}
            type="text"
            id="stringToDelete"
            name="stringToDelete"
            onChange={this.InputChange}
          />
        </form>
        <div className="ButtonCSS" onClick={this.handleClick}>
          Delete
        </div>
      </div>
    );
  }
}

export default DeleteStrings;
