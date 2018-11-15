import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Redirect, withRouter } from 'react-router';
// import Alert from 'react-s-alert';
import "./Nav.css"

class Nav extends Component {

  state = {
  };


  // Render Function
  render() {

    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container" style={{ padding: 0 }}>
          <Link to="/" className="navbar-brand">cointaxes</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">


          </div>
        </div>
      </nav>
      
      <div className="modal fade" id="donateModal" tabIndex="-1" role="dialog" aria-labelledby="donateModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 style={{ color: "#fff" }} className="modal-title" id="exampleModalLongTitle">Thanks for the support!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span style={{ color: "#fff" }} aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ backgroundColor: "#1a1f23", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(0,0,0,.125)" }} id="inputGroup-sizing-default">BTC address</span>
                </div>
                <input type="text" className="form-control" style={{ borderWidth: 1, borderStyle: "solid", borderColor: "rgba(0,0,0,.125)" }} aria-label="Default" aria-describedby="inputGroup-sizing-default" readOnly value="166EqTeimRYGFjMvCqw9MpaHmpdf1A7gKp" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ backgroundColor: "#1a1f23", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(0,0,0,.125)" }} id="inputGroup-sizing-default">ETH address</span>
                </div>
                <input type="text" className="form-control" style={{ borderWidth: 1, borderStyle: "solid", borderColor: "rgba(0,0,0,.125)" }} aria-label="Default" aria-describedby="inputGroup-sizing-default"readOnly value="0x828A5CB8385fA152cBb03CC19136f8Cb1aaf6578" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Nav;
