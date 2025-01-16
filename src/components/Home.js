import React from 'react';
import YouTube from 'react-youtube';
import Navbar from "./Navbar";
import PorscheHome from "./PorscheHome";

export default function Home() {
    return(
        <div>
            <Navbar />
           
            <PorscheHome />
        </div>
    )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Home
