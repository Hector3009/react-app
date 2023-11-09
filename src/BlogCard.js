import React, { Component } from "react";

import { dumpLogs } from "./Utils";

// import './BlogCard.css';
import classes from "./BlogCard.module.css";

// Class component
// class BlogCard extends Component {
//   //Object
//   state = {
//     likeCount: 0,
//   };

//   //Function
//   onLikeButtonClick = () => {
//     this.setState((prevState, prevProps) => {
//       return { likeCount: prevState.likeCount + 1 };
//     });
//   };

//   render() {
//     dumpLogs(this.props);
//     return (
//       <div className={classes.NewBlogCard}>
//         <h3>{this.props.title}</h3>
//         <p>{this.props.description}</p>
//         <p>
//           Like Count:
//           <span className={classes.likeCount}>{this.state.likeCount}</span>
//         </p>
//         <button onClick={this.onLikeButtonClick}>Like</button>
//       </div>
//     );
//   }
// }

// Functions Component
const BlogCard = (props) => {
  //Function
  // onLikeButtonClick = () => {
  //   this.setState((prevState, prevProps) => {
  //     return { likeCount: prevState.likeCount + 1 };
  //   });
  // };

  dumpLogs(props);
  return (
    <div className={classes.NewBlogCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        Like Count:
        <span className={classes.likeCount}>{props.likeCount}</span>
      </p>
      <button onClick={props.onLikeButtonClick}>Like</button>
    </div>
  );
};

export default BlogCard;
