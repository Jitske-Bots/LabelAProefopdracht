import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Albums from './Components/Albums';
import Details from './Components/Details';
import FrontPage from './Components/Frontpage';
import Search from './Components/Search';

const API_KEY = "d732731be2f5f0ec4b10e5a3607d7090";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/:name"  element={<Details />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>

    )
  }
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
