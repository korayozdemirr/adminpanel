import { Button, Flex, Heading, Input } from "@chakra-ui/react"

const LoginPage = () =>{
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.100" p={12} rounded={12} width={500}>
                <Heading textAlign="center" mb={12}>Login</Heading>
                <Input placeholder="Email" mb={4} variant="outline" type="email" />
                <Input placeholder="Password" mb={4}  variant="outline" type="password" />
                <Button colorScheme="teal" variant="solid">Login</Button>
            </Flex>
        </Flex>
        )
}

export default LoginPage