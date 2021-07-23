import React from 'react';
import "./App.css";
import { Container } from 'reactstrap';
import LoginPage from "./Login/LoginPage";
import Desktop from "./Desktop/Desktop";
import DesktopII from "./DesktopII/DesktopII";
import DashBoard from "./DashBoard/DashBoard";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";



const App = () => {



  return (

    <>
     
      <Container fluid>

        <Router>
          <Route path="/" component={LoginPage} exact />
          <Route path="/Desktop" component={Desktop} exact />
          <Route path="/DesktopII" component={DesktopII} exact />
          <Route path="/DashBoard" component={DashBoard} exact />
          <Redirect path="/" />
        </Router>

      </Container>

    </>

  )
}

export default App
