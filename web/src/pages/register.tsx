import React, { FC, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Box, Button } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import InputFields from "../components/InputField";
import { useMutation } from "urql";
interface registerProps {}

const REGISTER_MUT = `
mutation Register($username: String!, $password:String!) {
  register(options: { username: $username, password: $password }) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
`;
const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUT);
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values);
          const response = await register(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputFields
              name="username"
              label="Username"
              placeholder="username"
            />
            <Box mt={4}>
              <InputFields
                name="password"
                label="Password"
                placeholder="password"
                type="password"
              />
            </Box>

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="teal"
            >
              {" "}
              Resgister
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
