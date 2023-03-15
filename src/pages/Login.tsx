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
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Login;