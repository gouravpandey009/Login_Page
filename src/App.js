import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const StyledDiv = styled.div`
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .form-container-2 {
    width: 50%;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
  }

  .input-container {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
    border-color: ${(props) => props.theme.primaryColor};
  }

  .sign-up-container {
    text-align: center;
  }

  .sign-up {
    background-color: ${(props) => props.theme.primaryColor};
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 12px 20px;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  .sign-up:hover {
    background-color: ${(props) => props.theme.primaryColorDark};
  }

  @media screen and (max-width: 768px) {
    .form-container-2 {
      width: 70%;
    }
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 16px; /* Increased padding for a larger button */
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s;
  position: fixed;
  top: 20px;
  right: 20px; /* Positioned on the right side */
  z-index: 999; /* Ensuring it's above other elements */

  &:hover {
    background-color: ${(props) => props.theme.toggleButtonHover};
    transform: scale(1.1);
  }
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const icon =
    theme === "light" ? (
      <FontAwesomeIcon icon={faMoon} />
    ) : (
      <FontAwesomeIcon icon={faSun} />
    );
  const tooltipText =
    theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="dark-light-toggle-container" title={tooltipText}>
          <ToggleButton className="dark-light-toggle" onClick={themeToggler}>
            {icon}
          </ToggleButton>
        </div>
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <StyledDiv>
                <div className="form-container">
                  <div className="form-container-2">
                    <h1>Welcome</h1>
                    <Signup />
                  </div>
                </div>
              </StyledDiv>
            </Route>
            <Route path="/login">
              <StyledDiv>
                <div className="form-container">
                  <div className="form-container-2">
                    <h1>Login</h1>
                    <Login />
                  </div>
                </div>
              </StyledDiv>
            </Route>
          </Switch>
        </HashRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
