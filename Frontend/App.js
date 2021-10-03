import './App.css';
import {Component, useState} from 'react';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import {Navbar,Nav,Button,Container} from 'react-bootstrap'
import ProductCrud from './components/ProductCrud';
import UpdateProduct from './components/UpdateProduct';
import LoginAdmin from './components/LoginAdmin';
import AdminCrud from './components/AdminCrud';
import Logout from './components/Logout';
import Admin from './components/Admin';
import CartService1 from './components/CartService1';
import UserLogin from './components/UserLogin';
import SearchProductPage from './components/SearchProductPage';
import ViewProduct from './components/ViewProduct';
import User from './components/User';
import AuthService from "./services/auth.service";
import Login1 from "./components/login.component";
import Register1 from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";


// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Header from './components/Image';

import UserDetails from './components/UserDetails';
import AddToCard from './components/AddToCard';
import OrderService from './components/OrderService';
import PlaceOrder from './components/PlaceOrder';
import PaymentMethod from './components/PaymentMethod';
import AdminOrder from './components/AdminOrder';

class App extends Component {
   constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
  
      this.state = {
        showModeratorBoard: false,
        showAdminBoard: false,
        showUserBoard:false,
        currentUser: undefined,
      };
    }
  
    componentDidMount() {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        this.setState({
          currentUser: user,
          showUserBoard: user.roles.includes("ROLE_USER"),
          showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
          showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        });
      }
      
      EventBus.on("logout", () => {
        this.logOut();
      });
    }
  
    componentWillUnmount() {
      EventBus.remove("logout");
    }
  
    logOut() {
      AuthService.logout();
      this.setState({
        showModeratorBoard: false,
        showAdminBoard: false,
        showUserBoard:false,
        currentUser: undefined,
      });
    }
  render(){
   const { currentUser, showModeratorBoard, showAdminBoard ,showUserBoard} = this.state;
  return (
    <Router>
    <div className="App">
     
      <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container>
                       <Navbar.Brand href="#home">Shruti's Shopping Zone</Navbar.Brand>
                       <Navbar.Toggle aria-controls="basic-navbar-nav" />
                       <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="me-auto">
                       <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                      


                  
          <div className="navbar-nav mr-auto">
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

              {showAdminBoard && (
              <li className="nav-item">
                 <Link to={"/addProducts"} className="nav-link">
                   Add Products
                   </Link>
              </li>
            )}
              {showAdminBoard && (
              <li className="nav-item">
                  <Link to={"/adminCrud"} className="nav-link">
                    Edit and delete Products
                    </Link>
              </li>
            )}
             {showAdminBoard && (
              <li className="nav-item">
                  <Link to={"/users"} className="nav-link">
                    Customer Details
                    </Link>
              </li>
            )}
               {showAdminBoard && (
              <li className="nav-item">
                  <Link to={"/adminOrder"} className="nav-link">
                    Orders
                    </Link>
              </li>
            )}
            

           {showUserBoard && (
             
              <li className="nav-item"> 
                 <Link to={"orders"} className="nav-link">
                  Your Orders
                 </Link>
          
              </li>      
              
            )
           }
           
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register1"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
            {showUserBoard && (
             
             <div className="nav-item"> 
                 <Nav.Link as={Link} to={"/register"}>User Profile</Nav.Link>
                </div>      
             
           )
          }
           {showUserBoard && (
             
             <div className="nav-item"> 
                <Button className="cartButton" as={Link} to={"/cart"} style={{backgroundColor:'black'}}><img style={{width:50,height:50}} src="https://us.123rf.com/450wm/val2014/val20141603/val2014160300006/54302308-shopping-cart-icon.jpg?ver=6"></img></Button>
                </div>      
             
           )
          }
         
          
           {/* <Nav.Link as={Link} to={"/updateProduct/:id"}>Update Product</Nav.Link> */}
                 </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            
      {/* <ul>
        <Link to="/register">Register</Link><br />
        <Link to="/login">Login</Link>
      </ul> */}

             <Switch>
             <Route path="/home">     
                <Header />
                <h1>OUR CATALOG</h1>
                <ProductList />
                <h1>SHOP BY CATEGORY</h1>
                <SearchProductPage />   
                
             </Route>
              <Route path="/register">
                <Register />
             </Route> 
             {/* <Route path="/login">
                <Login />
             </Route> */} 
             <Route path="/addProducts">
                <ProductCrud />
             </Route>
             <Route path="/payment">
                <PaymentMethod />
             </Route>
             <Route path="/updateProduct/:id"
             render={props=>(
              <UpdateProduct {...props}/>
             )}
             >
             </Route>
        
             <Route path="/adminLogin">
                <LoginAdmin />
             </Route>
             <Route path="/adminCrud">
                <AdminCrud />
             </Route>
             <Route path="/logout">
                <Logout />
             </Route>
             <Route path="/admin">
                <Admin />
             </Route>
             <Route path="/cart">
                <CartService1 />
             </Route>
             <Route path="/userLogin">
                <UserLogin />
             </Route>
             <Route path="/search">
                <SearchProductPage/>
             </Route>
             <Route path="/view/:id">
                <ViewProduct/>
                <AddToCard />
             </Route>
             <Route path="/users">
                <UserDetails />
             </Route>
             <Route path="/userDetails">
                <User />
             </Route>
             <Route path="/orders">
                <OrderService />
             </Route>
             <Route path="/adminOrder">
                <AdminOrder />
             </Route>
          
          

             <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login1} />
            <Route exact path="/register1" component={Register1} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
       </Switch>
    </div> 
    </Router> 
    
  
  );
             }
}

export default App;
