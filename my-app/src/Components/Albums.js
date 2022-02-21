import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from './Details.js'
import './Albums.css';


const API_KEY = "d732731be2f5f0ec4b10e5a3607d7090";

class Albums extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        albums: [],
        title: ''
      };
    }
    
    componentDidMount() {
      const url = "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=the%20weeknd&format=json&api_key=" + API_KEY;
  
      fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          albums: response?.topalbums?.album
        })
      })
      .catch(err => { console.log(err); });
    }
    render() {
      return (
      <div class="row">
        <h1 style={{textAlign: "center", color: 'white'}}>The Weeknd</h1>
        {this.state.albums.map((album, index) => 
            ( <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-4" key={album.id ?? index}>
                <div id="card" class="card" style={{width: "18rem"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Afks9B0MdCOt-r-z-XYym6ShiD4mxvtM4A&usqp=CAU" class="card-img-top" alt="img"></img>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "white"}}>{album.name}</h5>
                    <Link to={album.name}  state={{ from: album.name }} className="btn btn-primary">Details
                    </Link>
                  </div>
                </div>
              </div>))}
        </div>
      );
    }
  
  }
  export default Albums