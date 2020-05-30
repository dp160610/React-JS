import React,{Component} from 'react';

import './App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0=9]+)*$/);

const formValid = ({formErrors,...rest})=>{
  let valid=true;

  Object.values(formErrors).forEach(val => {val.length>0 && (valid=false);
  }); 

  Object.values(rest).forEach(val => {val=== null && (valid=false);
  }); 

  return valid;
}
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      formErrors:{
        firstName:"",
        lastName:"",
        email:"",
        password:""
      }
    }
  }
  handleSubmit=e=>{
    e.preventDefault();

    if(formValid(this.state)){
      console.log(`
      firstName:${this.state.firstName}
      lastName:${this.state.lastName}
      email:${this.state.email}
      password:${this.state.password}
      `);
    }
    else{
      console.error('Form Invalid');
    }
  }

  handleChange=e=>{
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    console.log('Name: ', name);
    console.log('Value: ', value);

  switch(name){
    case 'firstName':
      formErrors.firstName = value.length< 3  ?'Minimun 3 characters required' : '';
      break;
      case 'lastName':
        formErrors.lastName = value.length< 3  ?'Minimun 3 characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)  ?'' : 'Invalid Email Address';
        break;
      case 'password':
        formErrors.password = value.length< 6  ?'Minimun 6 characters required' : '';
        break;
        default:
          break;
  }
  this.setState({
    formErrors, [name]:value}, () => console.log(this.state));
  }

  render(){
    const {formErrors} = this.state;
    return (
      
      <div className="wrapper">
       <div className="form-wrapper">
         <h1>Create Account</h1>
         <form  onSubmit={this.handleSubmit}noValidate>
           <div className="firstName">
             <label htmlFor='firstName'>First Name</label>
             <input
             className={formErrors.firstName.length > 0 ? "error" : null} 
             type="text" placeholder="First Name" name="firstName" noValidate onChange={this.handleChange} />
             {formErrors.firstName.length > 0 && (
               <span className="errorMessage">{formErrors.firstName}</span>
             )}
           </div>
           <div className="lastName">
             <label htmlFor='lastName'>Last Name</label>
             <input
             className={formErrors.lastName.length > 0 ? "error" : null}
             type="text" placeholder="Last Name" name="lastName" noValidate onChange={this.handleChange} />
             {formErrors.lastName.length > 0 && (
               <span className="errorMessage">{formErrors.lastName}</span>
             )}
           </div>
           <div className="email">
             <label htmlFor='email'>Email</label>
             <input
             className={formErrors.email.length > 0 ? "error" : null}
             type="email" placeholder="Email" name="email" noValidate onChange={this.handleChange} />
             {formErrors.email.length > 0 && (
               <span className="errorMessage">{formErrors.email}</span>
             )}
           </div>
           <div className="password">
             <label htmlFor='password'>password</label>
             <input type="password" 
             className={formErrors.password.length > 0 ? "error" : null}
             placeholder="Password" name="password" noValidate onChange={this.handleChange} />
             {formErrors.password.length > 0 && (
               <span className="errorMessage">{formErrors.password}</span>
             )}
           </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have an Account</small>
          </div>
         </form>
       </div>
      </div>
    );
  }
  }
  

export default App;
