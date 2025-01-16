import React from 'react';
import YouTube from 'react-youtube';
import Navbar from "./Navbar";
import PorscheHome from "./PorscheHome";
import './home.css'

class Home extends React.Component {
    render() {
        const opts = {
            height: '850',
            width: '1519.2',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (
            <div>
                <Navbar />
                <PorscheHome />
                <YouTube videoId="478Ay_lNpT4?si=k4vOfmsH2bM9nnTx" opts={opts} onReady={this._onReady} />
            </div>
    )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Home
