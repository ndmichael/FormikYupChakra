import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentDetailForm from './components/StudentDetailForm';
import { theme, ThemeProvider } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StudentDetailForm />
      </div>
    </ThemeProvider>

  );
}

export default App;
