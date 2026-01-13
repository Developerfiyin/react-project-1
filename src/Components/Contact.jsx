import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
    
        <h1 className='primary-heading'> Have questions in mind ? </h1>
        <h1 className='primary-heading'> Let Us help you. </h1>

        <div className='contact-form-container'>
                <input type="email" placeholder='Email Address' required/>
                <button type='submit' className='secondary-button'> Submit </button>
        
        </div>
    </div>
  )
};

export default Contact