import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Details from './Details.js'
import Cards from './Cards.js'
import NavBar from './Navbar.js';
import Albums from './Albums.js';
import './FrontPage.css';


class FrontPage extends React.Component {
    render() {
      return (
        <div className="frontPage" id="frontpage" style={{paddingTop: "0%"}}>
          <div className="navbar">
            <NavBar />
          </div>
          <div className="cards">
            <Cards />
          </div>
          <div className="Games">
            <Albums />
          </div>
        </div>
      );
    }
}
export default FrontPage