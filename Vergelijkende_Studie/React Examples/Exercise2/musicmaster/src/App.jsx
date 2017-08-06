import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        }
    }

    search() {
        const BASE_URL = "http://ws.audioscrobbler.com/2.0/?";
        const API_KEY = "c2a441503eb8196ba79fbdf448709693";
        const ARTIST_TRACK_METHOD = "user.getartisttracks";
        // const ARTIST_INFO_METHOD = "user.getinfo";
        const FETCH_TRACKS = `${BASE_URL}method=${ARTIST_TRACK_METHOD}&user=rj&artist=${this.state.query}&api_key=${API_KEY}&format=json`;
        // const FETCH_INFO = BASE_URL + "method=" + ARTIST_INFO_METHOD + "&user=rj&api_key=" + API_KEY + "&format=json";

        fetch(FETCH_TRACKS, {
            method: "GET"
        })
        .then(response => response.json())
        .then(json => {
            const artist = json.artisttracks.track[0];
            console.log(artist);
            this.setState({artist});
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type ="text"
                            placeholder="search for an artist..."
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if(event.key === "Enter") {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>    
                </FormGroup>    
                <Profile 
                    artist={this.state.artist}
                />
            </div>
        )
    }
}

export default App;