import React from "react";

import * as bob from "@allied-solutions/affinity";
import { AffinityProvider, GlobalStyle } from "@allied-solutions/affinity";
import "./styles.css";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Form, Formik } from "formik";
import theme from "./theme";
import ContainerSection from "./ContainerSection";
import styled from "styled-components";
const StyledDiv = styled("div")``;
export default function Sample() {
  const scope = {
    ...bob,
    Form,
    Formik,
  };

  //   const code = `
  // <div>

  // <Container p={8}>
  // <Box
  // p={4}
  // borderRadius={4}
  // gradient="heroBlue"
  // typeStyle="displayLarge"
  // textAlign="center"
  // color="white">
  // Your Starter Project
  // <Button>djiofjds</Button>
  // </Box>
  // </Container>
  // </div>
  // `;

  const code = `
() => {
    const variable="Project"
    return(
        <Container>
    <Box        
    borderRadius={4}
    gradient="heroBlue"
    typeStyle="displayLarge"
    textAlign="center"
    color="white">Your Starter {variable}</Box>
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
    </Container >
  )}
`;

  return (
    <div style={{ display: "inline-flex", width: "100%" }}>
      <AffinityProvider theme={theme}>
        <GlobalStyle />

        <LiveProvider code={code} scope={scope}>
          <LiveEditor
            className="live-editor"
            style={{ maxHeight: "100vh", width: "490px" }}
          />
          <LiveError />
          <LivePreview style={{ width: "100%" }} />
        </LiveProvider>
      </AffinityProvider>
    </div>
  );
}
