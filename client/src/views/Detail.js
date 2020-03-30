import React, { useEffect, useState } from 'react'
import { Link, navigate } from  '@reach/router'
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const [poll, setPolls] = useState({});
    
    const[loaded, setLoaded] = useState(true);
    useEffect(() => { // render the page right away
        axios.get("http://localhost:8000/api/polls/" + props.id) 
            .then(res => setPolls({
                ...res.data
            }))
    }, [])
   
    // const createLikes = e => {
    //     e.preventDefault();
    //     axios.put('http://localhost:8000/api/movie/' + movie._id, {likes: movie.likes + 1});
    //     setLoaded(false);
    // }
  

    return (
        <div>
            <Link to={'/'}>back to home</Link>
            <DeleteButton pollsId={poll._id} question={poll.question} successCallback={() => navigate("/")}/>
            <h3>{poll.question}</h3>
            <p>{poll.optionOne} {poll.voteOne} votes</p>
            <p>{poll.optionTwo} {poll.voteTwo} votes</p>
            <p>{poll.optionThree} {poll.voteThree} votes</p>
            <p>{poll.optionFour} {poll.voteFour} votes</p>
            
        </div>
    )
}