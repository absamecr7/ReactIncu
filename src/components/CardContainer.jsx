import { useState } from "react";
import { Component } from "react";

import DisplayStrings from "./DisplayStrings";
import CreateStrings from "./CreateStrings";
import EditStrings from "./EditStrings";
import DeleteStrings from "./DeleteStrings";
import Cards from "./Cards";

import CreateImage from "../images/Create.png";
import ReadImage from "../images/Read.jpeg";
import EditImage from "../images/Update.png";
import DeleteImage from "../images/Delete.png";

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      showDisplayCard: false,
      showCreateCard: false,
      showEditCard: false,
      showDeleteCard: false,
    };
  }

  handleCounter = (e) => {
    let currCounter = this.state.counter;
    this.setState({
      counter: currCounter + 1,
    });
    console.log(this.state.counter);
  };

  handleGetCounter = () => {
    this.setState({
      showDisplayCard: true,
      showCreateCard: false,
      showEditCard: false,
      showDeleteCard: false,
    });
  };
  handleCreateCounter = () => {
    this.setState({
      showDisplayCard: false,
      showCreateCard: true,
      showEditCard: false,
      showDeleteCard: false,
    });
  };
  handleEditCounter = () => {
    this.setState({
      showDisplayCard: false,
      showCreateCard: false,
      showEditCard: true,
      showDeleteCard: false,
    });
  };
  handleDeleteCounter = () => {
    this.setState({
      showDisplayCard: false,
      showCreateCard: false,
      showEditCard: false,
      showDeleteCard: true,
    });
  };

  render() {
    return (
      <div className="main-cards">
        <div className="cards-list">
          <div onClick={this.handleGetCounter} className="GetCard">
            <Cards text="Get All Strings" imgurl={CreateImage} />
          </div>
          <div onClick={this.handleCreateCounter} className="AddCard">
            <Cards text="Create a String" imgurl={ReadImage} />
          </div>
          <div onClick={this.handleEditCounter} className="EditCard">
            <Cards text="Edit a String" imgurl={EditImage} />
          </div>
          <div onClick={this.handleDeleteCounter} className="DeleteCard">
            <Cards text="Delete a String" imgurl={DeleteImage} />
          </div>
        </div>
        <div className="all-forms">
          {this.state.showDisplayCard ? <DisplayStrings /> : null}
          {this.state.showCreateCard ? <CreateStrings /> : null}
          {this.state.showEditCard ? <EditStrings /> : null}
          {this.state.showDeleteCard ? <DeleteStrings /> : null}
        </div>
      </div>
    );
  }
}

export default CardContainer;
