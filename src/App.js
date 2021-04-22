import React from "react";
import "./App.css";
import Login from './components/login/login';
import Register from './components/login/register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

 

  render (){
    return(

      <Login/>

    );

  }

}

 



export default App;

