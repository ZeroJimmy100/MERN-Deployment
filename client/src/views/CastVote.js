import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from  '@reach/router'

export default props => {
    const [poll, setPolls] = useState({});
    
    const[loaded, setLoaded] = useState(true);
    useEffect(() => { // render the page right away
        axios.get("http://localhost:8000/api/polls/" + props.id) 
            .then(res => setPolls({
                ...res.data
            }))
    }, [])

    const getVoteOne = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/polls/' + poll._id, {voteOne: poll.voteOne + 1});
        setLoaded(false);
        navigate("/polls/" + poll._id);
    }
    const getVoteTwo = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/polls/' + poll._id, {voteTwo: poll.voteTwo + 1});
        setLoaded(false);
        navigate("/polls/" + poll._id);
    }
    const getVoteThree = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/polls/' + poll._id, {voteThree: poll.voteThree + 1});
        setLoaded(false);
        navigate("/polls/" + poll._id);
    }
    const getVoteFour = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/polls/' + poll._id, {voteFour: poll.voteFour + 1});
        setLoaded(false);
        navigate("/polls/" + poll._id);
    }
   
    return(
        <div>
            <h1>Voting Dojo</h1>
            <h3>{poll.question}</h3>
            <h4>{poll.optionOne} <button onClick={getVoteOne}>Vote {poll.optionOne}</button></h4>
            <h4>{poll.optionTwo} <button onClick={getVoteTwo}>Vote {poll.optionTwo}</button></h4>
            <h4>{poll.optionThree} <button onClick={getVoteThree}>{poll.optionThree}</button></h4>
            <h4>{poll.optionFour} <button onClick={getVoteFour}>{poll.optionFour}</button></h4>
        </div>
    )
}