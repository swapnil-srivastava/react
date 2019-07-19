import React, { Component } from "react";
import Fire from "../firebase/Fire";
import { Prompt, Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userUid: "",
      user: "",
      password: ""
    };
  }

  componentDidMount() {
    this.authListener();
  }

  login = (email, password) => {
    Fire.auth()
      .signInWithEmailAndPassword(this.state.user, this.state.password)
      .then(_ => {
        console.log("login successfull with firebase");
      })
      .catch(error => console.log("error with signin", error));
  };

  signOut = event => {
    Fire.auth()
      .signOut()
      .then(_ => console.log("Logout successfull from firebase "))
      .catch(error => console.log("error with signout", error));
  };

  authListener() {
    Fire.auth().onAuthStateChanged(_user => {
      if (_user) {
        this.setState({ userUid: _user.uid });
      } else {
        this.setState({ userUid: null });
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login();
  };

  handleEmailChange = event => {
    this.setState({ user: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <Prompt when={true} message="are you sure you want to leave login page"></Prompt>
        <p>User name : {this.state.userUid}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleEmailChange}
            value={this.state.user}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <input type="submit" value={"Login"} />
          <input type="button" value={"Logout"} onClick={this.signOut} />
          <p>User email: {this.state.user}</p>
          <Link to="/">Home</Link>
        </form>
      </>
    );
  }
}
