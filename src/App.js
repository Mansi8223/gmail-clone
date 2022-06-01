import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmailList from './EmailList';
import Header from './Header';
import Mail from './Mail';
import SendMail from './SendMail';
import Sidebar from './Sidebar';
import {selectSendMessageIsOpen} from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="app">
        <Header />
        <div className='app_body'>
          <Sidebar />
          <Routes>
            <Route exact path="/mail" element={<Mail/>}/>
            <Route path="/" element={<EmailList />}/>
          </Routes>
        </div>
        
        {sendMessageIsOpen && <SendMail/>}
     </div>
    </Router>
  );
}

export default App;
