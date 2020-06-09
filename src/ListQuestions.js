import React, { Component } from 'react';
import Question from "./Question";

class ListQuestions extends Component {
    state = {  }
    render() { 

        let listQuestions = this.props.questions.map(question => {
            return <li>{question.title}</li>
        })
        
        return ( 
            <ul className="questions-list">
                {listQuestions}
            </ul>
         );
    }
}
 
export default ListQuestions;