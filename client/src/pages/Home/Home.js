import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {

  state = {
    search: "",
    url: "https://gearswap.sharetribe.com/?q=",
    query: "austin+texas"
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    if (event.key === 'Enter') {
      event.preventDefault();
      var urlQuery = this.state.url + this.state.search.split(' ').join('+');
      window.location = urlQuery;
    }
  };


  // Render Function
  render() {
    return (
      <div>

        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">

          <button className="navbar-toggler new-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-search"></i>
          </button>

          <a className="navbar-brand gear-swap-logo" href="/"><img src="/img/gearswap-logo.png"  style={{ height: '30px' }} /></a>
          <form className="form-inline my-2 my-lg-0 d-none d-lg-block">
            <i className="fas fa-search"></i>
            <input 
              onChange={this.handleInputChange}
              onKeyPress={this.handleFormSubmit}
              className="form-control mr-sm-2 search-bar" 
              type="search" 
              name="search"
              placeholder='Try "MPC 2000XL"' 
              aria-label="Search" 
            />
          </form>
          <button className="navbar-toggler new-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto nav-menu">
              <li className="nav-item">
                <a className="nav-link" href="https://gearswap.sharetribe.com/en/listings/new">+ Add your gear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://gearswap.sharetribe.com/en/signup">Sign up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://gearswap.sharetribe.com/en/login">Log in</a>
              </li>
            </ul>
          </div>

          <div className="d-block d-lg-none">
            <div className="collapse navbar-collapse" id="navbarSupportedContent2">
              <ul className="navbar-nav ml-auto nav-menu">
                <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0">
                    <input 
                      onChange={this.handleInputChange}
                      onKeyPress={this.handleFormSubmit}
                      className="form-control mr-sm-2 search-bar" 
                      type="search" 
                      name="search"
                      placeholder='Try "MPC 2000XL"' 
                      aria-label="Search" 
                    />
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container home-container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="landing-cointainer">
                <div className="landing-header">
                  <h1 className="landing-title animate text-left">Find Audio Gear Anywhere </h1>
                  <div className="card hero-card bg-dark text-white">
                    <img className="card-img home-img" src="/img/card-hero.jpg" alt="Card image" />
                    <div className="card-img-overlay landing-card text-left">
                      <div className="row">
                        <div className="col-sm-12">
                          <h3 className="card-title animate">Buy & sell audio equipment</h3>
                          <h3 className="card-title animate">from the recording community.</h3>
                          <a href="https://gearswap.sharetribe.com" className="btn btn-light animate" style={{ color: 'black', marginTop: '20px' }} >Get Started</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>              
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="landing-cointainer">
                <div className="explore-header">
                  <h2 className="explore-title ">Explore Gear</h2>
                  <p className="">Find the equipment you're looking for, or explore new gear around Austin.</p>

                  <div className="row">
                    <div className="col-md-4 col-sm-12 explore-col">
                      <a href="https://gearswap.sharetribe.com/?q=monitors">
                        <div className="card hero-card bg-dark text-white">
                          <img className="card-img" src="/img/studio-monitors.jpg" alt="Card image" />
                          <div className="card-img-overlay explore-container text-center d-flex flex-column justify-content-center">
                            <h3 className="card-title explore-card-title animate">Monitors</h3>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-md-4 col-sm-12 explore-col">
                      <a href="https://gearswap.sharetribe.com/?q=audio+interfaces">
                        <div className="card hero-card bg-dark text-white">
                          <img className="card-img" src="/img/audio-interface.jpg" alt="Card image" />
                          <div className="card-img-overlay explore-container text-center d-flex flex-column justify-content-center">
                            <h3 className="card-title explore-card-title animate">Audio Interfaces</h3>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-md-4 col-sm-12 explore-col">
                      <a href="https://gearswap.sharetribe.com/?q=MPC">
                        <div className="card hero-card bg-dark text-white">
                          <img className="card-img" src="/img/mpc.jpg" alt="Card image" />
                          <div className="card-img-overlay explore-container text-center d-flex flex-column justify-content-center">
                            <h3 className="card-title explore-card-title animate">MPCs</h3>
                          </div>
                        </div>
                      </a>
                    </div>

                  </div>

                  <a className="container-link" href="https://gearswap.sharetribe.com/"><p className="container-link">Explore all categories of gear.</p></a>
                </div>              
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="landing-cointainer">
                <div className="landing-header explore-header">
                  <h2 className="explore-title text-left" style={{ paddingBottom: 30 }} >How Gearswap Works</h2>
                  <div className="row how-it-works-row text-left">
                    <div className="col-md-6">
                      <ol className="how-list">
                        <li>
                          <span className="how-title">Discover Gear</span> 
                          <br/>
                          <span className="">Discover gear nearby or across the country. From the most unique synthesizers to old school drum machines, we have the right gear for every genre.</span>
                        </li>
                        <li>
                          <span className="how-title">Request Info</span>
                          <br/>
                          <span className="">Have questions about hardwear, condition, or need additional pics? Use our site messaging to communicate directly with sellers.</span>
                        </li>
                        <li>
                          <span className="how-title">Pay & Jam</span>
                          <br/>
                          <span className="">Schedule a pickup or shippment and pay online in minutes. Shop in confidence with the safety of PayPal Buyer Protection.</span>
                          <br/>
                          <a href="https://gearswap.sharetribe.com" className="btn btn-dark" style={{ marginTop: '30px', marginBottom: '10px' }} >Get Started</a>                      
                        </li>
                      </ol>
                    </div>
                    <div className="col-md-6 d-none d-sm-none d-md-flex">
                      <div className="hand-container">
                        <img className="hand" src="/img/gearswap-hand.png" alt="How Gearswap Works" />
                      </div>
                    </div>
                  </div>                
                </div>              
              </div>
            </div>
          </div>

        </div>

        <div className="footer-container">
          <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light footer">
              <ul className="navbar-nav mr-auto nav-menu footer-nav" >
                <li className="nav-item">
                  <a className="nav-link" href="/">© Gearswap</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="mailto:gearswapco@gmail.com">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Privacy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Terms</a>
                </li>
              </ul>
          </nav>
        </div>


      </div>
    );
  }
}

export default Home;
