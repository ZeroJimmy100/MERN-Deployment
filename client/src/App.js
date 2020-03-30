import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import AddPoll from './views/AddPoll';
import Detail from './views/Detail';
import Update from './views/Update';
import CastVote from './views/CastVote';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <AddPoll path="polls/new"/>
        <Detail path="polls/:id"/>
        <Update path="polls/:id/edit"/>
        <CastVote path="polls/:id/vote"/>
      </Router>
      
    </div>
  );
}

export default App;
