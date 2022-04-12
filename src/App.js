import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import CreateContact from "./pages/CreateContact.tsx";
import CreateUser from "./pages/CreateUser.tsx";
import GetContact from "./pages/GetContact.tsx";
import GetUsers from "./pages/GetUsers.tsx";
import Home from "./pages/Home.tsx";
import AppBar from "./components/AppBar.tsx";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                path="/"
                element={
                  <>
                    <AppBar />
                    <Home />
                  </>
                }
              />
              <Route
                path="/createContact"
                element={
                  <>
                    <AppBar />
                    <CreateContact />
                  </>
                }
              />
              <Route
                path="/getContact"
                element={
                  <>
                    <AppBar />
                    <GetContact />
                  </>
                }
              />
              <Route
                path="/getUsers"
                element={
                  <>
                    <AppBar />
                    <GetUsers />
                  </>
                }
              />
              <Route
                path="/createUser"
                element={
                  <>
                    <AppBar />
                    <CreateUser />
                  </>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
