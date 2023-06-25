import React from 'react';
import icon from '../img/icon.png';

const VoiceNavigation = () => {
    return (
        <div style={{display:'flex'}}>
          <img src={icon} alt="icon"></img>
            <p>4미터 직진 후 우회전</p>
            <div>skip</div>
        </div>

    );
}

export default VoiceNavigation;