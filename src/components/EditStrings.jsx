import { Component } from "react";
import axios from "axios";

class EditStrings extends Component {
  constructor() {
    super();
    this.state = {
      str: "",
      newStr: "",
    };
  }

  InputChange = async () => {
    await this.setState({
      str: document.getElementById("prevString").value,
      newStr: document.getElementById("newString").value,
    });
  };

  handleClick = async () => {
    const request = {
      prevStr: this.state.str,
      newStr: this.state.newStr,
    };

    console.log("To delete : " + request.toDelete);

    try {
      const result = await axios.put(
        "https://incubate-server.herokuapp.com/editString",
        request
      );
      console.log(request);
      if (result.data.updated === true) {
        alert(
          `All instances of ${this.state.str} updated to ${this.state.newStr} sucessfully!`
        );
      }
    } catch (err) {}
  };

  render() {
    return (
      <div className="edit-strings">
        <form className="edit-strings-form">
          <div className="first-input">
            Enter the string to update:{" "}
            <input
              style={{
                height: "25px",
                fontSize: "2vmin",
                border: "1px solid #0494fc",
                color: "#0494fc",
              }}
              type="text"
              id="prevString"
              name="prevString"
              onChange={this.InputChange}
            />
          </div>

          <div className="second-input">
            Enter updated string:{" "}
            <input
              style={{
                height: "25px",
                fontSize: "2vmin",
                border: "1px solid #0494fc",
                color: "#0494fc",
              }}
              type="text"
              id="newString"
              name="newString"
              onChange={this.InputChange}
            />
          </div>
        </form>
        <div className="ButtonCSS" onClick={this.handleClick}>
          Update
        </div>
      </div>
    );
  }
}

export default EditStrings;
