import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import Login from '../containers/Login';
import join from '../containers/Join';
import Mypage from '../containers/Mypage';
import Hello from "../containers/customer/Hello";
import LightSwitch from '../LightSwitch'
import Timer from '../containers/customer/Timer'
import TodoApp from '../containers/customer/TodoApp'
import Clock from '../containers/customer/Clock'
import Prac2 from '../Prac2'

class Navbar extends Component {

state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
 render() {
  return (
    <Router>
      <MDBNavbar color="red" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/Timer">Timer</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/LightSwitch">LightSwitch</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Hello">Hello</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">회원메뉴</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem><Link to="/Login">로그인</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/Join">회원가입</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/mypage">마이페이지</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/todoApp">ToDo App</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/clock">Clock</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/prac2">Prac2</Link></MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>

     
      </MDBNavbar>
      <Route path="/login" exact component={Login} />
      <Route path="/join" component={join} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/lightSwitch" component={LightSwitch} />
      <Route path="/timer" component={Timer} />
      <Route path="/hello" component={Hello} />
      <Route path="/todoApp" component={TodoApp} />
      <Route path="/prac2" component={Prac2} />
      <Route path="/clock" component={Clock} />
    
      </Router>
    );
  }
}

export default Navbar;