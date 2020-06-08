import React, { Component } from 'react';

class Question extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question">
            {this.props.title} 
            </div>
         );
    }
}
 
export default Question;