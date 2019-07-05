import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userId : '',
            password : ''
        }
    }
    render(){
        return(
            <div>
                <form onSubmit="{this.handleSubmit}">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">Sign in</p>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Your ID
                            </label>
                            <input
                            type="id"
                            id="userId"
                            className="form-control"
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                            Your password
                            </label>
                            <input
                            type="password"
                            id="password"
                            className="form-control"
                            />
                            <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
                </form>
            </div>
        );
    }
}
export default Login;