import React from "react";
import TopNavigation from './TopNavigation'
import Footer from './Footer'
import SignIn from './SignIn';
import Content from './Content';
import {useAuth} from './contexts/AuthContext';

function App() {
  const {isMember} = useAuth();
    return (
        <div className="container">
            <TopNavigation/>
            <div className="main"> 
              { isMember ? <Content/> : <SignIn/> } 
            </div>
            <Footer/>
        </div>
    );
}

export default App;
