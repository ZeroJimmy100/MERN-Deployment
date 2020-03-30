import React from 'react'
import axios from 'axios';
import './PollListStyles.css';
export default props => {
    const { pollsId, question, successCallback } = props;
    const deletePoll = e => {
        axios.delete('http://localhost:8000/api/polls/' + pollsId)
            .then(res=>{
                successCallback();
            })
            alert("Poll " + question + " got deleted");
    }
    return (
        <button id="delete" onClick={deletePoll}>
            Delete {question}
        </button>
    )
}