import {
    ChakraProvider,
    Flex,
    Link,
    Text,
} from '@chakra-ui/react';

export function LoginInfo() {

    return (
        <ChakraProvider>
            <Flex flexDirection="column" justifyContent="space-between">
            <Text fontSize="2xl" paddingTop="0.4em" color="white">
                Gere um certificado de experiência <br /> na platagorma <Link> strateegia.digital </Link> <br/> e adicione ao perfil do LinkedIn.
            </Text>

            </Flex>
        </ChakraProvider>
    );
}