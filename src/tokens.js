import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-line no-unused-vars
import { WrappedIntlProvider } from "./react-components/wrapped-intl-provider";
import { Header } from "./react-components/layout/Header";
import { Footer } from "./react-components/layout/Footer";
import Store from "./storage/store";
import "./utils/theme";
// import { WelcomeEmail } from "./Mail";

import { AuthContextProvider } from "./react-components/auth/AuthContext";
import { Form, Field } from "easy-react-form";
import "./assets/stylesheets/globals.scss";
import "./react-components/styles/global.scss";
// import { TokenPageLayout } from "./react-components/tokens/TokenPageLayout";
import { Container } from "./react-components/layout/Container";
import { ThemeProvider } from "./react-components/styles/theme";
import { Button } from "./react-components/input/Button";

// registerTelemetry("/tokens", "Backend API Tokens Page");
//
const store = new Store();
window.APP = { store };
const mystyle = {
  color: "white",
  padding: "10px",
  fontSize: "40px"
};
const formStyle = {
  backgroundColor: "white",
  padding: "10px",
  color: "black",
  borderRadius: "10px",
  border: "1px solid black",
  width: "220px"
};
function Root() {
  return (
    <WrappedIntlProvider>
      <ThemeProvider store={store}>
        <AuthContextProvider store={store}>
          <Header />

          <Container>
            <h1 style={mystyle}>Create Event</h1>
          </Container>
          <Container>
            <Form onSubmit={values => console.log(values)}>
              <h2> Room Name</h2>
              <Field style={formStyle} name="roomName" component="input" type="text" placeholder="My Executive Room" />
              <br />
              <br />
              <br />
              <h2> Invitee Email</h2>
              <Field style={formStyle} name="email1" component="input" type="email" placeholder="alice@metaverseplus.xyz" />
              <h2> Invitee Email</h2>
              <Field style={formStyle} name="email2" component="input" type="email" placeholder="alice@metaverseplus.xyz" />
              <h2> Invitee Email</h2>
              <Field style={formStyle} name="email3" component="input" type="email" placeholder="alice@metaverseplus.xyz" />
              <h2> Invitee Email</h2>
              <Field style={formStyle} name="email4" component="input" type="email" placeholder="alice@metaverseplus.xyz" />

              <br />
              <br />
              <br />
              <h2> Date </h2>
              <Field style={formStyle} name="date" component="input" type="date" placeholder="Date" />
              <br />
              <br />
              <br />
              <h2> Time </h2>
              <Field style={formStyle} name="time" component="input" type="time" placeholder="Time" />
              <br />
              <br />
              <br />
              <Button style={{width: "220px"}} type="submit">Create</Button>
            </Form>
          </Container>
        </AuthContextProvider>
      </ThemeProvider>
      <Footer />
    </WrappedIntlProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("ui-root"));
