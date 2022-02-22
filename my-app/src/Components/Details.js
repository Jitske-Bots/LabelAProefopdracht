import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useLocation } from 'react-router-dom'
import NavBar from './Navbar';

const API_KEY = "d732731be2f5f0ec4b10e5a3607d7090";

function Details() {
    const location = useLocation();
    const {from} = location.state;
    
    return <FetchDetails value={from}></FetchDetails>

}
export default Details;

class FetchDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.value);
        this.state = {
            tracks: []
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
            tracks: response?.album.tracks.track
          })
        })
        .catch(err => { console.log(err); });

    }
    render() {
        console.log(this.state.tracks)
        return(
            <div id="details">
                 <style>{'body { background: rgb(25,24,46); background: linear-gradient(99deg, rgba(25,24,46,1) 0%, rgba(47,47,140,1) 39%, rgba(8,124,182,1) 100%); }'}</style>
                <NavBar />
                <h1 style={{color: "white", margin: 'auto', textAlign: 'center'}}>{this.props.value}</h1>
                <h4 style={{color: "white", textAlign: 'center'}}>Songs: </h4>
                <ul class="list-group" >
                {this.state.tracks.map((track, i )=> (
                    <li style={{backgroundColor: 'rgb(0,0,0,0.7)', margin: 'auto', 
                    width: '400px', color: 'white'}} class="list-group-item" key={track.name}>{track.name}<br/>Duration: {track.duration} sec</li>
                ))}
                </ul>
            </div>
        )
    }
}