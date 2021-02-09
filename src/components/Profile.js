import React, { Component } from "react";

class Profile extends Component {
  state = {
    jsonList: [],
  };

  componentDidMount() {
    let header = new Headers({
      "Content-Type": "application/json",
      Authorization: "token 8260ee2c2da04dbd00ee6bef8bdec9b71834417a",
    });

    fetch("https://api.github.com/search/repositories?q=java", {
      method: "GET",
      headers: header,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ jsonList: json });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Profile component</h3>

        {/* {this.state.jsonList.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })} */}
      </div>
    );
  }
}

export default Profile;
