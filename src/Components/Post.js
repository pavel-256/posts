import React, { Component } from "react";
import { Default } from "../App";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      img: this.props.img,
      information: this.props.information,
      color: this.props.bg,
      alowEdit: true,
      defaultImage: Default,
      defaultName: "No Name",
      defaultInfo: "No Info",
    };
    this.handelchange = this.handelchange.bind(this);
    this.sendDelete = this.sendDelete.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  handelchange(e) {
    if (e.target.id === "name") {
      this.setState({
        name: e.target.value === "" ? this.state.defaultName : e.target.value,
      });
    } else if (e.target.id === "img") {
      this.setState({
        img: e.target.value === "" ? this.state.defaultImage : e.target.value,
      });
    } else if (e.target.id == "information") {
      this.setState({
        information:
          e.target.value === "" ? this.state.defaultInfo : e.target.value,
      });
    }

    this.setState({
      alowEdit: true,
    });
  }

  sendDelete() {
    this.props.deletPost(this.props.index);
  }

  editPost() {
    this.props.editPost(this.props.index, this.state);
  }

  render() {
    const style = {
      backgroundColor: this.props.bg,
      maxWidth: "600px",
    };

    let styleEdit = {
      backgroundColor: this.props.bg,
      maxWidth: "600px",
      display: this.props.alowEdit ? "none" : "block",
    };
    const styleImg = {
      width: "90%",
      height:'90%',
      marginLeft: "10px",
      marginTop: "10px",
   
    };
    const styleTextArea = {
      width: "231px",
      height: "239px",
      fontSize: "25px",
    };

    return (
      <div align="center" className="postList">
        <div className="card mb-3 " style={style}>
          <div className="row no-gutters">
            <div className="col-md-4 ">
              <img
                style={styleImg}
                src={this.props.img}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>{this.props.name} </h1>
                <br />

                <h2>{this.props.information}</h2>
                <button
                  onClick={() => this.props.showEdit(this.props.index)}
                  title="Edit post"
                  className="btn btn-success button mt-5"
                >
                  Edit
                </button>
                <button
                  onClick={this.sendDelete}
                  title="Delete post"
                  className="btn btn-danger button mt-5 rounded float-right"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="edit" className="card mb-3 edit" style={styleEdit}>
          <div className="row no-gutters">
            <div className="col-md-6">
              <label className="label" htmlFor="name">
                Change info:
              </label>
              <textarea
                className="form-control"
                id="information"
                onChange={this.handelchange}
                defaultValue={this.props.information}
                type="text"
                name="textArea"
                style={styleTextArea}
              ></textarea>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label className="label" htmlFor="">
                  Change name:
                </label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  onChange={this.handelchange}
                  defaultValue={this.props.name}
                />
                <label className="label" htmlFor="">
                  Change img path:
                </label>
                <br />
                <input
                  className="form-control"
                  name="img"
                  id="img"
                  type="text"
                  defaultValue={this.props.img}
                  onChange={this.handelchange}
                />
                <br />
                <button
                  onChange={this.handelchange}
                  onClick={this.editPost}
                  title="Save changes"
                  className="btn btn-warning  mt-5 "
                >
                  Upade
                </button>
                <button
                  onClick={() => this.props.hideEdit(this.props.index)}
                  title="Close window"
                  className="btn btn-danger  mt-5 ml-2 "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
