import React, { useState, useEffect } from 'react'

const initFormInput = {
    name: '',
    email: '',
    role: ''
}

function Form(props) {

    const [formInput, setFormInput] = useState(initFormInput)

    useEffect(()=>{
        if (props.memberToEdit) setFormInput(props.memberToEdit)
    },[props])

    function inputHandler(e) {
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    function submitHandler(e) {
        e.preventDefault()
        props.editTeamMember() // remove memberToEdit
        props.addTeamMember(formInput)
        setFormInput(initFormInput)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                Name: 
                <input type='text' name='name' onChange={inputHandler} value={formInput.name} />
            </label>
            <label>
                Email: 
                <input type='email' name='email' onChange={inputHandler} value={formInput.email} />
            </label>
            <label>
                Role: 
                <input type='text' name='role' onChange={inputHandler} value={formInput.role} />
            </label>
            <input type='submit' />
        </form>
    )
}

export default Form