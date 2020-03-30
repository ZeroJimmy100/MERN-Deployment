import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import PollForm from '../components/PollForm';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const { id } = props;
    const [poll, setPoll] = useState({});
 
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/polls/' + id)
            .then(res => {
                setPoll(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePoll = item => {
        axios.put('http://localhost:8000/api/polls/' + id, item)
            .then(res => {console.log(res)
            })
    }

    
    
   
    return (
        <div>
            
           
            <h4>{poll.question}</h4>
            {loaded && (
                <>
                {/* {errors.map((err, idx) => {
                return <p key={idx}>{err}</p>
                })} */}
                    <PollForm
                        initialQuestion={poll.question}
                        initialOne={poll.optionOne}
                        initialTwo={poll.optionTwo}
                        initialThree={poll.optionThree}
                        initialFour={poll.optionFour}
                        onSubmitProp={updatePoll}
                    />

                </>
            )}
        </div>
    )
}