import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Cards from './Cards';
import Products from './Products';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "d732731be2f5f0ec4b10e5a3607d7090";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <ShowName value={this.state.value} />
      </form>
    );
  }
}
class ShowName extends React.Component {
  render() {
    return (
      <h3>
       Hello {this.props.value}
      </h3>
    )
  }
}
class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
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
      <div>
        <h2>Albums</h2>
        <ul>
        {this.state.albums.map((album, index) => (<li key={album.id ?? index}>{album.name}</li>))} 
                </ul>
      </div>
      );
    }

}
class FrontPage extends React.Component {
  render() {
    return (
      <div className="frontPage">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="cards">
          <Cards />
        </div>
        <div className="NameForm">
          <NameForm />
        </div>
        <div className="Games">
          <Albums />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <FrontPage/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
