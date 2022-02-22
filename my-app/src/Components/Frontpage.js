import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './Navbar.js';
import Albums from './Albums.js';
import './FrontPage.css';


class FrontPage extends React.Component {
    render() {
      return (
        <div className="frontPage" id="frontpage">
          <div className="navbar" id="navbar">
            <NavBar />
          </div>
          <div className="Games">
            <Albums />
          </div>
        </div>
      );
    }
}
export default FrontPage