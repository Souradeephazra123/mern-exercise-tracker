import React, { Component } from "react";
import Axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    Axios.post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.error("Axios Error:", error);
      });

    this.setState({
      username: "",
    });

    //window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
