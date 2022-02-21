import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    
    render() {
        return (
            <nav class="navbar navbar-light justify-content-between" style={{width: "100%" }}>
            <a class="navbar-brand" style={{color: "white"}}>Welcome</a>
            <form onSubmit={this.handleSubmit}>
            <label>
                <input class="form-control mr-sm-2" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <Link to="/search"  state={{ from: this.state.value }} className="btn btn-primary">Search
            </Link>
            </form>
        </nav>

        )
    }
}
export default NavBar;
