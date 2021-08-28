import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react';

import { userLogin } from '../api/StrateegiaLogin'

export function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await userLogin({ email, password });
            setIsLoading(false);
        } catch (error) {
            setError('Invalid username or password');
            setIsLoading(false);
            setEmail('');
            setPassword('');
        }
    };

    return (
        <ChakraProvider>
            <Box flexShrink="0" my={4} textAlign="left" paddingLeft="10">
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email"
                            placeholder="email@example.com"
                            size="lg"
                            onChange={event => setEmail(event.currentTarget.value)} />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password"
                            placeholder="*******"
                            size="lg"
                            onChange={event => setPassword(event.currentTarget.value)} />
                    </FormControl>
                    <Button width="full" mt={4} type="submit">
                        Sign In
                    </Button>
                </form>
            </Box>
        </ChakraProvider>
    );
}