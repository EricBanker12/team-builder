import React, { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Member from './components/Member'

function App() {

    const [teamMembers, setTeamMembers] = useState([])
    const [memberToEdit, setMemberToEdit] = useState()

    function addTeamMember(member) {
        if (memberToEdit) {
            const members = [...teamMembers]
            members[members.indexOf(memberToEdit)] = member
            setTeamMembers(members)
            setMemberToEdit() // remove memberToEdit
        }
        else setTeamMembers([...teamMembers, member])
    }

    return (
        <div className="App">
            <Form addTeamMember={addTeamMember} editTeamMember={setMemberToEdit} memberToEdit={memberToEdit} />
            <div>
                {teamMembers.map((e,i)=><Member key={i} data={e} editTeamMember={setMemberToEdit} />)}
            </div>
        </div>
    )
}

export default App
