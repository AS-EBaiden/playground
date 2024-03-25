import React, { useState } from "react";
import "./DragBar.css";
import { AffinityProvider, GlobalStyle } from "@allied-solutions/affinity";
import "./styles.css";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Form, Formik } from "formik";
import theme from "./theme";
import ContainerSection from "./ContainerSection";
import styled from "styled-components";
import { scope } from "./scope";
const StyledDiv = styled("div")``;

function Happy() {
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(400);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newWidth = e.clientX;
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Add event listeners only when dragging is true
  React.useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup the listeners when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const code = `
  () => {
    const variable = "Project";
    return (
      <Container>
        <Box
          borderRadius={4}
          gradient="heroBlue"
          typeStyle="displayLarge"
          textAlign="center"
          color="white"
        >
          Your Starter {variable}
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
  }`;
  return (
    <AffinityProvider theme={theme}>
      <GlobalStyle />
      <LiveProvider code={code} scope={scope}>
        <div className="container">
          <LiveEditor style={{ width: width }} className="code-panel" />
          <div
            className="drag-bar"
            onMouseDown={handleMouseDown}
            style={{ cursor: dragging ? "ew-resize" : "col-resize" }}
          ></div>
          <div
            className="preview-panel"
            style={{ width: `calc(100% - ${width}px)` }}
          >
            <div>
              <LiveError />
              <LivePreview style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </LiveProvider>
    </AffinityProvider>
  );
  // return (
  //   <div className="container">
  //     <div className="code-panel" style={{ width: width }}>
  //       {/* Your code panel content goes here */}
  //       <div>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error
  //         modi obcaecati corrupti alias aliquid reprehenderit nisi dolorum, quo
  //         placeat aliquam expedita consequuntur non accusantium recusandae
  //         tempore. Odio, illo cum. Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Rem iste cum ipsam, consectetur aliquam ab maiores,
  //         doloribus, necessitatibus fugiat vel minus quibusdam quis
  //         reprehenderit hic itaque provident error totam inventore? Lorem ipsum
  //         dolor sit amet consectetur adipisicing elit. Numquam eaque ratione
  //         enim, ex cupiditate autem molestias unde illum explicabo fugiat
  //         nostrum temporibus accusantium. Quo, nostrum quia? Consectetur,
  //         voluptatem! Totam, et. Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Sequi accusamus necessitatibus quos ad rem nulla
  //         eum, minus adipisci velit earum architecto iste sint itaque quaerat
  //         ipsa eligendi cupiditate natus nostrum! Lorem ipsum dolor sit amet
  //         consectetur, adipisicing elit. Pariatur rem nesciunt, sapiente quasi
  //         cumque delectus necessitatibus dicta enim adipisci totam repellat
  //         omnis illum libero animi quas consectetur iste molestiae quisquam.
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
  //         quisquam nostrum placeat excepturi dolorum ratione magnam. Libero
  //         cumque atque odit laboriosam accusamus nihil odio, fugiat quae, qui
  //         eos aut et? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //         Facilis explicabo nostrum eos minima atque voluptatibus porro facere
  //         quos, neque quo nihil et fugit, ab voluptas cumque optio eveniet
  //         dolore non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Velit nesciunt repellat rem sapiente qui est libero porro deleniti,
  //         culpa ipsum? Sed enim libero beatae fugiat inventore! Quae laborum
  //         inventore voluptate. Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Nesciunt odio at non fuga eum porro nostrum. Et,
  //         quos iusto animi ipsa repellat quaerat ab dignissimos nobis rem
  //         consequatur vel sit! Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Neque, voluptas? Modi aliquam accusantium assumenda
  //         fugiat neque unde iusto exercitationem dolor veniam quia aspernatur
  //         sunt eos nobis quasi, fuga quidem quisquam! Lorem ipsum, dolor sit
  //         amet consectetur adipisicing elit. Vitae adipisci odit porro, sit
  //         neque veniam commodi nam error iste debitis quod doloremque magnam!
  //         Deserunt dolorum autem fugiat veritatis pariatur aspernatur. Lorem
  //         ipsum dolor sit amet consectetur adipisicing elit. Dolorum
  //         exercitationem, architecto sint nam ducimus beatae esse repellat
  //         deleniti animi cupiditate nostrum eaque at voluptatem iure quas
  //         blanditiis tempore praesentium error! Lorem ipsum dolor sit amet
  //         consectetur adipisicing elit. Cupiditate, nam, praesentium, nemo
  //         nostrum ea fugiat sint fuga ducimus hic ab saepe explicabo? Magni quos
  //         beatae velit illum porro nihil accusamus?
  //       </div>
  //     </div>
  //     <div
  //       className="drag-bar"
  //       onMouseDown={handleMouseDown}
  //       style={{ cursor: dragging ? "ew-resize" : "col-resize" }}
  //     ></div>
  //     <div
  //       className="preview-panel"
  //       style={{ width: `calc(100% - ${width}px)` }}
  //     >
  //       {/* Your preview panel content goes here */}
  //       <div>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error
  //         modi obcaecati corrupti alias aliquid reprehenderit nisi dolorum, quo
  //         placeat aliquam expedita consequuntur non accusantium recusandae
  //         tempore. Odio, illo cum. Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Rem iste cum ipsam, consectetur aliquam ab maiores,
  //         doloribus, necessitatibus fugiat vel minus quibusdam quis
  //         reprehenderit hic itaque provident error totam inventore? Lorem ipsum
  //         dolor sit amet consectetur adipisicing elit. Numquam eaque ratione
  //         enim, ex cupiditate autem molestias unde illum explicabo fugiat
  //         nostrum temporibus accusantium. Quo, nostrum quia? Consectetur,
  //         voluptatem! Totam, et. Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Sequi accusamus necessitatibus quos ad rem nulla
  //         eum, minus adipisci velit earum architecto iste sint itaque quaerat
  //         ipsa eligendi cupiditate natus nostrum! Lorem ipsum dolor sit amet
  //         consectetur, adipisicing elit. Pariatur rem nesciunt, sapiente quasi
  //         cumque delectus necessitatibus dicta enim adipisci totam repellat
  //         omnis illum libero animi quas consectetur iste molestiae quisquam.
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
  //         quisquam nostrum placeat excepturi dolorum ratione magnam. Libero
  //         cumque atque odit laboriosam accusamus nihil odio, fugiat quae, qui
  //         eos aut et? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //         Facilis explicabo nostrum eos minima atque voluptatibus porro facere
  //         quos, neque quo nihil et fugit, ab voluptas cumque optio eveniet
  //         dolore non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Velit nesciunt repellat rem sapiente qui est libero porro deleniti,
  //         culpa ipsum? Sed enim libero beatae fugiat inventore! Quae laborum
  //         inventore voluptate. Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Nesciunt odio at non fuga eum porro nostrum. Et,
  //         quos iusto animi ipsa repellat quaerat ab dignissimos nobis rem
  //         consequatur vel sit! Lorem ipsum dolor sit amet consectetur
  //         adipisicing elit. Neque, voluptas? Modi aliquam accusantium assumenda
  //         fugiat neque unde iusto exercitationem dolor veniam quia aspernatur
  //         sunt eos nobis quasi, fuga quidem quisquam! Lorem ipsum, dolor sit
  //         amet consectetur adipisicing elit. Vitae adipisci odit porro, sit
  //         neque veniam commodi nam error iste debitis quod doloremque magnam!
  //         Deserunt dolorum autem fugiat veritatis pariatur aspernatur. Lorem
  //         ipsum dolor sit amet consectetur adipisicing elit. Dolorum
  //         exercitationem, architecto sint nam ducimus beatae esse repellat
  //         deleniti animi cupiditate nostrum eaque at voluptatem iure quas
  //         blanditiis tempore praesentium error! Lorem ipsum dolor sit amet
  //         consectetur adipisicing elit. Cupiditate, nam, praesentium, nemo
  //         nostrum ea fugiat sint fuga ducimus hic ab saepe explicabo? Magni quos
  //         beatae velit illum porro nihil accusamus?
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Happy;
