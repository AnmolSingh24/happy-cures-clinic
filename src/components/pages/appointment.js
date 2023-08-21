import React from 'react'
import './appointment.css'

const Appointment = () => {

    return (
        <div className='form'>
            <h1>Book an Appointment</h1>
            <form className='form-container'>
                <input type='text' placeholder='Fullname' /><br />
                <input type='email' placeholder='Email' /><br />
                <input type='tel' placeholder='Phone Number' /><br />
                <input type='text' placeholder='Date' /><br />
                <div className='address-container'>
                    <div className='address'>
                        <input type='text' placeholder='Address' />
                        <div>
                            <input type='text' placeholder='City' />
                        </div>
                    </div>
                    <div className='address'>
                        <input type='text' placeholder='State' />
                        <div>
                            <input type='text' placeholder='Pincode' />
                        </div>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Appointment;