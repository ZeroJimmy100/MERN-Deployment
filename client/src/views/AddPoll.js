import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PollForm from '../components/PollForm';
export default props => {
    const [polls, setPoll] = useState({})
    const [errors, setErrors] = useState([])
    const createPoll = poll => {
        axios.post('http://localhost:8000/api/polls/new', poll)
            .then(res=>{
                console.log(res.data)
            })  
            .catch(err => {
                let errorResponse = err.response.data.errors;
                let errorArr = [];
                for( const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return(
        <div>
            <h1>Voting Dojo</h1>
            {errors.map((err, idx) => {
                return <p key={idx}>{err}</p>
            })}
            <PollForm onSubmitProp={createPoll} initialQuestion="" initialOne="" initialTwo="" initialThree="" initialFour="" />
        </div>
    )
}