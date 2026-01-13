import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
    
        <h1 className='primary-heading'> Have questions in mind ? </h1>
        <h1 className='primary-heading'> Let's help you. </h1>

        <div className='contact-form-container'>
            <form className='contact-form'>
                <input type="text" placeholder='Full Name' required />
                <input type="email" placeholder='Email Address' required />
                <textarea rows="6" placeholder='Your Message' required ></textarea>
                <button type='submit' className='secondary-button contact-page-button'> Submit </button>
            </form>
        </div>
    </div>
  )
}

export default Contact