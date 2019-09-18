import React, { useState } from 'react'

function Form() {

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        role: ''
    })

    function inputHandler(e) {
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    return (
        <form>
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