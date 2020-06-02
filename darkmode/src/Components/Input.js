import React from 'react'
const initialState = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: '',

};

class Input extends React.Component {
    
        state = initialState;
        handleChange = event => {
            const isCheckbox = event.target.type === "checkbox";
            this.setState({
                [event.target.name]: isCheckbox
                    ? event.target.checked : event.target.value
            });
        };
        
        validate = () => {
            let nameError = '';
            let emailError = '';
            let passwordError = '';
            if(!this.state.name){
                nameError='Name cant be blank';
            }
            if(!this.state.password){
                passwordError="Password cant be blank";
            }
        if(!this.state.email.includes('@') ) {
            emailError = "Email is not valid";
        }                                    
            if (emailError || nameError || passwordError) {
                this.setState({ emailError, nameError, passwordError});
                return false;
            }
            return true;
        };
        
        handleSubmit = event => {
            event.preventDefault();
            const isValid = this.validate();
            if (isValid) {
                console.log(this.state);
                //clear Form
                this.setState(initialState);
            }
        
    };
    resetName(){
        this.setState({
            name : '',
        });
    }
        
       
        render(){
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <div className="form-control">
                            <input name="name" style={nameStyle} type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                            <div style={{ color: 'red' }}>
                                <small style={smallStyle}>{this.state.nameError}</small>
                            </div>
                        </div>
                        <div className="form-control">
                            <input name="email" style={nameStyle1} type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email Address" />
                            <div style={{ color: 'red' }}>
                               <small style={smallStyle}>{this.state.emailError}</small> 
                            </div>
                        </div>
                        <div>
                            <input name="password" style={nameStyle1} type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                            <div style={{ color: 'red' }}>
                            <small style={smallStyle}>{this.state.passwordError}</small>
                            </div>
                        </div>

                        <div>
                            <div className="button">
                                <button style={buttonStyle} onclick={this.resetName}>Clear</button>
                                <button type='submit' style={buttonStyle} onClick={this.handleChange}>Submit</button>
                            </div>

                        </div>
                    </div>
                </form>
            )
            }}
        const nameStyle = {
            height: '30px',
            width: '1250px',
            marginLeft: '125px',
            borderRadius: '10px',
            padding: '8px',
            fontSize: '15px'
        }
        const nameStyle1 = {
            height: '30px',
            width: '1250px',
            marginLeft: '125px',
            marginTop: '30px',
            borderRadius: '10px',
            padding: '8px',
            fontSize: '15px'
        }
        const buttonStyle = {
            height: '40px',
            width: '80px',
            backgroundColor: 'purple',
            borderRadius: '10px',
            marginRight: '130px',
            marginTop: '15px',
            color: 'white'

        }
        const smallStyle={
            fontSize:'15px',
            marginLeft:'1280px'
        }

        export default Input;