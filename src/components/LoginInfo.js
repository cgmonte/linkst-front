import {
    ChakraProvider,
    Flex,
    Text,
} from '@chakra-ui/react';

export function LoginInfo() {

    return (
        <ChakraProvider>
            <Flex flexDirection="column" justifyContent="space-between">
            <Text fontSize="2xl" paddingTop="0.4em" color="white">
                Gere um certificado de expertise <br /> em Strateegia e compartilhe nas suas redes.
            </Text>

            </Flex>
        </ChakraProvider>
    );
}