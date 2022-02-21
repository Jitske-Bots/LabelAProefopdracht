import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useLocation } from 'react-router-dom'
import NavBar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from './Details';
import index from '../index'


const API_KEY = "d732731be2f5f0ec4b10e5a3607d7090";

function Search() {
    const location = useLocation();
    const {from} = location.state;
    
    return <FetchSearch value={from}></FetchSearch>

}
export default Search

class FetchSearch extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.value);
        this.state = {
            info: []
        }
    }
    componentDidMount() {
        const chosen_album = this.props.value;
        const url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d732731be2f5f0ec4b10e5a3607d7090&artist=the%20weeknd&album="+ chosen_album + "&format=json"
        
        fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.setState({
            info: response?.album
          })
        })
        .catch(err => { console.log(err); });

    }
    render() {
        if (typeof this.state.info == 'undefined') {
            return (
                <div>
                    <NavBar />
                    <style>{'body { background: rgb(25,24,46); background: linear-gradient(99deg, rgba(25,24,46,1) 0%, rgba(47,47,140,1) 39%, rgba(8,124,182,1) 100%); }'}</style>
                    <h2 style={{color: "white"}}>No results</h2>
                </div>
            )
        }
        else {
            console.log(this.state.info.name);
            const title = this.state.info;
            return(
                <div>
                    <NavBar />
                    <style>{'body { background: rgb(25,24,46); background: linear-gradient(99deg, rgba(25,24,46,1) 0%, rgba(47,47,140,1) 39%, rgba(8,124,182,1) 100%); }'}</style>
                    <h1 style={{color: "white", margin: "auto", textAlign: 'center'}}>{this.state.info.name}</h1>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div id="card" class="card" style={{width: "18rem"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Afks9B0MdCOt-r-z-XYym6ShiD4mxvtM4A&usqp=CAU" class="card-img-top" alt="img"></img>
                        <div class="card-body">
                            <h5 class="card-title" style={{color: "white"}}>{this.state.info.name}</h5>
                            <Link to={"/"+{title}}  state={{ from: this.state.info.name }} className="btn btn-primary">Details
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
            )

        }


    }
}
