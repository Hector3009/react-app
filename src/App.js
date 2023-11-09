import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BlogHomePageCard from "./BlogCard";
import { isArrayEmty as checkArrayIsEmpty } from "./Utils";

class App extends Component {
  //Objeto
  state = {
    showBlogs: true, //Property
    blogArr: [
      {
        id: 1,
        title: "Blog Title 1",
        description:
          "Irure magna id amet cillum exercitation officia ipsum culpa cupidatat voluptate velit dolor consequat ex.",
        likeCount: 0,
      },
      {
        id: 2,
        title: "Blog Title 2",
        description:
          "Irure magna id amet cillum exercitation officia ipsum culpa cupidatat voluptate velit dolor consequat ex.",
        likeCount: 0,
      },
      {
        id: 3,
        title: "Blog Title 3",
        description:
          "Irure magna id amet cillum exercitation officia ipsum culpa cupidatat voluptate velit dolor consequat ex.",
        likeCount: 0,
      },
    ],
  };

  //Function
  onLikeButtonClick = (pos) => {
    const updateBlogList = this.state.blogArr;
    const updateBlogObj = updateBlogList[pos];

    updateBlogObj.likeCount = updateBlogObj.likeCount + 1;
    updateBlogList[pos] = updateBlogObj;

    this.setState({ blogArr: updateBlogList });

    console.log(updateBlogObj);
  };

  // styles = {
  //   margin: "16px",
  //   padding: "16px",
  //   borderRadius: "5px",
  //   boxShadow: "0 2px 5px #ccc",
  //   boxSizing: "border-box",
  // };
  // const firstName = 'John';
  // const lasttName = 'Wick';
  // const age ='27';
  // const Job = 'Anonymous';
  // const mArr = [1,2,3,4];
  // const mObj = {
  //   name:'Hector',
  //   age:27,
  // }
  // inputPlaceHolder = "Enter your details";

  // getFullName = (firstName, lasttName) => `${firstName} ${lasttName}`;

  // detailsInputBox = (
  //   <input placeholder={this.inputPlaceHolder} autoComplete />
  // );

  //Function
  onHideBtnClick = () => {
    // let updateState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs };
    });

    console.log(this.showBlogs);
  };

  render() {
    console.log("Render Called");
    console.log(this.setState);

    const blogCards = checkArrayIsEmpty(this.state.blogArr)
      ? []
      : this.state.blogArr.map((item, pos) => {
          return (
            <BlogHomePageCard
              className={"Blog"}
              key={pos}
              title={item.title}
              description={item.description}
              likeCount={item.likeCount}
              id={item.id}
              onLikeButtonClick={() => this.onLikeButtonClick(pos)}
            />
            // <div className='blogCard' key={item.id}>
            // <h3>{item.title}</h3>
            // <p>{item.description}</p>
            // <hr></hr>
            // </div>
          );
        });

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>
          {this.state.showBlogs ? "Hide Blogs" : "Show List"}
        </button>
        <br></br>
        {this.state.showBlogs ? blogCards : null}
      </div>
    );
  }
}

export default App;
