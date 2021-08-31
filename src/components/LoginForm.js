import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    CircularProgress,
    Text,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


import { strateegiaLogin } from '../api/StrateegiaLogin'
import { ErrorMessage } from '../components/ErrorMessage'

export function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        // alert(`Email: ${email} & Password: ${password}`);
        setIsLoading(true);
        try {
            await strateegiaLogin({ email, password });
            setIsLoggedIn(true);
            setIsLoading(false);
            setShowPassword(false);
        } catch (error) {
            setError('Invalid username or password');
            setIsLoading(false);
            setEmail('');
            setPassword('');
            setShowPassword(false);
        }
    };

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <ChakraProvider>
            {isLoggedIn ? (
                <Box textAlign="center">
                    <Text>{email} logged in!</Text>
                    <Button
                        width="full"
                        mt={4}
                        onClick={() => setIsLoggedIn(false)}
                    >
                        Sign out
                    </Button>
                </Box>
            ) : (
                <>
                    <Box flexShrink="0" my={4} textAlign="left" paddingLeft="10">
                        <form onSubmit={handleSubmit}>
                            {error && <ErrorMessage message={error} />}
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                    placeholder="email@example.com"
                                    size="lg"
                                    onChange={event => setEmail(event.currentTarget.value)} />
                            </FormControl>
                            <FormControl isRequired mt={6}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup size="lg">
                                    <Input type={showPassword ? 'text' : 'password'}
                                        placeholder="*******"
                                        onChange={event => setPassword(event.currentTarget.value)} />
                                    <InputRightElement>
                                        <Button onClick={handlePasswordVisibility} marginRight="0.4rem" h="2rem">
                                            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button width="full" mt={4} type="submit">
                                {isLoading ? (
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