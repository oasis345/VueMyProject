import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Mypage extends Component{
    render(){
        return(
            <div>
                <form onSubmit="{this.handleSubmit}">
      <MDBTable striped>
      <MDBTableHead>
        {/* <tr>
          <th >#</th>
          <th>userId</th>
          <th>userName</th>
          <th>email</th>
        </tr> */}
      </MDBTableHead>
      <MDBTableBody>
        <tr >
          <th rowSpan="3">1</th>
          <th>Id</th>
          <th>이름</th>
          <th>이메일</th>
        </tr>
        <tr>
          <td>채</td>
          <td>채형국</td>
          <td>guk@naver.com</td>
        </tr>
        <tr>
          <td>연락처</td>
          <td colSpan='3'>010-8580-9237</td>
        </tr>
        <tr>
          <td>주 소(도시)</td>
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