import React from 'react';
import ReactPlayer from 'react-player';

function IntroVideo(props) {    
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                url='https://vimeo.com/243556536'
                className='react-player'
                playing
                width='100%'
                height='100%'
                controls muted
                config={{
                    youtube: { playerVars: { showinfo: 1 } },
                    facebook: { appId: '12345' }
                }}
            />
      </div>
    )
};

export default IntroVideo;