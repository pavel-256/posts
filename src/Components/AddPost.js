import React, { Component } from "react";
import { Default } from "../App";

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      information: "",
      color: "#10dacf",
      alowEdit: true,
      defaultName: "No Name",
      defaultInfo: "No Info",
      defaultImage: Default,
    };

    this.handelchange = this.handelchange.bind(this);
  }

  handelchange(e) {
    if (e.target.id === "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.id === "img") {
      this.setState({ img: e.target.value });
    } else if (e.target.id == "information") {
      this.setState({ information: e.target.value });
    }

    this.setState({
      alowEdit: true,
    });
  }

  render() {
    return (
      <div align="center" className="addPost">
        <h1 className="posts mb-3">Add New Post</h1>
        <div className="col-lg-5  col-sm-5">
          <input
            style={{ backgroundColor: this.state.validNameColor }}
            id="name"
            onChange={this.handelchange}
            placeholder="Name"
            type="text"
            className="form-control"
          />
          <br />
          <input
            id="img"
            onChange={this.handelchange}
            placeholder="Img adress from web or default"
            type="text"
            className="form-control"
          />
          <br />
          <input
            id="information"
            onChange={this.handelchange}
            placeholder="Info"
            type="text"
            className="form-control mb-2"
          />

          <button
            title="Add post"
            className="btn btn-warning mb-2"
            onClick={() => {
              this.props.sendFunction(
                this.state.name,
                this.state.img,
                this.state.color,
                this.state.information,
                this.state.alowEdit,
                this.state.defaultImage,
                this.state.defaultName,
                this.state.defaultInfo
              );
            }}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}
