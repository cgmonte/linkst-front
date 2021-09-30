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
    InputGroup,
    InputRightElement,
    Text,
    Flex,
    Link
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


import { strateegiaLogin } from '../api/StrateegiaLogin';
import UserSession from './UserSession';
import { ErrorMessage } from './ErrorMessage';

export class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            isLoading: false,
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

    parseJwt(token) {
        var base64Payload = token.split('.')[1];
        var payload = Buffer.from(base64Payload, 'base64');
        return JSON.parse(payload.toString());
    }

    async handleSubmit(event) {

        const email_var = this.state.email;
        const password_var = this.state.password;

        event.preventDefault();
        this.setState({ isLoading: true });

        try {
            const tokens = await strateegiaLogin({ email_var, password_var });
            // const user_data = await strateegiaUserMe({ token: tokens.access_token });
            const refresh_token = this.parseJwt(tokens.refresh_token)

            this.setState({ showPassword: false });

            UserSession.setToken(tokens.access_token);
            UserSession.setId(refresh_token.uid);
            UserSession.setName(refresh_token.sub);

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
                            pathname: "/home",
                        }}
                    />

                ) : (

                    <>
                        <Box flexShrink="0" my={4} textAlign="right" width="20em">

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
                                            size="lg"
                                        />
                                        <InputRightElement>
                                            <Button onClick={this.handlePasswordVisibility} marginRight="0.3em" marginTop="0em" size="md">
                                                {this.state.showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Flex direction="row">
                                    <Text fontSize="sm" color="GrayText" textAlign="left" marginTop="2vw">
                                        Entre com seu login e senha do <br /> <Link> strateegia.digital </Link> para começar.
                                    </Text>
                                    <Box flexGrow="1"/>
                                    <Button width="auto" mt={4} type="submit" onClick={this.handleSubmit} size="md" colorScheme="blue" marginTop="2vw">
                                        {this.state.isLoading ? (
                                            <CircularProgress isIndeterminate size="24px" color="blue" />
                                        ) : (
                                            'Entrar'
                                        )}
                                    </Button>
                                </Flex>
                            </form>
                        </Box>
                    </>

                )}
            </ChakraProvider>
        );
    }
};