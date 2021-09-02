import React from 'react';
import { Redirect } from 'react-router-dom';

import {
    ChakraProvider,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    CircularProgress,
    // Text,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


import { strateegiaLogin } from '../api/StrateegiaLogin';
// import { strateegiaUserMe } from '../api/StrateegiaUserMe'
import UserSession from '../components/UserSession';
import { ErrorMessage } from '../components/ErrorMessage';

export class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            isLoading: false,
            // isLoggedIn: false,
            showPassword: false
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    async handleSubmit(event) {

        const email_var = this.state.email;
        const password_var = this.state.password;

        event.preventDefault();
        this.setState({ isLoading: true });

        try {
            const response = await strateegiaLogin({ email_var, password_var });
            this.setState({ showPassword: false });
            UserSession.setToken(response.access_token);
            this.setState({ isLoading: false });

        } catch (error) {
            this.setState({ error: 'Invalid username or password' });
            this.setState({ isLoading: false });
            this.setState({ email: '' });
            this.setState({ password: '' });
            this.setState({ showPassword: false });

        }
    };

    handlePasswordVisibility = () => this.setState({ showPassword: !this.state.showPassword });

    render() {
        return (

            <ChakraProvider>
                {UserSession.getToken() ? (

                    <Redirect
                        to={{
                            pathname: "/profile",
                        }}
                    />

                ) : (

                    <>
                        <Box flexShrink="0" my={4} textAlign="left" paddingLeft="10">
                            <form onSubmit={this.handleSubmit}>
                                {this.state.error && <ErrorMessage message={this.state.error} />}
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleEmail}
                                        placeholder="email@example.com"
                                        size="lg"
                                        autoComplete="username"
                                    />
                                </FormControl>
                                <FormControl isRequired mt={6}>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup size="lg">
                                        <Input
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handlePassword}
                                            placeholder="*******"
                                            autoComplete="current-password"
                                        />
                                        <InputRightElement>
                                            <Button onClick={this.handlePasswordVisibility} marginRight="0.4rem" h="2rem">
                                                {this.state.showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button width="full" mt={4} type="submit" onClick={this.handleSubmit}>
                                    {this.state.isLoading ? (
                                        <CircularProgress isIndeterminate size="24px" color="teal" />
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                            </form>
                        </Box>
                    </>

                )}
            </ChakraProvider>
        );
    }
};