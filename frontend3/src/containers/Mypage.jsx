import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Mypage extends Component{
    render(){
        return(
            <div>
                <form onSubmit="{this.handleSubmit}">
                <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th >#</th>
          <th>userId</th>
          <th>userName</th>
          <th>email</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr >
          <th rowSpan="2">1</th>
          <th>Id</th>
          <th>이름</th>
          <th>이메일</th>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
          <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
                </form>
            </div>
        );
    }
}
export default Mypage;