import TextField from '@mui/material/TextField';
import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleInputChange = (event: any) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        const { email, password } = this.state;

        console.log(`Email: ${email}, Password: ${password}`);
    }

    render() {
        const { email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                
                    <TextField value={email}
                        onChange={this.handleInputChange} id="outlined-basic" label="email: " variant="outlined" />

                    <TextField value={password}
                        onChange={this.handleInputChange}  id="outlined-basic" label="password: " variant="outlined" />
                
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Login;