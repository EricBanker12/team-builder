import React, { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Member from './components/Member'

function App() {

    const [teamMembers, setTeamMembers] = useState([])

    function addTeamMember(member) {
        setTeamMembers([...teamMembers, member])
    }

    return (
        <div className="App">
            <Form addTeamMember={addTeamMember} />
            <div>
                {teamMembers.map((e,i)=><Member key={i} data={e} />)}
            </div>
        </div>
    )
}

export default App
