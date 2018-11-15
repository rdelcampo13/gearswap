import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'
import Alert from 'react-s-alert';
import API from "../../utils/api";

// mandatory
import 'react-s-alert/dist/s-alert-default.css';
 
// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Signup extends Component {

  state = {
    username: '',
    password: '',
    redirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      const { username, password } = this.state;
      API.signup({ username, password })
        .then(res => { 
          if(res.data.success) {
            this.userAlert("success", res.data.message); 
            this.setState({ redirect: true })              
          }
          else {
            this.userAlert("error", res.data.message); 
          }
        })
        .catch(err => console.log(err));
    }
  };

  userAlert = (type, message) => {
    switch (type) {
      case "error":
        Alert.error(message, {
          position: 'bottom-left',
          effect: 'slide',
          timeout: 3000
        });        
        break;

      case "success":
        Alert.success(message, {
          position: 'bottom-left',
          effect: 'slide',
          timeout: 3000
        });        
        break;  

      default:
        Alert.info(message, {
          position: 'bottom-left',
          effect: 'slide',
          timeout: 3000
        });        
        break;
    }
  }

  // Render Function
  render() {
    const { redirect } = this.state;

    if( redirect ) {
      return <Redirect to='/'/>;
    }

    return (
      <div className="vertical-center">
        <div className="container signup" style={{marginTop: 50}}>
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card align-middle">
                <div className="card-body signup-body">
                  <h1 style={{ color: "#ffc107"}}><span className="fa fa-sign-in"></span> Signup</h1>

                  <form action="/signup">
                      <div className="form-group">
                          <label>Username</label>
                          <input type="text" className="form-control" name="username" onChange={this.handleInputChange} />
                      </div>
                      <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" name="password" onChange={this.handleInputChange} />
                      </div>

                      <button type="submit" className="btn btn-outline-warning" disabled={!(this.state.username && this.state.password)} onClick={this.handleFormSubmit}>Signup</button>
                  </form>

                  <hr/>

                  <p>Already have an account? <Link  style={{ color: "#ffc107"}} to="/login">Login</Link></p>
                  <p>Or go <Link style={{ color: "#ffc107"}} to="/">Home</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default Signup;
