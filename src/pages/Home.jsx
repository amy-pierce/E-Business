//import React, { Component } from 'react';
//import Footer from '../components/Footer.jsx';
//import Jumbotron from '../components/Jumbotron.jsx';

//import Login from '../pages/Login.js';
//import Verify from '../pages/Verify.js';



//var number_to_Verify="no number entered yet";



//const Ver = ({ user, onSignOut }) => {
//    // This is a dumb "stateless" component
//    return (

//        <div>
//            Welcome <strong>{user.username}</strong>!
//      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
//                <Verify/>
//            </div>
       
//    )
//}


//class Home extends Component {


//    constructor(props) {
//        super(props);
//        this.state = {
//            value: '',
//            user: null};

//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }


//    signIn(username, password) {
//        this.setState({
//            user: {
//                username,
//                password,
//            }
//        })
//    }



//    handleChange(event) {
//       this.setState({ value: event.target.value });
//    }

//    handleSubmit(event) {
        
//        number_to_Verify = this.state.value;
//        this.state = { value: '' };
//        alert('A name was submitted: ' + number_to_Verify);
//        event.preventDefault();
//        this.setState({ value: ''});
        
//    }

//    handleLog(event) {
//        event.preventDefault();
     
//    }

//    signOut() {
//        this.setState({ user: null })
//    }

//  render() {
//      return (
//          <div>
             
//              <Jumbotron title="Login" subtitle="enter phone number" />

//              <h1>My cool App</h1>
//              {
//                  (this.state.user) ?
//                      <Ver
//                          user={this.state.user}
//                          onSignOut={this.signOut.bind(this)}
//                      />
//                      :
//                      <Login
//                          onSignIn={this.signIn.bind(this)}
//                      />
//              }


//        <div className="container">          
//        </div>
              
//              <form onSubmit={this.handleLog} >
                  
                  
//              </form>

//              <Footer />

//        </div >

      
//    );
//  }
//}

//export default Home




import React, { Component } from "react";

class Home extends Component {

    constructor(props) {
        super(props)

        
    }





    render() {


        return (
            <div >
            
            </div>
        )
    }
}

export default Home;





