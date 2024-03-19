import React from "react";
import {
  Container,
  FormGroup,
  sleep,
  SubmitButton,
  Box,
} from "@allied-solutions/affinity";
import { Form, Formik } from "formik";

export default function ContainerSection() {
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
          input: "",
        }}
        onSubmit={async () => {
          await sleep(2000);
          alert("submitted");
        }}
      >
        {(formProps) => (
          <Form>
            <FormGroup id="input" bg="muted" p={4} borderRadius={1}>
              <FormGroup.Label>Label</FormGroup.Label>
              <FormGroup.InputGroup borderRadius="full">
                <FormGroup.InputGroup.Input placeholder="I am a text input" />
              </FormGroup.InputGroup>
              <FormGroup.Caption />
            </FormGroup>

            {/* end form group */}

            <SubmitButton
              id="SubmitButton--test"
              formikProps={formProps}
              rounded
            />

            <pre>{JSON.stringify(formProps.values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
