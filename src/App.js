// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';
//import './services/PrivateRoute.js';
// class App extends Component {
//   render() {
//     return (
      
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';


//import About from './About';
import Home from './Home';
//import ProductDetail from '../containers/ProductDetail';
import PageNotFound from "./PageNotFound";
import LoginForm from "./LoginForm";
import PrivateRoute from './PrivateRoute';
import { isLoggedIn, logout } from './services/auth';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
    logout = () => {
        logout();
        this.props.history.push( '/login' );
    }

    render() { 
       // console.log(isLoggedIn)
        console.log( 'this.props within App = ', this.props );
        return ( 
            <div>
                <div className="navbar navbar-static-top navbar-inverse" style={{marginBottom:'0px',backgroundColor : 'white',borderBottom: '1px solid grey'}}>
                    <div className="container" >
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/Home" style={{ marginLeft: "80px",fontSize:'12px'}}><i class="fa fa-github"></i>Home</Link>
                            <Link className="navbar-brand" to="/" style={{ marginLeft: "8px",fontSize:'12px'}}>Explore</Link>
                            <Link className="navbar-brand" to="/" style={{ marginLeft: "8px",fontSize:'12px'}}>Help</Link>
                            
                        </div>
                        <ul className="nav navbar-nav navbar-right" style={{ height: '50px', lineHeight: '50px',marginRight: "293px" }}>
                        <li>
                            <Link to="/Settings" style={{marginRight: "22px" }}><i class="fa fa-registered"></i> Register</Link>
                            </li>
                        <li>
                                {
                                    
                                    isLoggedIn ? <button onClick={this.logout} className="btn btn-sm btn-info">Logout</button> : <Link to="/login" style={{marginRight: "52px" }}><i class="fa fa-sign-in"></i> SignIn</Link>
                                }
                            </li>
                            
                            
                        </ul>
                    </div>
                
                <div>
                {/* <Footer class="page-footer font-small foot-1">
        <hr/>
        
        <div class="footer-copyright  py-3">© 2018 Gogs Version 0.11.83.1218 Page:3ms Template: 3ms
          
        </div>
        
      </Footer> */}
                
</div>
</div>       
                <div className="container-fluid" style={{backgroundColor : '#ffff',height:"700px"}}>
                    <Switch>
                        {/* <Route path="/" exact component={About} /> */}
                        <Route path="/" exact component={LoginForm} />
                        <Route path="/login" exact component={LoginForm} />
                        <PrivateRoute path="/Home" exact component={Home} />
                        {/*<Route path="/products/:id" component={ProductDetail} />*/}
                         
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
