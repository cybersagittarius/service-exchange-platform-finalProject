import React from 'react';
import {Link} from 'react-router-dom';
import Users from './UsersUI';
import user1 from '../assets/img/user1.jpg';
import user2 from '../assets/img/user2.jpg';
import user3 from '../assets/img/user3.jpg';
import user4 from '../assets/img/user4.jpg';
import user7 from '../assets/img/user7.jpg';
import user6 from '../assets/img/user6.jpg';


const Visitor = () => {
  return (
    <>
 <div className="visitor">
<h3>Show Category</h3>
<Link to="/register">
  <button className="btn btn-outline-danger btn-block">Join</button>
</Link> 
 </div>
<div className="underline"></div>
 {/*start Card  */}
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4">
      <Users images={user1} title="Charlotte Johnson"/>
      </div>
      <div className="col-md-4">
      <Users images={user2} title="Liam Williams"/>
      </div>
      <div className="col-md-4">
      <Users images={user3} title="Emma Brown"/>
      </div>
      <div className="col-md-4">
      <Users images={user4} title="Oliver Smith"/>
      </div>
      <div className="col-md-4">
      <Users images={user7} title="Nora Davis"/>
      </div>
      <div className="col-md-4">
      <Users images={user6} title="David Garcia"/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Visitor
