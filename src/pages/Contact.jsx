import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
          <h1>Contact Us</h1>
          <form>
            <label>
              <h3>Let us know what you think about our page!</h3>
              <textarea cols="30" rows="8" className='contact__textarea'/>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };


export default Contact