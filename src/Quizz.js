import React, { Component } from 'react';
import "./Quizz.css";
import ListQuestions from "./ListQuestions";


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

        return ( 
            <div className="quizz">
                <h1 className="quizz__title">Fancy Quizz App</h1>
                <div className="quizz__content">
                    <ListQuestions questions={this.state.questions}/>

                </div>
            </div>
         );
    }
}
 
export default Quizz;