import { Form, Formik, Field } from "formik"
import { useRouter } from "next/router"
import { useAuth } from "../context/AuthContext"
import { Flex, Box, Container, Image, Center, Stack, Button, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  const { signUp } = useAuth();
  const router = useRouter();

  return (
    <Flex h="100vh">
      <Box w="50%"> 
        <Image
          h="100vh" 
          w="100%"
          src='https://images.unsplash.com/photo-1664154026818-b49c159c91d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        />
      </Box>
      <Container>
        <Center h='100%' flexDir="column">
          <Box textAlign="left" w="400px" mb="12px">
            <Heading size="2xl" lineHeight="140%">Welcome,</Heading>
            <Text fontSize="2xl">Please choose your role below to get started:</Text>
          </Box>
          <Box>
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}

              onSubmit={async (values) => {
                try {
                  await signUp(values.email, values.password);
                  router.push("/portal");
                } catch (error) {
                  console.log(error.message);
        }
              }}
            >
              <Form>
                <Stack spacing="12px">
                  <Field type="text" placeholder="Your email" name="email" className="form-input"/>
                  <Field placeholder="Your password" type="password" name="password" className="form-input"/>
                  <Button type="submit" size="lg">
                    Sign Up
                  </Button>
                </Stack>
              </Form>
            </Formik>
          </Box>
        </Center>
      </Container>
    </Flex>
  )
}
