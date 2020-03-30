import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import './PollListStyles.css'

export default props => {
    const [polls, setPoll] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/polls')
            .then(res => setPoll(res.data.sort((a,b) => (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0))));
    }, [polls])
    const removeFromDom = pollID => {
        setPoll(polls.filter(allPoll => allPoll._id !== pollID))
    }
    
    
    
    return (
        <div>
            <div id="First">
                <h3>Top 3 Polls: </h3>
                {polls.slice(0, 3).map((Polls, index) => {
                    return(<p key={index}>
                        <>{Polls.question} </>
                        |
                        <Link to={"/polls/" + Polls._id + "/vote"}>vote</Link>
                        |
                        <Link to={"/polls/" + Polls._id + "/edit"} poll={polls.question}>
                            edit poll
                        </Link> 
                        </p>
                )})}
            </div>
            <div id="Second">
            <h3>All Polls</h3>
            {polls.map((Polls, idx) => {
                return (
                
                    <p key={idx}>
                        <>{Polls.question} </>
                        
                        |
                        <Link to={"/polls/" + Polls._id + "/vote"}>vote</Link>
                        |
                        <Link to={"/polls/" + Polls._id + "/edit"} poll={polls.question}>
                            edit poll
                        </Link> 

                    </p>
                )
            })}
            </div>
        </div>
    )
}