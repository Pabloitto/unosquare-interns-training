import React from 'react'
import Input from './input'
import Form from './form'

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {email: '', password: ''};
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmail (email) {
        this.setState({email})
    }
    handleChangePassword (password) {
        this.setState({password})
    }
    handleSubmit () {
        console.log(this.state);
    }
    render () {
        const { email, password } = this.state;
        return (
            <div>
                <Form submitButtonText='Submit' onSubmit={this.handleSubmit}>
                    <Input
                        type='email'
                        label='Email'
                        placeholder='Email'
                        value={email}
                        onChange={this.handleChangeEmail}
                    />
                    <Input
                        type='password'
                        label='Password'
                        placeholder='Password'
                        value={password}
                        onChange={this.handleChangePassword}
                    />
                </Form>
            </div>
        )
    }
}
