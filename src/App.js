import banner1 from './img/banner1.jpg';
import banner2 from './img/banner2.jpg';
import banner3 from './img/banner3.jpg';
import banner4 from './img/banner4.jpg';
import logo from './amazon-logo.png'
import headerbanner from './img/header_banner.jpg'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faChevronRight, faBars, faSearch, faChevronDown, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags';
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class App extends Component {
  //1. property
  state = {
    x: 'l934',
    y: '',
    z: ''
  }
  //2. constructor
  // constructor(props) {
  //   super(props);
  // }

  //3.Method
  componentDidMount() {
    //this is the life cyle method that will be called when page is loaded successfully
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    console.log('ok ' + window.scrollY);
    if (window.scrollY >= 60) {//if scroll amount is greater than 50 then we will 
      // Add 'position-fixed top-0 start-0'
      this.setState({ y: 'position-fixed top-0 start-0' });
    } else {
      // Remove 'position-fixed top-0 start-0'
      this.setState({ y: '' });
    }
  }
  closemodal = () => {
    this.setState({ x: 'l934' });
  }
  handleModal = () => {
    this.setState({ x: 'l433' })
  }
  formHandle = () => {
    if (this.state.z === 'formboder') {
      this.setState({ z: '' })
    } else {
      this.setState({ z: 'formboder' })
    }
  }
  handleCountryDD = () => {
    //alert('ok');
    //Show the exampleModel2 
    // var modalToggle = document.getElementById('exampleModal2'); // relatedTarget
    //myModal.show(modalToggle)
    // modalToggle.modal('show');
  }
  render() {
    return (
      <div>
        {/* -------------------------------------------- side modal all ------------------------------------------------- */}
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className={'h-100 modal-dialog modal-dialog-scrollable headermodal ' + this.state.x} >
            <div className="modal-content">
              <div className="modal-header text-white mhcolor">
                <h5 className="modal-title " id="staticBackdropLabel"><FontAwesomeIcon icon={faUser} /> Hello, Sign in</h5>
                <button onClick={this.closemodal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ps-0 pe-0 pt-2 pb-2">
                <h5 className="fw-bolder ps-4">Trending</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Echo &amp; Alexa </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">New Release</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Movies and Shakers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Disabled</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Digital Content And Devices</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link" href="robiul">Echo &amp; Alexa <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Fire TV <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Kindle Ebooks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Audible Audiobooks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Audible Prime Video</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Audible Prime Music</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Shop By Department</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Mobile &amp; Computer <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">TV,Appliances,Electronics <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Men's Fashion</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Women's Fashion</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Programs &amp; Features</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Gift Cards &amp; Mobile Rechanges <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Fligh Ticket</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Amazon Assistance</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Full Store Directory</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Help &amp; Settings</h5>
                <ul className="nav flex-column pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Your Account</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Customer Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#robiul">Signin</a>
                  </li>
                </ul>
              </div>
              <div className="">

              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------ _countrydd modal ------------------------------------------------------------- */}
        <div className="modal  r_ht_countrydd" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <p><Flag code={'bd'} height="16" /> You are shopping on Amazon.in.</p>
                <a href="#robiul" className="btn btn-link">Change country/region</a>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------- signin_model -------------------------------------------------------------- */}

        <div className="modal arht_signin_model" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModal3Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-center r_signin_model">
                <button className="btn btn-warning w-50">Sign in</button>
                <p>New customer? <a href="#robiul" className="btn btn-link">Start here.</a></p>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <h5>Your List</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Create a Wish list</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Find a Wish list</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="robiul">Wish from anywebsite</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Baby Wishlist</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Discover your style</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Explore Showroom</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5>Your Account</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">YourAccount</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Orders</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Wish List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Recommendations</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Prime Membership</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Prime Video</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Subscribe &amp; Save Items</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Membership &amp; Subscription </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Amazon Business Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Your Seller Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#robiul">Manage Your Content and Devices</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------- header -------------------------------------------------------------- */}
        <header>
          {/* ----------------------------------------------------------------------- header top -------------------------------------------------------------- */}

          <div className={'r_header_top p-1 w-100 ' + this.state.y}>
            <button className="me-1 btn h-100" style={{ 'width': '10%' }}>
              <img className="img-fluid" src={logo} alt="logo" />
            </button>
            <button className="text-start row m-0 lh-1 text-white fs-6 me-1 btn h-100" style={{ 'width': '10%' }}>
              <div className="col-2 p-0"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
              <div className="col-10 p-0 fw-bolder">
                Deliver to Robiul
                <span className="fw-bold d-block"><span className="r_city">Neemuch</span><span className="r_pincode">458441</span></span>
              </div>
            </button>
            <form className={'bg-white hform w-50 d-inline-block ' + this.state.z}>
              <div className="row m-0">
                <div className="col-1 p-0 border-end">
                  <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li><a className="dropdown-item" href="#robiul">Dropdown link</a></li>
                      <li><a className="dropdown-item" href="#robiul">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-10 p-0">
                  <input onBlur={this.formHandle} onFocus={this.formHandle} className="h-100 form-control rounded-0" />
                </div>
                <div className="col-1 p-0">
                  <button className="w-100 btn btn-warning rounded-0" type="submit" ><FontAwesomeIcon icon={faSearch} /> </button>
                </div>
              </div>
            </form>
            <button onMouseOver={this.handleCountryDD} className="btn h-100 p-0" style={{ 'width': '4%' }} data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <Flag className="d-inline-block me-1" code={'bd'} height="16" /><FontAwesomeIcon className="text-white d-inline-block" icon={faChevronDown} />
            </button>
            <button className="text-start fs-6 text-white btn h-100" style={{ 'width': '8%' }} data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <div>Hello, Sign in</div>
              <span className="fw-bolder">Account &amp; Lists</span>
            </button>
            <button className="text-start text-white btn h-100" style={{ 'width': '8%' }}>
              <div>Returns</div>
              <span className="fw-bolder">&amp; Orders</span>
            </button>
            <button className="text-white btn h-100" style={{ 'width': '8%' }}>
              <FontAwesomeIcon className="fs-3" icon={faCartPlus} /> Cart
            </button>
          </div>
          {/* ----------------------------------------------------------------------- header bottom-------------------------------------------------------------- */}
          <div className="r_header_bottom">
            <ul className="nav mt-1 ms-3 float-start">
              <li className="nav-item">
                <a onClick={this.handleModal} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="nav-link" href="#robiul"><FontAwesomeIcon icon={faBars} /> All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Best Seller</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Mobile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Electronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">New Release</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Customer Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Amazon Pay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Computers</a>
              </li>
            </ul>
            <a href="#robiul" className="float-end">
              <img src={headerbanner} alt="header banner" />
            </a>
            <ul className="nav mt-1 float-start d-none">
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Home &amp; Kitchen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Today's Deal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Toy's &amp; Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#robiul">Coupons</a>
              </li>
            </ul>
          </div>
        </header>
        {/* ----------------------------------------------------------------------- main section-------------------------------------------------------------- */}
        <div className="r_main position-relative">
          {/* ----------------------------------------------------------------------- main 1 -------------------------------------------------------------- */}

          <div className="r_main1 r_main_top">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={banner1} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner2} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/3.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner3} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner4} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner2} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner3} className="d-block" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* -----------------------------------------------------------------------  -------------------------------------------------------------- */}
          <div className="ml-1 position-absolute r_main_bottom">
            {/* --------------------------------------------------------------------r_main_bottom_1 ----------------------------------------------------------------- */}
            <div className="r_main_bottom_1 row m-0 mb-3">
              <div className="col">A</div>
              <div className="col">B</div>
              <div className="col">C</div>
              <div className="col">D</div>

            </div>
            {/* ----------------------------------------------------------------------- r_main_bottom_2  -------------------------------------------------------------- */}

            <div className="r_main_bottom_2 row m-0 mb-3">
              <div className="col-6">A</div>
              <div className="col-3">B</div>
              <div className="col-3">C</div>
            </div>
            {/* -----------------------------------------------------------------------r_main_bottom_3 -------------------------------------------------------------- */}

            <div className="r_main_bottom_3 p-3">
              <div className="">
                <h3 className="float-start">Today's Deals</h3><button type="button" className="float-start btn btn-link">see all deals</button>
              </div>
              <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <div className="imgCont row">
                      <div className="col">1</div>
                      <div className="col">2</div>
                      <div className="col">3</div>
                      <div className="col">4</div>
                      <div className="col">5</div>
                      <div className="col">6</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">7</div>
                      <div className="col">8</div>
                      <div className="col">9</div>
                      <div className="col">10</div>
                      <div className="col">11</div>
                      <div className="col">12</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">13</div>
                      <div className="col">14</div>
                      <div className="col">15</div>
                      <div className="col">16</div>
                      <div className="col">17</div>
                      <div className="col">18</div>
                    </div>
                  </div>
                </div>
                <button className="r_cc carousel-control-prev rounded-end" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="r_cc carousel-control-next rounded-start" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

        </div>
        <footer></footer>
      </div>
    )
  }
}


App.propTypes = {}
export default App
