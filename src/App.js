import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import FeedbackForm from "./components/FeedbackForm";
import './styles/global.css';
import "@fontsource/fira-sans-condensed"; 
import "@fontsource/fira-sans-condensed/400.css";  
import "@fontsource/fira-sans-condensed/400-italic.css";

function App() {
  return (
    <>
      <Header />
      <Body />
      <FeedbackForm />
      <Footer />
    </>
  );
}

export default App;