import React, { Component } from 'react';
import Question from './Question';
import "./Quizz.css";

class Quizz extends Component {
    state = { 
        questions: [
            {title: "Quel film Mizoguchi a-t-il réalisé ?"},
            {title: "Quelle est la capitale de la Roumanie ?"},
            {title: "Windows ou Linux ?"},
            {title: "En quelle année a eu lieu la Révolution Russe ?"},
        ]
     }
    render() { 
        const listQuestions = this.state.questions.map(question => {
            return  <Question title={question.title}/>

        });

        return ( 
            <div className="quizz">
                <h1 className="quizz__title">Fancy Quizz App</h1>
                <div className="quizz__content">
                    {listQuestions}
                </div>
            </div>
         );
    }
}
 
export default Quizz;