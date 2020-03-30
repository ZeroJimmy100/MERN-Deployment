import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {

    const { initialQuestion, initialOne, initialTwo, initialThree, initialFour, onSubmitProp} = props;
    const [ question, setQuestion ] = useState(initialQuestion, {errorQuestion: "", errorValid:""}) ;
    const [ optionOne, setOne ] = useState(initialOne, {errorOne: ""});
    const [ optionTwo, setTwo ] = useState(initialTwo, {errorTwo: ""});
    const [ optionThree, setThree ] = useState(initialThree);
    const [ optionFour, setFour ] = useState(initialFour);


    // const GiveRates = (e) => {
    //     e.preventDefault();
    //     const newRates = e.target.value
    //     console.log(newRates, "should be the input");
    //     setVotes(newRates);
    //     console.log(votes);
    // }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(question.unique != true){
            setQuestion({errorValid: "Question must be unique"});
        }
        if(question.length <= 10){
            setQuestion({errorQuestion: "Question must be at least 10 characters or more"})
        }
        if(question.length == 0){
            setQuestion({errorQuestion: "Question is required"})
        }
        if(optionOne.length == 0){
            setOne({errorOne: "Option 1 is required"})
        }
        if(optionTwo.length == 0){
            setTwo({errorTwo: "Option 2 is required"})
        }
        if(question.length >= 3 && optionOne.length > 0 && optionTwo.length > 0 && question.unique == true){
            onSubmitProp({
                question: question,
                optionOne: optionOne,
                optionTwo: optionTwo,
                optionThree: optionThree,
                optionFour: optionFour,
               
            });

            navigate("/");
        
        }
    }


    return(
        <div>
            <Link to={'/'}>back to home</Link>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Question:</label><br/>
                    <input
                        type="text"
                        name="question"
                        value={question}
                        onChange={(e) => {setQuestion(e.target.value)}}/>
                </p>
                <p>{question.errorQuestion}</p>
                <p>{question.errorValid}</p>
                <p>
                    <label>Option 1:</label><br/>
                    <input
                        type="text"
                        name="optionOne"
                        value={optionOne}
                        onChange={(e) => {setOne(e.target.value)}}/>
                </p>
                <p>{optionOne.errorOne}</p>
                <p>
                    <label>Option 2:</label><br/>
                    <input
                        type="text"
                        name="optionTwo"
                        value={optionTwo}
                        onChange={(e) => {setTwo(e.target.value)}}/>
                </p>
                <p>{optionTwo.errorTwo}</p>
                <p>
                    <label>Option 3:</label><br/>
                    <input
                        type="text"
                        name="optionThree"
                        value={optionThree}
                        onChange={(e) => {setThree(e.target.value)}}/>
                </p>
                <p>
                    <label>Option 4:</label><br/>
                    <input
                        type="text"
                        name="optionFour"
                        value={optionFour}
                        onChange={(e) => {setFour(e.target.value)}}/>
                </p>
                
                <input type="submit"/>
            </form>
        </div>
    )
}