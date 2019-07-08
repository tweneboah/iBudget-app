import React, { useState} from 'react'
import { connect } from 'react-redux';
import  {createUsers} from '../../redux/actions/userRegisterAction';


 const UsersRegistration = (props) => {
  //STATE
   const [ formData, setFormData ] = useState({
       name: '',
       email: '',
       password: ''
   })

   console.log('My props', props)
   //Create on change methods
   //This method update the state values
   const onChange = (e) => {
     setFormData({...formData, [e.target.name]: e.target.value})
   }

  //Onsubmit
  const onFormSubmit = e => {
    e.preventDefault();
   console.log('formData', formData.name)
    props.createUsers(formData)
  };


  return (
   <div>
     <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {onFormSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name"   onChange = {onChange}/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" onChange = {e => onChange(e)} />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange = {onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"

            onChange = {onChange}
          />
        </div>
        <input type="submit" className="btn btn-danger" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
   </div>
  )
 }

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

 export default connect(mapStateToProps,  {createUsers}) (UsersRegistration)
