import React, { Component } from "react";
import "./App.css";
import Addpost from "./Components/AddPost";
import Cat from "./img/cat.jpg";
import Dog from "./img/dog.jpg";
import Fish from "./img/fish.jpg";
import Bear from "./img/bear.jpg";
import Bird from "./img/bird.jpg";
import Default from "./img/defaultimg.jpg";
import Post from "./Components/Post";
export default class App extends Component {
  state = {
    list: [
      {
        name: "Cat",

        information: " This is a ginger cat",

        color: "#6de5ee",

        alowEdit: true,

        img: Cat,
      },

      {
        name: "Dog",

        information: "This is a little dog",

        color: "#8ba4f0",

        alowEdit: true,

        img: Dog,
      },
      {
        name: "Fish",

        information: "This is a very rare fish",

        color: "#d6d7da",

        alowEdit: true,

        img: Fish,
      },
      {
        name: "Bear",

        information: "This is a Grizzly bear",

        color: "#d4ebb7",

        alowEdit: true,

        img: Bear,
      },
      {
        name: "Bird",

        information: "Very common bird in the city",

        color: "#fa7693",

        alowEdit: true,

        img: Bird,
      },
    ],
  };

  showEdit = (id) => {
    const newPost = [...this.state.list];
    newPost[id].alowEdit = false;

    this.setState({
      alowEdit: false,
    });
  };
  hideEdit = (id) => {
    const newPost = [...this.state.list];
    newPost[id].alowEdit = true;

    this.setState({
      alowEdit: true,
    });
  };

  add = (
    name,
    img,
    color,
    information,
    alowEdit,
    defaultImage,
    defaultName,
    defaultInfo
  ) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          name: name === "" ? defaultName : name,
          name: name === "" ? defaultName : name,
          img: img === "" ? defaultImage : img,
          color: color,
          information: information === "" ? defaultInfo : name,
          alowEdit: alowEdit,
        },
      ],
    });
  };

  deletePost = (index) => {
    let newList = [];
    for (let i = 0; i < this.state.list.length; i++) {
      if (index != i) {
        newList.unshift(this.state.list[i]);
      }
    }
    this.setState({ list: [...newList] });
  };

  editPost = (id, value) => {
    const list = [...this.state.list];

    const edited = list.map((item, i) => {
      if (i !== id) {
        return item;
      }
      return value;
    });

    this.setState({ list: edited });
  };

  render() {
    return (
      <div className="App">
        <Addpost sendFunction={this.add} />
        {this.state.list.map((val, i) => {
          return (
            <Post
              editPost={this.editPost}
              deletPost={this.deletePost}
              showEdit={this.showEdit}
              hideEdit={this.hideEdit}
              index={i}
              name={val.name}
              img={val.img}
              bg={val.color}
              information={val.information}
              alowEdit={val.alowEdit}
            />
          );
        })}
      </div>
    );
  }
}

export { Default };
