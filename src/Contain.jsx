import React from "react";
import {
  Container,
  FormGroup,
  sleep,
  SubmitButton,
  Box,
} from "@allied-solutions/affinity";
import { Form, Formik } from "formik";

export default function Contain() {
  return (
    <Container p={8}>
      <Box
        p={4}
        borderRadius={4}
        gradient="heroBlue"
        typeStyle="displayLarge"
        textAlign="center"
        color="white"
      >
        Your Starter Project
      </Box>
      <Formik
        initialValues={{
          input: "", // key must match `id` of `FormGroup`
        }}
        onSubmit={async () => {
          await sleep(2000);
          alert("submitted");
        }}
      >
        {(formProps) => (
          <Form>
            <FormGroup>
              <FormGroup.Label visible>Label</FormGroup.Label>
              <FormGroup.InputGroup>
                <FormGroup.InputGroup.Input placeholder="I am a text input" />
              </FormGroup.InputGroup>
              <FormGroup.Caption />
            </FormGroup>
            <SubmitButton
              id="SubmitButton--test"
              formikProps={formProps}
              rounded
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
}
