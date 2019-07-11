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

 //=======FOR CHANGE METHODS======
 const onChangeName = (e) => {
    setFormData({...formData, name: e.target.value})
 }

 const onChangeEmail = (e) => {
    setFormData({...formData, email: e.target.value})
 }

 const onChangePassword = (e) => {
     setFormData({...formData, password: e.target.value})
 }
//=================END ON CHANGE METHODS======

  //=========== SUBMIT=======

  const onFormSubmit = e => {
    e.preventDefault();
//Calling the action creator
    props.createUsers(formData)
  };


  return (
   <div>
     <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {onFormSubmit}>
        <div className="form-group">
          <input
           type="text"
            placeholder="Name"
            name="name" 
            onChange = {onChangeName}/>
        </div>

        <div className="form-group">
          <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          onChange = {onChangeEmail} />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>

        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange = {onChangePassword}
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
