import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    render() {
        console.log(this.props);
        let artist = { artist: { '#text': ""}, album: { '#text': "" }, image: []};
        artist = this.props.artist !== null ? this.props.artist : artist;

        return (
            <div className="profile">
                <div>{artist.artist["#text"]}</div>
                <div>{artist.album["#text"]}</div>
                <div>Gallery</div>
                <div>
                    {artist.image.map((image, k) => {
                        let artistImage = image['#text'];
                        console.log(artistImage);
                        return (
                            <div
                                key={k}
                                className="gallery"
                            >
                                <img 
                                    src={artistImage}
                                    className="gallery-img"
                                    alt="Gallery Image {k}"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Profile;