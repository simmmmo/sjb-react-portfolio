import React, { useState } from 'react'
import '../assets/styles/Form.css'
import { validateEmail } from '../utils/helpers'

export default function Form() {
  const [contactName, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

    if (inputType === 'email') {
      setEmail(inputValue)
    } else if (inputType === 'message') {
      setMessage(inputValue)
    } else setName(inputValue)
  }

  const blurHandler = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`Please enter your ${e.target.name}.`)
    } else {
      setErrorMessage('')
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid')
      return
    }

    // If successful, we want to clear out the input after registration.
    setName('')
    setMessage('')
    setEmail('')
    alert(`Hello`)
  }

  return (
    <div>
      <form className="form">
        <input
          value={contactName}
          name="name"
          onChange={handleInputChange}
          onBlur={blurHandler}
          type="name"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={blurHandler}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={blurHandler}
          type="message"
          placeholder="Message"
        />
        {errorMessage && (
          <div>
            <span className="error-text">{errorMessage}</span>
          </div>
        )}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}
