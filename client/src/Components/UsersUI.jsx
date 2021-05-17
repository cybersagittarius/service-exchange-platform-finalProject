import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import {Link} from 'react-router-dom';

const Users = (props) => {
    return (
        <div className="card text-center">
        <div className="overflow">
            <img src={props.images} alt="Users" className="card-img-top"/>
        </div>
         <div className="card-body text-dark">
             <h4 className="card-title">{props.title}</h4>
             <p className="card-text text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt beatae accusantium accusamus ratione recusandae aspernatur molestias, commodi dicta exercitationem.</p>
<Link to="/notfound">
    <button className="btn btn-outline-danger btn-block">More Info</button>
</Link>
         </div>   
        </div> 
  

    )
}

export default Users;
