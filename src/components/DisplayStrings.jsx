import { Component } from "react";
// import tempData from "../FakeData/GetStringFormData";
import axios from "axios";

class DisplayStrings extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const result = await axios.get(
      "https://incubate-server.herokuapp.com/displayAll"
    );
    console.log(result.data);

    const resData = [];
    result.data.map((obj) => {
      resData.push(obj.word);
    });

    this.setState({
      data: resData,
    });
  }

  render() {
    return (
      <div className="display-strings">
        <div className="display-strings-heading">
          <h1>Current Strings</h1>
        </div>
        <div className="display-strings-content">
          {this.state.data.map((str) => (
            <span className="single-string">{str}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayStrings;
