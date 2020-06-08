import React, { Component } from 'react';
import "./Player.css";


class Player extends Component {
    state = { 

     }
    render() { 
        return (
            <div className="player">                 
                Bonjour, je m'appelle <strong className="player__name">{this.props.pseudo}</strong> et j'ai <span className="player__age">{this.props.age}</span>
            </div>
        );
    }
}
 
export default Player;