import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentDetailForm from './components/StudentDetailForm';
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Testing from './components/ChakraFormComponents/Testing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <CSSReset />
         <StudentDetailForm /> 
        {/* <Testing /> */}
      </div>
    </ThemeProvider>

  );
}

export default App;
