import React from 'react'
import useForm from './useForm';
import validate from './validateInfo'
import './Form.css'

function FormSignup({submitForm,submitValue}) {
    const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate);
    submitValue(values);
    return(
        <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! by filling up this info below</h1>
        <div className="form-inputs">
        <label htmlFor="username" className="form-label">Username</label>
        <input id="username" type="text" name="username" className="form-input" value={values.username} onChange={handleChange} placeholder="Enter your username"></input>
        {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" type="email" name="email" className="form-input" value={values.email} onChange={handleChange} placeholder="Enter your email"></input>
        {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
        <label htmlFor="password" className="form-label">Password</label>
        <input id="password" type="password" name="password" className="form-input" value={values.password} onChange={handleChange} placeholder="Enter your password"></input>
        {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
        <label htmlFor="password2" className="form-label">Confirm Password</label>
        <input id="password2" type="password" name="password2" className="form-input" value={values.password2} onChange={handleChange} placeholder="Enter your password2"></input>
        {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" >Sign Up</button>
        <span className="form-input-login">Already have an account?Login<a href="#">here</a></span>
        </form>
        </div>
    )
}

export default FormSignup
