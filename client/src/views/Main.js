import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import PollList from '../components/PollList';

export default () => {
    const [ polls, setPoll ] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/polls')
            .then(res => {
                setPoll(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, []);
    const removeFromDom = pollId => {
        setPoll(polls.filter(auth => auth._id !== pollId));
    }



    return(
        <div>
            <h1>Voting Dojo</h1>
            <Link to={"/polls/new"}>Add a new Poll</Link>
            {loaded && <PollList polls={polls} removeFromDom={removeFromDom}/>}
        </div>
    )
}